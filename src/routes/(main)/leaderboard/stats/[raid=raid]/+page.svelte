<script lang="ts">
    import { page } from '$app/stores'
    import { base } from '$app/paths'
	import { onMount } from 'svelte'
    import { onNavigate, goto } from '$app/navigation'
    import { characterMap } from '$lib/data'
    import { Chart, PieController, ArcElement, Colors, Legend, Tooltip } from 'chart.js'
    import { toFont } from 'chart.js/helpers'
    import type { TooltipModel } from 'chart.js'

    import LoadingSpinner from '$lib/components/LoadingSpinner.svelte'

    /**
     * see chart.js/dist/types/utils
     */
    type DeepPartial<T> = T extends Function
        ? T
        : T extends Array<infer U>
            ? _DeepPartialArray<U>
            : T extends object
            ? _DeepPartialObject<T>
            : T | undefined;

    type _DeepPartialArray<T> = Array<DeepPartial<T>>
    type _DeepPartialObject<T> = { [P in keyof T]?: DeepPartial<T[P]> };

    let { data } = $props()
    let category: Sheet.Category = $state(data.category)
    let raid: Sheet.RaidTitle | undefined = $state()
    let top4: {name: string, usage: number}[] = $state([])

    let chart: Chart<'pie'> | undefined = $state()
    let canvas: HTMLCanvasElement | undefined = $state()
    let legendPlugin = $state<_DeepPartialObject<import('chart.js').LegendOptions<"pie">>>({
        position: 'right',
        labels: {
            color: document.documentElement.classList.contains('dark') ? '#ffffff' : 'rgb(30 41 59)',
            font: {
                family: "'Mukta', sans-serif",
            }
        }
    })
    /**
     * https://www.chartjs.org/docs/latest/samples/tooltip/html.html
     */
    let tooltipPlugin = $state<_DeepPartialObject<import('chart.js').TooltipOptions<"pie">>>({
        enabled: false, // disable default tooltip since we will use external HTML tooltip
        displayColors: false,
        position: 'nearest',
        titleFont: {
            family: "'Crimson Text', serif",
            size: 18
        },
        external: externalTooltipHandler
    })
    Chart.register([PieController, ArcElement, Colors, Legend, Tooltip])

    /**
     * Get chart data of character usage for specific raid category
     * 
     * 1st Get array of teams per entry
     * 2nd Use reduce method to merge all unique character names into object keys while incrementing each usage count
     * 3rd Sort Object.entries from 2nd step via usage value in descending order
     * 4th Another reduce method to Object.entries from the result of 2nd step, pushing each character name keys to labels array and pushing count to chart data array
     * 
     * @see {@link https://www.chartjs.org/docs/latest/charts/doughnut.html#data-structure | Pie chart Data Structure - Chart.js}
     */
    function characterUsageStats(entries: Sheet.Entry[]) {
        const pie = Object.entries(entries?.map((entry) => {
                return entry.characters
            })
            .reduce((accumulator, team) => {
                team.forEach((character) => {
                    accumulator[character.Name] = Number(accumulator[character.Name] ?? 0) + 1
                })
                return accumulator
            }, {} as Record<keyof import('$lib/data').CharacterMap, number>) ?? {})
            .sort((a, b) => b[1] - a[1])
            .reduce((accumulator, [key, value]) => {
                accumulator.data.push(value)
                accumulator.labels.push(key)
                return accumulator
            }, { data: [] as number[], labels: [] as string[] })
        top4 = []
        pie.labels.slice(0, 4).forEach((name, index) => {
            top4.push({
                name,
                usage: pie.data[index]
            })
        })

        if (canvas) {
            if (!chart) {
                // TODO: Consider using a placeholder for empty pie chart while awaiting for data
                // https://jsfiddle.net/h6rLp2b3/
                chart = new Chart(canvas, {
                    type: 'pie',
                    data: {
                        labels: pie.labels,
                        datasets: [{
                            label: 'Times used',
                            data: pie.data
                        }]
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false,
                        plugins: {
                            legend: legendPlugin,
                            tooltip: tooltipPlugin
                        }
                    }
                })
            } else {
                chart.data.labels = pie.labels
                chart.data.datasets[0].label = 'Times used'
                chart.data.datasets[0].data = pie.data
                chart.update()
            }
        }
    }

    /**
     * Custom tooltip for chart hover interaction
     * 
     * https://www.chartjs.org/docs/latest/samples/tooltip/html.html
     * https://www.chartjs.org/docs/latest/configuration/tooltip.html#external-custom-tooltips
     * https://www.youtube.com/watch?v=zKVxr3Di9M4
     */
    function externalTooltipHandler({ chart, tooltip }: { chart: Chart, tooltip: TooltipModel<"pie"> }) {
        let tooltipContainer = document.querySelector('.character-usage-chart-tooltip-container') as HTMLDivElement

        if (!tooltipContainer) {
            tooltipContainer = document.createElement('div')
            const tooltipClass = ['character-usage-chart-tooltip-container', 'opacity-0', 'transition-all', 'duration-200', 'ease-in-out', 'bg-slate-800/90', 'px-2', 'py-1', 'rounded', 'after:content[""]', 'after:absolute', 'after:right-full', 'after:top-1/2', 'after:-translate-y-1/2', 'after:border-8', 'after:border-solid', 'after:border-transparent', 'after:border-r-slate-800/90', 'after:dark:border-r-slate-800/90']
            tooltipContainer.classList.add(...tooltipClass)
            // tooltipContainer.innerHTML = '<table class="character-usage-chart-tooltip-table"></table>'
            const tooltipElement = document.createElement('div')
            tooltipElement.classList.add('character-usage-chart-tooltip')
            tooltipContainer.appendChild(tooltipElement)
            document.body.appendChild(tooltipContainer)
        }

        const tooltipModel = tooltip
        if (tooltipModel.opacity === 0) {
            tooltipContainer.classList.remove('opacity-100')
            tooltipContainer.classList.add('opacity-0')
            // tooltipContainer.style.opacity = '0'
            return;
        }

        tooltipContainer.classList.remove(...['above', 'below', 'no-transform'])
        if (tooltipModel.yAlign) {
            tooltipContainer.classList.add(tooltipModel.yAlign)
        } else {
            tooltipContainer.classList.add('no-transform')
        }

        function getBody(bodyItem: TooltipModel<"pie">['body'][number]) {
            return bodyItem.lines
        }

        if (tooltipModel.body) {
            const titleLines = tooltipModel.title || []
            const bodyLines = tooltipModel.body.map(getBody)

            const tooltipElement = document.querySelector('.character-usage-chart-tooltip')
            const tooltipHeader = document.createElement('div')
            const tooltipHeaderClass = ['character-usage-chart-tooltip-header', 'flex', 'items-center', 'gap-2']
            tooltipHeader.classList.add(...tooltipHeaderClass)
            tooltipHeader.innerHTML = ''

            const tooltipContent = document.createElement('div')
            tooltipContent.classList.add('character-usage-chart-tooltip-content')

            const tooltipThumb = document.createElement('img')
            const tooltipTitle = document.createElement('div')
            // let innerHTML = '<thead>'
            titleLines.forEach((title) => {
                tooltipThumb.classList.add('character-usage-chart-tooltip-thumb')
                tooltipThumb.setAttribute('alt', title)
                tooltipThumb.setAttribute('width', '40')
                tooltipThumb.setAttribute('height', '40')
                tooltipThumb.src = characterMap[title as keyof typeof characterMap].thumbnail

                tooltipTitle.classList.add('character-usage-chart-tooltip-title', 'crimson-text-semibold', 'text-lg')
                tooltipTitle.textContent = title
                // innerHTML += `<tr><th>${title}</th></tr>`
                tooltipHeader.replaceChildren(tooltipThumb, tooltipContent)
                tooltipContent.replaceChildren(tooltipTitle)
            })
            tooltipElement?.replaceChildren(tooltipHeader)
            // innerHTML += '</thead><tbody>'

            const span = document.createElement('span')
            bodyLines.forEach((body, index) => {
                // const colors = tooltipModel.labelColors[index]
                // let style = `background: ${colors.backgroundColor};`
                // style += `border-color: ${colors.borderColor};`
                // style += `border-width: 2px;`
                // span.setAttribute('style', style)
                span.textContent = body[index]
                // const span = `<span style="${style}">${body}</span>`
                // innerHTML += `<tr><td>${span}</td></tr>`
            })
            tooltipContent.appendChild(span)
            // innerHTML += '</tbody>'

            // let tableRoot = tooltipContainer.querySelector('.character-usage-chart-tooltip-table')
            // if (tableRoot) {
            //     tableRoot.innerHTML = innerHTML
            // }
        }

        const position = chart.canvas.getBoundingClientRect()
        // const bodyFont = toFont(tooltipModel.options.bodyFont as Partial<import('chart.js').FontSpec>)

        // tooltipContainer.style.opacity = '1'
        tooltipContainer.classList.add('opacity-100')
        tooltipContainer.classList.remove('opacity-0')
        tooltipContainer.style.position = 'absolute'
        tooltipContainer.style.left = (position.left + window.scrollX + tooltipModel.caretX + 10) + 'px'
        tooltipContainer.style.top = position.top + window.scrollY + tooltipModel.caretY + 'px'
        tooltipContainer.style.transform = `translateY(-${tooltipContainer.clientHeight / 2}px)`
        // tooltipContainer.style.font = bodyFont.string
        // tooltipContainer.style.padding = tooltipModel.padding + 'px' + tooltipModel.padding + 'px'
        tooltipContainer.style.pointerEvents = 'none'
    }

    function updateSearchParams(event: Event & { currentTarget: EventTarget & HTMLSelectElement }) {
        const searchParams = new URLSearchParams(window.location.search)
        searchParams.set('category', event.currentTarget.value)
        const url = new URL(window.location.toString())
        url.search = searchParams.toString()
        console.log(url.toString())
        goto(url.toString())
    }

    onNavigate(async () => {
        category = (new URL(window.location.toString()).searchParams.get('category') ?? 'f2p') as Sheet.Category
        raid = (await data.sheet).raidGroup.find((raid) => raid.toLowerCase().split(" ").join("-") === window.location.pathname.replace(`${base}/leaderboard/`, '').replace(`${$page.route.id?.replace('/(main)/leaderboard/', '').replace('/[raid=raid]', '')}/`, ''))
        data.sheet.then((sheetData) => {
            if (raid) {
                characterUsageStats(sheetData[category][raid].values ?? [])
            }
        })
    })

    onMount(async () => {
        const themeToggleElement = document.querySelector('.theme-toggle')
        if (themeToggleElement) {
            themeToggleElement.addEventListener('click', async () => {
                if (chart) {
                    if (legendPlugin.labels) {
                        /**
                         * we reverse the color setting because the click event would fire before theme is finished changing
                         * see '$lib/components/DarkmodeToggle.svelte'
                         */
                        legendPlugin.labels.color = document.documentElement.classList.contains('dark') ? 'rgb(30 41 59)' : '#ffffff'
                    }
                    chart.options.plugins = {
                        legend: legendPlugin,
                        tooltip: tooltipPlugin,
                    }
                    // chart.update()
                    chart.update()
                }
            })
        }
        raid = (await data.sheet).raidGroup.find((raid) => raid.toLowerCase().split(" ").join("-") === $page.params.raid)
        data.sheet.then((sheetData) => {
            if (raid) {
                characterUsageStats(sheetData[category][raid].values ?? [])
            }
        })
    })
