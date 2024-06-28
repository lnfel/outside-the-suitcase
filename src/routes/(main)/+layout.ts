import { raidGroup } from '$lib/data/index.js'

export const ssr = false

export const load = async ({ params, url }) => {
    return {
        raid: raidGroup.find((raid) => raid.toLowerCase().split(" ").join("-") === params.raid) as Sheet.RaidTitle,
        category: url.searchParams.get('category') ?? 'f2p'
    }
}
