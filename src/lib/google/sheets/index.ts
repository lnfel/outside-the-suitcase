import type { sheets_v4 } from 'googleapis'

export function filterHeaders(headers: Sheet.RaidTitle[]) {
    return headers.filter((cell) => cell as string !== "")
}

export function parseSheetData(headers: Sheet.RaidTitle[], valueRanges?: sheets_v4.Schema$ValueRange[]): Sheet.RaidGroup<typeof headers[number]> {
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
    const entryMeta = cellHeaders.slice(0, 4) as ("Entry Tag" | "Entry Date" | "Username" | "Score")[]

    return headers?.reduce((accumulator, header, index) => {
        if (valueRanges?.[index]) {
            const values: Sheet.Entry[][] = valueRanges[index].values?.reduce((rowAccumulator, row, rowIndex) => {
                let entry: Record<typeof cellHeaders[number], any> = {}
                const characters = [row.slice(4, 8), row.slice(8, 12), row.slice(12, 16), row.slice(16, 20)].map((characterData, characterIndex) => {
                    let charaObject: Record<string, string> = {}
                    charaObject[cellHeaders[4]] = characterData[0]
                    charaObject[cellHeaders[5]] = characterData[1]
                    charaObject[cellHeaders[6]] = characterData[2]
                    charaObject[cellHeaders[7]] = characterData[3]
                    return charaObject
                })
                entryMeta.forEach((meta, metaIndex) => {
                    if (meta === 'Score') {
                        row[metaIndex] = Number(row[metaIndex].replace(/,/g, ''))
                    }
                    if (meta === 'Entry Date') {
                        row[metaIndex] = new Date(row[metaIndex])
                    }
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
