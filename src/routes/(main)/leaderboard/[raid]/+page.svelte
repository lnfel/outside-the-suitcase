<script lang="ts">
    import { page } from '$app/stores'
    import { onNavigate } from '$app/navigation'
    import { goto } from '$app/navigation'

    let { data } = $props()
    let category: Sheet.Category = $state(data.category)

    /**
     * Get selected category value and triggere sveltekit navigation
     */
    function updateSearchParams(event: Event & { currentTarget: EventTarget & HTMLSelectElement }) {
        const searchParams = new URLSearchParams(window.location.search)
        searchParams.set('category', event.currentTarget.value)
        const url = new URL(window.location.toString())
        url.search = searchParams.toString()
        console.log(url.toString())
        // window.location.search = searchParams.toString()
        goto(url.toString())
    }

    function toggleCharacterInfo(event: Event & { currentTarget: EventTarget & HTMLButtonElement }) {
        event.stopPropagation()
        const characterCard = event.currentTarget.closest('.character') as HTMLDivElement
        if (characterCard) {
            // First we set the current intent to change state
            // If currentTarget is open and is active, we set it to inactive (it is now open but with intent to become inactive)
            // This prevents the second step from closing current card
            characterCard.dataset.current = characterCard.dataset.state === 'open'
                ? 'inactive'
                : 'active'
            // Second close everything that is not the current selected card
            const characterCards = document.querySelectorAll('.character[data-state="open"]:not([data-current="inactive"])') as NodeListOf<HTMLDivElement>
            characterCards.forEach((card) => {
                card.dataset.state = 'close'
            })
            // Finally it is safe to set the actual state
            characterCard.dataset.state = characterCard.dataset.state === 'open'
                ? 'close'
                : 'open'
        }
    }

    onNavigate(() => {
        /**
         * [BUG] data.category and $page.data.category are bugged between +layout.ts, +page.ts and +page.svelte
         * This is why we get searchParams from window.location instead
         */
        category = (new URL(window.location.toString()).searchParams.get('category') ?? 'f2p') as Sheet.Category
    })
</script>

<svelte:head>
    <title>{ data.raid } | Outside the suitcase</title>
</svelte:head>

<main class="flex-grow space-y-6">
    <h3 class="crimson-text-bold text-tuscany-600 dark:text-white text-2xl px-10 md:px-0">{ data.raid }</h3>

    <div class="flex items-center gap-2 px-10 md:px-0">
        <label for="category">Category</label>
        <select bind:value={category} onchange={updateSearchParams} name="category" id="category" class="appearance-none cursor-pointer text-white text-sm bg-tuscany-600 outline-none hover:bg-tuscany-500 focus:bg-tuscany-500 pl-4 pr-8 py-1 bg-[right_0.5rem_center] bg-no-repeat bg-[length:1.5em_1.5em]">
            {#each data.categories ?? [] as category}
                <option value="{category}">{ category.toUpperCase() }</option>
            {/each}
        </select>
    </div>

{#if data.raid}
<!-- <pre>
    <code>
{JSON.stringify($page.data.f2p[data.raid], null, 4)}
    </code>
</pre> -->
    <div class="table-container overflow-x-auto">
        <table class="w-full text-left border-collapse">
            <thead>
                <tr>
                    {#each data.headers as header}
                        <th scope="col" class="px-4 py-2 text-lg whitespace-nowrap text-white bg-tuscany-600">{ header }</th>
                    {/each}
                </tr>
            </thead>
            <tbody>
                {#each data[category][data.raid]?.values ?? [] as entry}
                    <tr class="odd:bg-tuscany-200 even:bg-tuscany-100">
                        <td class="px-4 py-2 dark:text-slate-800"></td>
                        <td class="px-4 py-2 dark:text-slate-800">{ entry.Username }</td>
                        <td class="px-4 py-2 dark:text-slate-800">{ entry.Score }</td>
                        <!-- flex items-center -->
                        <td class="dark:text-slate-800">
                            <div class="flex items-center min-w-48 px-4 py-2">
                                {#each entry.characters as character}
                                    {#if data.characterMap?.[character.Name]}
                                        <div data-state="close" data-current="inactive" class="character group dropdown relative">
                                            <button onclick={toggleCharacterInfo} aria-label="Toggle team info" type="button" class="outline-none">
                                                <img src="{data.characterMap[character.Name]?.thumbnail ?? ""}" alt="{character.Name}" width="40" height="40" class="inline w-10 h-10" />
                                            </button>

                                            <!-- group-data-[state=close]:hidden -->
                                            <div class="dropdown-content group-data-[state=close]:hidden absolute left-1/2 -translate-x-1/2 z-[9] text-white bg-tuscany-600 p-2 space-y-2">
                                                <div class="crimson-text-bold tracking-wide">{ character.Name }</div>
                                                <ul class="text-sm">
                                                    <li class="flex items-center justify-between flex-nowrap whitespace-nowrap space-x-4">
                                                        <div>Resonance level</div>
                                                        <div>{character.Resonance}</div>
                                                    </li>
                                                    <li class="flex items-center justify-between flex-nowrap whitespace-nowrap space-x-4">
                                                        <div>Portray</div>
                                                        <div>{ character.Portray }</div>
                                                    </li>
                                                    <li class="flex items-center justify-between flex-nowrap whitespace-nowrap space-x-4">
                                                        <div>Amplification</div>
                                                        <div>{ character.Amplification }</div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    {/if}
                                {/each}
                            </div>
                        </td>
                        <td class="px-4 py-2 dark:text-slate-800">{ entry["Entry Tag"] }</td>
                        <td class="px-4 py-2 dark:text-slate-800">{ entry["Entry Date"] }</td>
                    </tr>
                {/each}
            </tbody>
        </table>
    </div>
{/if}
</main>

<style>
    .table-container:has([data-state=open]) {
        overflow: visible!important;
    }

    table {
        counter-reset: ranking;
    }

    table > tbody tr > td:first-child::before {
        counter-increment: ranking;
        content: counter(ranking);
    }

    table > tbody tr:last-of-type .dropdown-content {
        bottom: 100%
    }

    select {
        background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%23FFFFFF' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e");
    }
</style>
