<script lang="ts">
    import '$lib/app.css'

    import { page } from '$app/stores'

    import DarkmodeToggle from '$lib/components/DarkmodeToggle.svelte'
    import Storm from '$lib/components/Storm.svelte'
    import StormBGM from '$lib/components/StormBGM.svelte'
</script>

<Storm />

<header class="flex items-stretch justify-between px-4 md:px-20 py-6">
    <a href="/" class="flex flex-col items-start outline-none">
        <div class="mukta-extrabold text-3xl">Outside the suitcase</div>
        <div class="mukta-regular">Reverse 1999 Global Leaderboard</div>
    </a>

    <nav class="flex items-center gap-4 tracking-wide">
        <a href="/" class:text-tuscany-600={$page.route.id === '/'}>Home</a>
        <a href="/leaderboard" class:text-tuscany-600={$page.route.id === '/leaderboard'}>Leaderboard</a>
        <a href="/stats" class:text-tuscany-600={$page.route.id === '/stats'}>Stats</a>
        <DarkmodeToggle />
        <StormBGM />
    </nav>
</header>

<slot />
