<script lang="ts">
    import '$lib/app.css'

    import { page } from '$app/stores'
    import { base } from '$app/paths'
    import { onMount } from 'svelte'

    import DarkmodeToggle from '$lib/components/DarkmodeToggle.svelte'
    import Storm from '$lib/components/Storm.svelte'
    import StormBGM from '$lib/components/StormBGM.svelte'

    // https://sveltekit.io/blog/snippets
    let { children } = $props()

    let shelterFromTheStorm: Settings.ShelterFromTheStorm = $state(localStorage.getItem('ots:shelter-from-the-storm') ?? 'outside-the-suitcase') as Settings.ShelterFromTheStorm
    let shelterFromTheStormClass = $derived(shelterFromTheStorm === 'outside-the-suitcase' ? '' : 'hidden')

    function toggleNav(event: MouseEvent & { currentTarget: EventTarget & HTMLButtonElement }) {
        event.stopPropagation()
        const nav = event.currentTarget.closest('header')?.querySelector('nav')
        if (nav) {
            nav.dataset.state = nav.dataset.state === 'open'
                ? 'close'
                : 'open'
        }
    }

    function closeNav(event: MouseEvent & { currentTarget: EventTarget & HTMLAnchorElement }) {
        const nav = event.currentTarget.closest('nav')
        if (nav) {
            nav.dataset.state = 'close'
        }
    }

    function toggleDropdown(event: MouseEvent & { currentTarget: EventTarget & HTMLButtonElement }) {
        event.stopPropagation()
        const dropdownContainer = event.currentTarget.closest('.dropdown') as HTMLDivElement
        if (dropdownContainer) {
            dropdownContainer.dataset.state = dropdownContainer.dataset.state === 'open'
                ? 'close'
                : 'open'
        }
    }

    function toggleStorm(event: MouseEvent & { currentTarget: EventTarget & HTMLButtonElement }) {
        shelterFromTheStorm = shelterFromTheStorm === 'outside-the-suitcase'
            ? 'inside-the-suitcase'
            : 'outside-the-suitcase'
        localStorage.setItem('ots:shelter-from-the-storm', shelterFromTheStorm)
    }

    onMount(() => {
        document.documentElement.addEventListener('click', () => {
            const nav = document.querySelector('nav')
            const dropdowns = document.querySelectorAll('.dropdown') as NodeListOf<HTMLDivElement>
            if (nav) {
                nav.dataset.state = 'close'
            }
            dropdowns.forEach((dropdown) => {
                dropdown.dataset.state = 'close'
            })
        })
        document.documentElement.addEventListener('keyup', (event) => {
            if (event.key === 'Escape') {
                const nav = document.querySelector('nav')
                const dropdowns = document.querySelectorAll('.dropdown') as NodeListOf<HTMLDivElement>
                if (nav) {
                    nav.dataset.state = 'close'
                }
                dropdowns.forEach((dropdown) => {
                    dropdown.dataset.state = 'close'
                })
            }
        })
    })
    console.log($page)
</script>

<Storm class={shelterFromTheStormClass} />

