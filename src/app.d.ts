// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		interface PageData {
            f2p: Sheet.RaidGroup<T>
            ffa: Sheet.RaidGroup<T>
            raid: Sheet.RaidTitle
            // this is the headers of the table columns displayed on the page
            // and is different from CellHeaders
            headers: string[]
            characterMap: import('$lib/data').CharacterMap
            categories: Sheet.Category[]
            category: Sheet.Category
        }
		// interface PageState {}
		// interface Platform {}
	}
    namespace Sheet {
        type CellHeaders = "Entry Tag" | "Entry Date" | "Username" | "Score" | "Portray" | "Resonance" | "Amplification" | "Character"
        type RaidTitle = "Darkness of the Abyss" | "Marsh Creation" | "Gold in the Cave" | "Hypothesis of Exhibition" | "Projection of Nightmare"
        type Category = "ffa" | "f2p"
        type Headers = string[]
        type Character = {
            "Portray": number
            "Resonance": number
            "Amplification": number
            "Name": keyof import('$lib/data').CharacterMap
        }
        type Entry = {
            "Entry Tag": string
            "Entry Date": string
            "Username": string
            "Score": number
            "characters": Character[]
        }
        type RaidData = {
            range?: string | null
            majorDimension?: string | null
            values?: Entry[]
        }
        type RaidGroup<T> = Record<RaidTitle, RaidData>
        type Data<T> = Record<Category, RaidGroup<T>>
    }
    interface Window {
        webkitAudioContext: typeof AudioContext
    }
}

export {};
