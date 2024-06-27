<script lang="ts">
    import { page } from '$app/stores'
    import { base } from '$app/paths'
    import { onNavigate } from '$app/navigation'
    import { onMount } from 'svelte'
    import { goto } from '$app/navigation'

    import LoadingSpinner from '$lib/components/LoadingSpinner.svelte'

    let { data } = $props()
    let category: Sheet.Category = $state(data.category)
    let raid: Sheet.RaidTitle | undefined = $state()
    let sheetStatus: 'pending' | 'resolved' = $state('pending')
    let filter = $state({
        column: 'score',
        order: 'descending'
    })
    type Filter = typeof filter

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

    /**
     * https://www.freecodecamp.org/news/how-to-sort-array-of-objects-by-property-name-in-javascript/
     * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare
     * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Collator
     */
    function sheetDataWithFilter(filter: Filter, sheetEntries: Sheet.Entry[]) {
        if (filter.column === 'username') {
            filter.order === 'ascending'
                ? sheetEntries.sort((a, b) => new Intl.Collator('en').compare(a.Username, b.Username))
                : sheetEntries.sort((a, b) => new Intl.Collator('en').compare(b.Username, a.Username))
        }
        if (filter.column === 'score') {
            filter.order === 'ascending'
                ? sheetEntries.sort((a, b) => a.Score - b.Score)
                : sheetEntries.sort((a, b) => b.Score - a.Score)
        }
        if (filter.column === 'entry date') {
            filter.order === 'ascending'
                ? sheetEntries.sort((a, b) => a['Entry Date'].valueOf() - b['Entry Date'].valueOf())
                : sheetEntries.sort((a, b) => b['Entry Date'].valueOf() - a['Entry Date'].valueOf())
        }
        return sheetEntries
    }

    async function filterToggle(name: string) {
        // if changing column sort, keep the previous order
        if (filter.column === name) {
            filter.order = filter.order === 'ascending' ? 'descending' : 'ascending'
        }
        filter.column = name
    }

    onNavigate(async () => {
        /**
         * [BUG] data.category and $page.data.category are bugged between +layout.ts, +page.ts and +page.svelte
         * [Solution] This is why we get searchParams from window.location instead
         */
        category = (new URL(window.location.toString()).searchParams.get('category') ?? 'f2p') as Sheet.Category

        /**
         * [BUG] Seems $page store is the one causing the bug, $page.params.raid returns the old slug
         * Resulting in user needing to click on the sidebar link twice to have the data show
         * [Solution] Use window.location.pathname for checks
         */
        raid = (await data.sheet).raidGroup.find((raid) => raid.toLowerCase().split(" ").join("-") === window.location.pathname.replace(`${base}/leaderboard/`, '').replace(`${$page.route.id?.replace('/(main)/leaderboard/', '').replace('/[raid=raid]', '')}/`, ''))
    })

    onMount(async () => {
        raid = (await data.sheet).raidGroup.find((raid) => raid.toLowerCase().split(" ").join("-") === $page.params.raid)

        // Check promise status and delay status change times the number of entries being animated
        data.sheet.then((sheet) => {
            if (raid) {
                setTimeout(() => { sheetStatus = 'resolved' }, Number(sheet[category][raid]?.values?.length ?? 0) * 410)
            }
        })
    })
</script>

<svelte:head>
    <title>{ raid } | Outside the suitcase</title>
</svelte:head>

