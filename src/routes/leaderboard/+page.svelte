<script lang="ts">
    export let data: Sheet.Data<Sheet.RaidTitle>

    let category: Sheet.Category = 'f2p'
    const headers = [
        "Rank",
        "Entry Tag",
        "Entry Date",
        "Username",
        "Score",
        "Team"
    ]
    const categories = Object.keys(data)
    const raidGroup: Sheet.RaidTitle[] = Object.keys(data.f2p) as Sheet.RaidTitle[]
    const characterMap: Record<string, { thumbnail: string }> = {
        "37": {
            thumbnail: "https://www.prydwen.gg/static/a9df0a9f798cde750e47fe7b40c4cb61/60b4d/64_icon.webp"
        },
        "6": {
            thumbnail: "https://www.prydwen.gg/static/c3b16c3397767b4737aa9bb4ff4ffafc/60b4d/65_icon.webp"
        },
        "A Knight": {
            thumbnail: "https://www.prydwen.gg/static/12a9276bf3b49bb3cdde0543129d129f/60b4d/7_icon.webp"
        },
        "Lilya": {
            thumbnail: "https://www.prydwen.gg/static/54312ecf859812f00722a142e9f6a8a2/60b4d/4_icon.webp"
        },
        "Regulus": {
            thumbnail: "https://www.prydwen.gg/static/7837f8320689ec0c511ca55ac3f48fbf/60b4d/3_icon.webp"
        },
        "Tooth Fairy": {
            thumbnail: "https://www.prydwen.gg/static/dffcad8d709f386addef5085f913fa0e/60b4d/56_icon.webp"
        },
        "Kaalaa Baunaa": {
            thumbnail: "https://www.prydwen.gg/static/c746ac1cf15c943191df0b3f0938dec9/60b4d/62_icon.webp"
        },
        "Pickles": {
            thumbnail: "https://www.prydwen.gg/static/b2f0e0c2a66f1d950723a013bb843f4e/60b4d/54_icon.webp"
        },
        "Necrologist": {
            thumbnail: "https://www.prydwen.gg/static/44afab4c5d9e66ecb0f48194fbde44ba/60b4d/20_icon.webp"
        },
        "Balloon Party": {
            thumbnail: "https://www.prydwen.gg/static/7c5aacbd1d7debf7b5e171ef5b8eb21d/60b4d/19_icon.webp"
        },
        "Bkornblume": {
            thumbnail: "https://www.prydwen.gg/static/f5c8a1e76ffa90a6a3cc1628543264e7/60b4d/16_icon.webp"
        },
        "Spathodea": {
            thumbnail: "https://www.prydwen.gg/static/dbceab4cd300e4d053571a25c9ace92b/60b4d/65_icon.webp"
        },
        "Sweetheart": {
            thumbnail: "https://www.prydwen.gg/static/ebe0a115613ed47b1bb61dda6861207d/60b4d/13_icon.webp"
        },
        "Melania": {
            thumbnail: "https://www.prydwen.gg/static/4abbfd75d20606a1f0b2f2eb6ada77a2/60b4d/53_icon.webp"
        },
        "Jessica": {
            thumbnail: "https://www.prydwen.gg/static/d1016961dc8a59f5bc3a3d6d62ba841b/60b4d/58_icon.webp"
        },
        "Jiu Niangzi": {
            thumbnail: "https://www.prydwen.gg/static/865bb8cb048103c43d16b2d45d000a4e/60b4d/69_icon.webp"
        },
        "An-an Lee": {
            thumbnail: "https://www.prydwen.gg/static/0b86bc3c4710ab7fb76f3c30adfd1283/60b4d/0_icon.webp"
        },
        "Ms. NewBabel": {
            thumbnail: "https://www.prydwen.gg/static/ac2895e23af4900d682d5fd3ebfd2bda/60b4d/11_icon.webp"
        },
        "Ezra": {
            thumbnail: "https://www.prydwen.gg/static/8069d3e37cdd5917d78f9bd188c5e4b3/60b4d/66_icon.webp"
        },
        "Shamane": {
            thumbnail: "https://www.prydwen.gg/static/141d00528dcb72b350cfc725386985fa/60b4d/60_icon.webp"
        },
        "Leilani": {
            thumbnail: "https://www.prydwen.gg/static/30e7f4de8a38e2c4e5fb61ee96527b52/60b4d/41_icon.webp"
        },
        "Darley Clatter": {
            thumbnail: "https://www.prydwen.gg/static/e2d29a713c58c599f6a55423eb08e5fa/60b4d/45_icon.webp"
        }
    }
</script>

<svelte:head>
    <title>Reverse 1999 Global Leaderboard | Outside the suitcase</title>
</svelte:head>

<main class="px-10 md:px-20 py-6 space-y-6">
    <h2 class="crimson-text-bold text-tuscany-600 text-3xl">Mane's Bulletin Leaderboard</h2>

    <div class="flex items-center gap-2">
        <label for="category">Category</label>
        <select bind:value={category} name="category" id="category" class="appearance-none text-white text-sm bg-tuscany-600 outline-none hover:bg-tuscany-500 focus:bg-tuscany-500 pl-4 pr-8 py-1 bg-[right_0.5rem_center] bg-no-repeat bg-[length:1.5em_1.5em]">
            {#each categories ?? [] as category}
                <option value="{category}">{ category.toUpperCase() }</option>
            {/each}
        </select>
    </div>

    {#each raidGroup as raidTitle}
        <article>
            <h3 class="py-4 text-xl">{ raidTitle }</h3>
            <table class="w-full table-auto border-collapse">
                <thead>
                    <tr>
                        {#each headers as header}
                            <td class="py-2 text-lg">{ header }</td>
                        {/each}
                    </tr>
                </thead>
                <tbody>
                    {#each data[category][raidTitle]?.values ?? [] as entry}
                        <tr>
                            <td class="py-1"></td>
                            <td class="py-1">{ entry["Entry Tag"] }</td>
                            <td class="py-2">{ entry["Entry Date"] }</td>
                            <td class="py-2">{ entry.Username }</td>
                            <td class="py-2">{ entry.Score }</td>
                            <td class="py-2 flex items-center">
                                {#each entry.characters as character}
                                    {#if characterMap?.[character.Name]}
                                        <img src="{characterMap[character.Name]?.thumbnail ?? ""}" alt="{character.Name}" class="w-10 h-10" />
                                    {/if}
                                {/each}
                            </td>
                        </tr>
                    {/each}
                </tbody>
            </table>
        </article>
    {/each}
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
