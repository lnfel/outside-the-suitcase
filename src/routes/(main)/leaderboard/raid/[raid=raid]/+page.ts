import { headers, characterMap, afflatusMap } from '$lib/data'

export const load = async ({ parent, params, url }) => {
    // const { sheet } = await parent()
    // const raidGroup: Sheet.RaidTitle[] = Object.keys(f2p) as Sheet.RaidTitle[]
    // const raid = (await sheet).raidGroup.find((raid) => raid.toLowerCase().split(" ").join("-") === params.raid) as Sheet.RaidTitle

    return {
        // raid,
        headers,
        characterMap,
        afflatusMap,
        categories: ['f2p', 'ffa'] as Sheet.Category[],
        category: (url.searchParams.get('category') ?? 'f2p') as Sheet.Category
    }
}