<header class="sticky bottom-0 z-10 flex flex-col-reverse md:flex-row gap-6 items-stretch justify-between backdrop-blur-md {$page.url.pathname.includes(`${base}/leaderboard/`) ? 'bg-white/70 dark:bg-slate-900/70' : ''} px-10 md:px-20 py-6">
    <div class="flex items-center justify-between">
        <a href="{base}/" class="group flex items-center md:flex-col md:items-start outline-none gap-2 md:gap-0">
            <img src="{base}/jessica-ms-international.png" alt="Ms. International" loading="lazy" class="w-12 h-12 md:hidden" />
            <h1 class="crimson-text-bold text-3xl tracking-wider md:hidden group-hover:text-tuscany-600 group-focus:text-tuscany-600">OTS</h1>
            <h1 class="crimson-text-bold text-3xl sr-only md:not-sr-only group-hover:text-tuscany-600 group-focus:text-tuscany-600">Outside the suitcase</h1>
            <span class="mukta-regular sr-only md:not-sr-only">Reverse 1999 Global Leaderboard</span>
        </a>

        <button onclick={toggleNav} type="button" class="md:hidden text-slate-800 dark:text-white outline-none hover:text-tuscany-600 focus:text-tuscany-600">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-menu pointer-events-none"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
        </button>
    </div>

    <!-- absolute bottom-full md:static  -->
    <nav data-state="close" class="data-[state=close]:hidden md:data-[state=close]:flex flex flex-col md:flex-row md:items-center gap-4 mukta-regular text-lg tracking-wide">
        <a href="{base}/" onclick={closeNav} class="{$page.url.pathname === `${base}/` ? 'text-tuscany-600 dark:text-tuscany-300' : ''} outline-none hover:text-tuscany-500 focus:text-tuscany-500 dark:hover:text-tuscany-400 dark:focus:text-tuscany-400">
            Home
        </a>
        <!-- Leaderboard dropdown -->
        <div data-state="close" class="dropdown group md:relative">
            <div class="flex items-center justify-between md:justify-start gap-1">
                <a href="{base}/leaderboard/darkness-of-the-abyss" onclick={closeNav} class="{$page.url.pathname.includes(`${base}/leaderboard`) ? 'text-tuscany-600 dark:text-tuscany-300' : ''} outline-none hover:text-tuscany-500 focus:text-tuscany-500 dark:hover:text-tuscany-400 dark:focus:text-tuscany-400">
                    Leaderboard
                </a>
                <button onclick={toggleDropdown} type="button" class="outline-none hover:text-tuscany-600 focus:text-tuscany-600 dark:hover:text-tuscany-300 dark:focus:text-tuscany-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevrons-up-down w-4 h-4 group-data-[state=open]:hidden pointer-events-none"><path d="m7 15 5 5 5-5"/><path d="m7 9 5-5 5 5"/></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevrons-down-up w-4 h-4 group-data-[state=close]:hidden pointer-events-none"><path d="m7 20 5-5 5 5"/><path d="m7 4 5 5 5-5"/></svg>
                </button>
            </div>

            <div class="dropdown-content w-full group-data-[state=close]:hidden flex flex-col gap-1 md:absolute bottom-full md:backdrop-blur-md {$page.url.pathname.includes(`${base}/leaderboard/`) ? 'md:bg-white/70 md:dark:bg-slate-900/70' : ''} md:mb-10">
                <!-- new URL(window.location.toString()).searchParams.get('category') -->
                <a href="{base}/leaderboard/{$page.data.raid?.toLowerCase().split(" ").join("-") ?? 'darkness-of-the-abyss'}?category=f2p" onclick={closeNav} class="border-l-8 border-transparent outline-none hover:text-tuscany-500 focus:text-tuscany-500 dark:hover:text-tuscany-400 dark:focus:text-tuscany-400 {$page.url.searchParams.get('category') === 'f2p' ? 'border-tuscany-600 dark:border-tuscany-300' : ''} px-4">
                    F2P
                </a>
                <a href="{base}/leaderboard/{$page.data.raid?.toLowerCase().split(" ").join("-") ?? 'darkness-of-the-abyss'}?category=ffa" onclick={closeNav} class="border-l-8 border-transparent outline-none hover:text-tuscany-500 focus:text-tuscany-500 dark:hover:text-tuscany-400 dark:focus:text-tuscany-400 {$page.url.searchParams.get('category') === 'ffa' ? 'border-tuscany-600 dark:border-tuscany-300' : ''} px-4">
                    FFA
                </a>
            </div>
        </div>
        <!-- <a href="{base}/stream" onclick={closeNav} class="outline-none hover:text-tuscany-600 focus:text-tuscany-600" class:text-tuscany-600={$page.url.pathname === `${base}/stream`}>Stream</a> -->
        <!-- https://codepen.io/adamruf/pen/GZwdrY -->
        <!-- <span class="outline-none line-through blur-[2px] select-none">Stats</span> -->
        <a href="{base}/leaderboard/stats" class="{$page.url.pathname === `${base}/leaderboard/stats` ? 'text-tuscany-600 dark:text-tuscany-300' : ''} outline-none hover:text-tuscany-500 focus:text-tuscany-500 dark:hover:text-tuscany-400 dark:focus:text-tuscany-400">
            Stats
        </a>
        <button onclick={toggleStorm} type="button" class="text-left outline-none hover:text-tuscany-500 focus:text-tuscany-500 dark:hover:text-tuscany-300 dark:focus:text-tuscany-300">
            {shelterFromTheStorm === 'outside-the-suitcase' ? 'Take shelter from the rain' : 'Brave the storm'}
        </button>
        
        <DarkmodeToggle />
        <StormBGM />
    </nav>
</header>

<!-- https://sveltekit.io/blog/snippets -->
{@render children()}
