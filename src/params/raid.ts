import { raidGroup } from "$lib/data"

/**
 * https://kit.svelte.dev/docs/advanced-routing#matching
 */
export function match(param) {
    return raidGroup.map((raid) => raid.toLowerCase().split(" ").join("-")).includes(param) || param === 'stats'
}
