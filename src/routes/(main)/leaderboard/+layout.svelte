<script lang="ts">
    import { page } from '$app/stores'
    import { base } from '$app/paths'
    export let data: Sheet.Data<Sheet.RaidTitle>

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
    const raidGroup: Sheet.RaidTitle[] = Object.keys(data.f2p) as Sheet.RaidTitle[]
</script>

<div class="flex-grow px-10 md:px-20 py-6 pt-20 md:pt-6 space-y-6">
    <h2 class="crimson-text-bold text-tuscany-600 dark:text-white text-3xl">Mane's Bulletin Leaderboard</h2>

    <div class="flex flex-col md:flex-row gap-4">
        <aside class="flex-shrink-0 sticky top-6 backdrop-blur-sm md:backdrop-blur-none">
            <div class="sticky top-[9rem] flex md:flex-col gap-2 md:top-20">
                {#each raidGroup as raid}
                    <a href="{base}/leaderboard/{raid.toLowerCase().split(" ").join("-")}" class="{$page.params.raid === raid.toLowerCase().split(" ").join("-") ? 'bg-tuscany-600 text-white' : ''} whitespace-nowrap outline-none hover:text-white focus:text-white hover:bg-tuscany-600 focus:bg-tuscany-600 p-0.5 md:px-2 md:py-1">
                        {#if raidMap[raid].thumbnail}
                            <img src="{raidMap[raid].thumbnail}" alt="{raid}" loading="lazy" class="w-10 h-10 aspect-square md:hidden">
                        {/if}
                        <div class="sr-only md:not-sr-only">
                            {raid}
                        </div>
                    </a>
                {/each}
            </div>
        </aside>

        <slot />
    </div>
</div>
