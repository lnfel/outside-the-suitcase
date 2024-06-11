<script lang="ts">
    import '$lib/app.css'

    import { page } from '$app/stores'
    import { base } from '$app/paths'

    import DarkmodeToggle from '$lib/components/DarkmodeToggle.svelte'
    import Storm from '$lib/components/Storm.svelte'
    import StormBGM from '$lib/components/StormBGM.svelte'

    let navDisplay = $state(false)
    function toggleNav(event: MouseEvent & { currentTarget: EventTarget & HTMLButtonElement }) {
        navDisplay = !navDisplay
    }
</script>

<Storm />

<header class="sticky bottom-0 flex flex-col-reverse md:flex-row gap-6 items-stretch justify-between backdrop-blur-md {window.location.pathname === '/leaderboard' ? 'dark:bg-slate-900/70' : ''} px-10 md:px-20 py-6">
    <div class="flex items-center justify-between">
        <a href="{base}/" class="group flex items-center md:flex-col md:items-start outline-none gap-2 md:gap-0">
            <img src="{base}/jessica-ms-international.gif" alt="Ms. International" class="w-12 h-12 md:hidden" />
            <h1 class="crimson-text-bold text-3xl tracking-wider md:hidden group-hover:text-tuscany-600 group-focus:text-tuscany-600">OTS</h1>
            <h1 class="crimson-text-bold text-3xl sr-only md:not-sr-only group-hover:text-tuscany-600 group-focus:text-tuscany-600">Outside the suitcase</h1>
            <span class="mukta-regular sr-only md:not-sr-only">Reverse 1999 Global Leaderboard</span>
        </a>

        <button onclick={toggleNav} type="button" class="md:hidden text-slate-800 dark:text-white outline-none hover:text-tuscany-600 focus:text-tuscany-600">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-menu pointer-events-none"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
        </button>
    </div>

    <!-- absolute bottom-full md:static  -->
    <nav class="md:flex flex flex-col md:flex-row md:items-center gap-4 mukta-regular text-lg tracking-wide" class:hidden={!navDisplay}>
        <a href="{base}/" class="outline-none hover:text-tuscany-600 focus:text-tuscany-600" class:text-tuscany-600={$page.route.id === '/'}>Home</a>
        <a href="{base}/leaderboard" class="outline-none hover:text-tuscany-600 focus:text-tuscany-600" class:text-tuscany-600={$page.route.id === '/leaderboard'}>Leaderboard</a>
        <!-- https://codepen.io/adamruf/pen/GZwdrY -->
        <span class="outline-none line-through blur-[2px] select-none">Stats</span>
        <!-- <a href="{base}/stats" class="outline-none hover:text-tuscany-600 focus:text-tuscany-600" class:text-tuscany-600={$page.route.id === '/stats'}>Stats</a> -->
        <DarkmodeToggle />
        <StormBGM />
    </nav>
</header>

<slot />
