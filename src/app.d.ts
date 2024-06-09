// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
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
            "Name": string
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