</script>

<svelte:head>
    <title>{ raid } | Outside the suitcase</title>
</svelte:head>

<main class="flex-grow space-y-6">
    <!-- flex flex-col md:flex-row md:items-center md:justify-between gap-4 -->
    <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <h3 class="crimson-text-bold text-tuscany-600 dark:text-tuscany-300 text-2xl px-10 md:px-0">{ raid ?? 'Raid Title' }</h3>

        <div class="flex items-center gap-2 px-10 md:px-0">
            <label for="category" class="sr-only md:not-sr-only">Category</label>
            <select bind:value={category} onchange={updateSearchParams} name="category" id="category" class="appearance-none cursor-pointer text-white text-sm bg-tuscany-600 outline-none hover:bg-tuscany-500 focus:bg-tuscany-500 pl-4 pr-8 py-1 bg-[right_0.5rem_center] bg-no-repeat bg-[length:1.5em_1.5em]">
                {#each data.categories ?? [] as category}
                    <option value="{category}">{ category.toUpperCase() }</option>
                {/each}
            </select>
        </div>
    </div>

    {#await data.sheet then sheetData}
        <div class="space-y-2 px-10 md:px-0">
            <h4 class="text-lg sm:text-center">Top 4 Arcanists based on usage</h4>
            <!-- flex flex-wrap items-center justify-between -->
            <div class="w-full flex justify-center">
                <div class="w-full sm:w-fit grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-2">
                    {#each top4 as { name, usage }, index}
                        <div class="top4-character flex items-center gap-2" style="--animation-order: {index + 1};">
                            <img src={characterMap[name as keyof typeof characterMap].thumbnail} alt={name} width="40" height="40">
                            <div class="tracking-wider">
                                <div>{ name }</div>
                                <div class="text-xs">Usage: { usage }</div>
                            </div>
                        </div>
                    {/each}
                </div>
            </div>
        </div>
    {/await}

    {#await data.sheet}
        <div class="flex items-center gap-2">
            <LoadingSpinner />
            <div>Loading stats</div>
        </div>
    {:then sheetData}
        {#if raid}
            <!-- <span class="hidden">{characterUsageStats(sheetData[category][raid].values ?? [])}</span> -->
            <div class="relative px-10 md:px-0">
                <canvas bind:this={canvas} aria-label="Character usage chart for {raid}" class="character-usage-chart"></canvas>
            </div>
        {/if}
    {/await}
</main>

<style>
    .top4-character, h4 {
        opacity: 0;
        animation-name: fade-in;
        animation-duration: 400ms;
        animation-timing-function: ease-in;
        animation-delay: calc(200ms * var(--animation-order));
        animation-fill-mode: forwards;
    }

    @keyframes fade-in {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
</style>