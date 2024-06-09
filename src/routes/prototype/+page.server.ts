import { LAMY_API_GOOGLE_SHEETS_API_KEY, GLOBAL_RANKING_SPREADSHEET_ID } from '$env/static/private'
import { google } from 'googleapis'
import type { sheets_v4 } from 'googleapis'

function filterHeaders(headers: Sheet.RaidTitle[]) {
    return headers.filter((cell) => cell as string !== "")
}

function parseSheetData(headers: Sheet.RaidTitle[], valueRanges?: sheets_v4.Schema$ValueRange[]): Sheet.RaidGroup<typeof headers[number]> {
    return headers?.reduce((accumulator, header, index) => {
        if (valueRanges?.[index]) {
            const values: Sheet.Entry[][] = valueRanges[index].values?.reduce((rowAccumulator, row, rowIndex) => {
                let entry: Record<typeof cellHeaders[number], any> = {}
                const cellHeaders = [
                    "Entry Tag",
                    "Entry Date",
                    "Username",
                    "Score",
                    "Portray",
                    "Resonance",
                    "Amplification",
                    "Name"
                ]
                const entryMeta = cellHeaders.slice(0, 4) as string[]
                const characters = [row.slice(4, 8), row.slice(8, 12), row.slice(12, 16), row.slice(16, 20)].map((characterData, characterIndex) => {
                    let charaObject: Record<string, string> = {}
                    charaObject[cellHeaders[4]] = characterData[0]
                    charaObject[cellHeaders[5]] = characterData[1]
                    charaObject[cellHeaders[6]] = characterData[2]
                    charaObject[cellHeaders[7]] = characterData[3]
                    return charaObject
                })
                entryMeta.forEach((meta: string, metaIndex) => {
                    entry[meta] = row[metaIndex]
                })
                entry.characters = characters
                rowAccumulator.push(entry)
                return rowAccumulator
            }, []) ?? []

            valueRanges[index].values = values
            accumulator[header] = valueRanges[index] as Sheet.RaidData
        }
        return accumulator
    }, {} as Sheet.RaidGroup<Sheet.RaidTitle>)
}

/**
 * https://www.phind.com/search?cache=vlvldh96v8s8w00qtqdsgzqu
 * https://developers.google.com/sheets/api/samples/reading
 * https://developers.google.com/sheets/api/guides/concepts#cell
 * https://learn.microsoft.com/en-us/office/troubleshoot/excel/numeric-columns-and-rows
 */
export const load = async ({ fetch }) => {
    const auth = google.auth.fromAPIKey(LAMY_API_GOOGLE_SHEETS_API_KEY)
    const client = google.sheets({ version: 'v4', auth })
    const f2pHeaders = await client.spreadsheets.values.get({
        spreadsheetId: GLOBAL_RANKING_SPREADSHEET_ID,
        range: "F2P!B8:8"
    })
    const headers = filterHeaders(f2pHeaders.data.values?.[0] ?? [])
    const f2pResponse = await client.spreadsheets.values.batchGet({
        spreadsheetId: GLOBAL_RANKING_SPREADSHEET_ID,
        ranges: ["F2P!C10:V", "F2P!Y10:AR", "F2P!AU10:BN", "F2P!BQ10:CJ", "F2P!CM10:DF"] // A1 notation
        // ranges: ["R10C"] // R1C1 notation, NOTE: study R1C1 later
    })
    const ffaResponse = await client.spreadsheets.values.batchGet({
        spreadsheetId: GLOBAL_RANKING_SPREADSHEET_ID,
        ranges: ["FFA!C10:V", "FFA!Y10:AR", "FFA!AU10:BN", "FFA!BQ10:CJ", "FFA!CM10:DF"] // A1 notation
    })
    // Sheets have similar header structure so we can simply re-use one headers data for all similar sheets
    const f2pData = parseSheetData(headers, f2pResponse.data.valueRanges)
    const ffaData = parseSheetData(headers, ffaResponse.data.valueRanges)
    // console.log({
    //     auth, client, response: response.data
    // })
    // const response = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${GLOBAL_RANKING_SPREADSHEET_ID}/values/F2P?key=${LAMY_API_GOOGLE_SHEETS_API_KEY}`)
    // const data = await response.json()
    // console.log({
    //     data
    // })
    return {
        f2p: f2pData,
        ffa: ffaData
    }
}
