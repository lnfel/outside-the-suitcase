import { PUBLIC_LAMY_API_GOOGLE_SHEETS_API_KEY, PUBLIC_GLOBAL_RANKING_SPREADSHEET_ID } from "$env/static/public"
import { parseSheetData, filterHeaders } from "$lib/google/sheets"

export const load = async ({ fetch }) => {
    const f2pHeadersResponse = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${PUBLIC_GLOBAL_RANKING_SPREADSHEET_ID}/values/F2P!B8:8?majorDimension=ROWS&key=${PUBLIC_LAMY_API_GOOGLE_SHEETS_API_KEY}`)
    const headers = filterHeaders((await f2pHeadersResponse.json())?.values[0] ?? [])

    const f2pResponse = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${PUBLIC_GLOBAL_RANKING_SPREADSHEET_ID}/values:batchGet?ranges=F2P!C10:V&ranges=F2P!Y10:AR&ranges=F2P!AU10:BN&ranges=F2P!BQ10:CJ&ranges=F2P!CM10:DF&majorDimension=ROWS&key=${PUBLIC_LAMY_API_GOOGLE_SHEETS_API_KEY}`)
    const f2pData = parseSheetData(headers, (await f2pResponse.json()).valueRanges)

    const ffaResponse = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${PUBLIC_GLOBAL_RANKING_SPREADSHEET_ID}/values:batchGet?ranges=FFA!C10:V&ranges=FFA!Y10:AR&ranges=FFA!AU10:BN&ranges=FFA!BQ10:CJ&ranges=FFA!CM10:DF&majorDimension=ROWS&key=${PUBLIC_LAMY_API_GOOGLE_SHEETS_API_KEY}`)
    const ffaData = parseSheetData(headers, (await ffaResponse.json()).valueRanges)
    console.log(f2pData)

    return {
        f2p: f2pData,
        ffa: ffaData
    }
}