<main class="flex-grow space-y-6">
    <h3 class="crimson-text-bold text-tuscany-600 dark:text-white text-2xl px-10 md:px-0">{ raid ?? 'Raid Title' }</h3>

    <div class="flex items-center gap-2 px-10 md:px-0">
        <label for="category">Category</label>
        <select bind:value={category} onchange={updateSearchParams} name="category" id="category" class="appearance-none cursor-pointer text-white text-sm bg-tuscany-600 outline-none hover:bg-tuscany-500 focus:bg-tuscany-500 pl-4 pr-8 py-1 bg-[right_0.5rem_center] bg-no-repeat bg-[length:1.5em_1.5em]">
            {#each data.categories ?? [] as category}
                <option value="{category}">{ category.toUpperCase() }</option>
            {/each}
        </select>
    </div>


    <div class="table-container overflow-x-auto">
        <table class="w-full text-left border-collapse border border-tuscany-600">
            <thead>
                <tr>
                    <!-- {#each data.headers as header}
                        <th scope="col" class="px-4 py-2 text-lg whitespace-nowrap text-white bg-tuscany-600">{ header }</th>
                    {/each} -->
                    {#snippet headerElement({ name, sortable = false })}
                        {#if sortable}
                            <th scope="col" class="text-lg whitespace-nowrap text-white bg-tuscany-600">
                                <button onclick={() => filterToggle(name.toLowerCase())} type="button" class="flex items-center gap-1 outline-none hover:bg-tuscany-500 focus:bg-tuscany-500 px-4 py-2" class:bg-tuscany-500={filter.column === name.toLowerCase()}>
                                    <span>{ name }</span>
                                    {#if filter.column === name.toLowerCase()}
                                        {#if filter.order === 'ascending'}
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-up w-4 h-4"><path d="m18 15-6-6-6 6"/></svg>
                                        {:else}
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down w-4 h-4"><path d="m6 9 6 6 6-6"/></svg>
                                        {/if}
                                    {:else}
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevrons-up-down w-4 h-4"><path d="m7 15 5 5 5-5"/><path d="m7 9 5-5 5 5"/></svg>
                                    {/if}
                                </button>
                            </th>
                        {:else}
                            <th scope="col" class="px-4 py-2 text-lg whitespace-nowrap text-white bg-tuscany-600">{ name }</th>
                        {/if}
                    {/snippet}

                    {#each data.headers as header}
                        {#if ['Username', 'Score', 'Entry Date'].includes(header)}
                            {@render headerElement({ name: header, sortable: true })}
                        {:else}
                            {@render headerElement({ name: header })}
                        {/if}
                    {/each}
                </tr>
            </thead>
            <tbody class="{sheetStatus === 'pending' ? 'loading' : 'loaded'}">
                {#await data.sheet}
                    <tr>
                        <td colspan="6" class="skeleton crimson-text-regular tracking-wider border border-tuscany-600">
                            <div class="flex items-center justify-center gap-2 py-6">
                                <LoadingSpinner />
                                <span>Loading ranking data</span>
                            </div>
                        </td>
                    </tr>
                {:then sheetData}
                    {#if raid}
                        {#each sheetDataWithFilter(filter, sheetData[category][raid]?.values ?? []) as entry, index}
                        <!-- {#each sheetData[category][raid]?.values ?? [] as entry, index} -->
                            <tr class="raid-entry odd:bg-tuscany-200 even:bg-tuscany-100" style="--animation-order: {index + 1};">
                                <td class="raid-entry-rank px-4 py-2 dark:text-slate-800"></td>
                                <td class="raid-entry-username px-4 py-2 dark:text-slate-800">{ entry.Username }</td>
                                <td class="raid-entry-score px-4 py-2 dark:text-slate-800">{ entry.Score.toLocaleString() }</td>
                                <td class="raid-entry-characters dark:text-slate-800">
                                    <div class="flex items-center min-w-48 px-4 py-2">
                                        {#each entry.characters as character}
                                            {#if data.characterMap?.[character.Name]}
                                                <div data-state="close" data-current="inactive" class="character group dropdown relative">
                                                    <button onclick={toggleCharacterInfo} aria-label="Toggle team info" type="button" class="outline-none">
                                                        <img src="{data.characterMap[character.Name]?.thumbnail ?? ""}" alt="{character.Name}" loading="lazy" width="40" height="40" class="inline w-10 h-10" />
                                                    </button>
                                                    
                                                    <div class="dropdown-content group-data-[state=close]:hidden absolute left-1/2 -translate-x-1/2 z-10 text-white bg-tuscany-600 p-2 space-y-2">
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
                                <td class="px-4 py-2 dark:text-slate-800 whitespace-nowrap">{ entry["Entry Date"].toLocaleDateString('en-CA') }</td>
                            </tr>
                        {/each}
                    {/if}
                {/await}
            </tbody>
        </table>
    </div>
</main>

<style>
    /* .table-container:has([data-state=open]) {
        overflow: visible!important;
    } */

    table {
        counter-reset: ranking;
    }

    table > tbody tr > td:first-child:not(.skeleton)::before {
        counter-increment: ranking;
        content: counter(ranking);
    }

    table > tbody tr:last-of-type .dropdown-content {
        bottom: 100%;
    }

    table > tbody tr:nth-last-child(2) .dropdown-content {
        bottom: 100%;
    }

    select {
        background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%23FFFFFF' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e");
    }

    table > tbody:is(.loading) .raid-entry {
        opacity: 0;
        /* transform: translateX(-1rem); */
        animation-name: fade-in;
        animation-duration: 400ms;
        animation-timing-function: ease-in;
        animation-delay: calc(200ms * var(--animation-order));
        animation-fill-mode: forwards;
    }

    @keyframes fade-in {
        0% {
            opacity: 0;
            /* transform: translateX(-1rem); */
        }
        100% {
            opacity: 1;
            /* transform: translateX(0); */
        }
    }
</style>
