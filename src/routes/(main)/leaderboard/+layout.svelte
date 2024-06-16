<script lang="ts">
    import { page } from '$app/stores'
    import { base } from '$app/paths'
    import { onNavigate } from '$app/navigation'

    import LoadingSpinner from '$lib/components/LoadingSpinner.svelte'
    
    let { data } = $props()
    let search = $state(window.location.search)

    const raidMap: Record<Sheet.RaidTitle, { thumbnail: string }> = {
        "Darkness of the Abyss": {
            thumbnail: `${base}/img/ui/darkness-of-the-abyss.webp`
        },
        "Marsh Creation": {
            thumbnail: `${base}/img/ui/marsh-creation.webp`
        },
        "Gold in the Cave": {
            thumbnail: `${base}/img/ui/gold-in-the-cave.webp`
        },
        "Hypothesis of Exhibition": {
            thumbnail: `${base}/img/ui/hypothesis-of-exhibition.webp`
        },
        "Projection of Nightmare": {
            thumbnail: `${base}/img/ui/projection-of-nightmare.webp`
        }
    }
    // const raidGroup = Object.keys(data.f2p) as Sheet.RaidTitle[]

    onNavigate(() => {
        search = window.location.search
    })
</script>

<svelte:head>
    <link rel="stylesheet" href="{base}/css/leaderboard.css">
</svelte:head>

<div class="flex-grow md:px-20 py-6 pt-20 md:pt-6 space-y-6">
    <h2 class="crimson-text-bold text-tuscany-600 dark:text-white text-3xl px-10 md:px-0">Mane's Bulletin Leaderboard</h2>

    <div class="flex flex-col md:flex-row gap-4">
        <aside class="flex-shrink-0 sticky top-6 backdrop-blur-sm md:backdrop-blur-none px-10 md:px-0">
            <!-- [&:has(.spinner)]:h-full [&:has(.spinner)]:justify-center -->
            <div class="raid-nav sticky min-w-[180px] top-[9rem] flex md:flex-col gap-2 md:top-20">
                <!-- https://10015.io/tools/css-loader-generator -->
                {#await data.sheet}
                    <LoadingSpinner class="self-center" />
                {:then sheet}
                    {#each sheet.raidGroup as raid, index}
                        <a href="{base}/leaderboard/{raid.toLowerCase().split(" ").join("-")}{search}" style="--animation-order: {index + 1};" class="raid-link {$page.params.raid === raid.toLowerCase().split(" ").join("-") ? 'bg-tuscany-600 text-white' : ''} whitespace-nowrap outline-none hover:text-white focus:text-white hover:bg-tuscany-600 focus:bg-tuscany-600 p-0.5 md:px-2 md:py-1">
                            {#if raidMap[raid].thumbnail}
                                <img src="{raidMap[raid].thumbnail}" alt="{raid}" loading="lazy" class="w-10 h-10 aspect-square md:hidden">
                            {/if}
                            <div class="sr-only md:not-sr-only">
                                {raid}
                            </div>
                        </a>
                    {/each}
                {/await}
            </div>
        </aside>

        <slot />
    </div>
</div>

<style>
    .raid-link {
        opacity: 0;
        transform: translateX(-1rem);
        animation-name: fade-in;
        animation-duration: 400ms;
        animation-timing-function: ease-in;
        animation-delay: calc(200ms * var(--animation-order));
        animation-fill-mode: forwards;
    }

    @keyframes fade-in {
        0% {
            opacity: 0;
            transform: translateX(-1rem);
        }
        100% {
            opacity: 1;
            transform: translateX(0);
        }
    }
</style>
