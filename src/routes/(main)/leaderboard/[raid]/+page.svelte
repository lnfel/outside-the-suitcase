<script lang="ts">
    import { page } from '$app/stores'
    import { onNavigate } from '$app/navigation'
    import { pushState, goto } from '$app/navigation'

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
    <div class="overflow-x-auto">
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
                            <span class="flex items-center min-w-48 px-4 py-2">
                                {#each entry.characters as character}
                                    {#if data.characterMap?.[character.Name]}
                                        <img src="{data.characterMap[character.Name]?.thumbnail ?? ""}" alt="{character.Name}" width="40" height="40" class="inline w-10 h-10" />
                                    {/if}
                                {/each}
                            </span>
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
    table {
        counter-reset: ranking;
    }

    table > tbody tr > td:first-child::before {
        counter-increment: ranking;
        content: counter(ranking);
    }

    select {
        background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%23FFFFFF' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e");
    }
</style>
