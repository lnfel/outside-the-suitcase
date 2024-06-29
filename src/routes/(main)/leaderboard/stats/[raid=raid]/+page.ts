import { headers, characterMap } from '$lib/data'

export const load = async ({ url }) => {
    return {
        headers,
        characterMap,
        categories: ['f2p', 'ffa'] as Sheet.Category[],
        category: (url.searchParams.get('category') ?? 'f2p') as Sheet.Category
    }
}
