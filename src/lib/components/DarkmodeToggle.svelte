<script lang="ts">
    import { onMount } from 'svelte'
    import { createEventDispatcher } from 'svelte'

    let { class: className } = $props<{ class?: string }>()

    const dispatch = createEventDispatcher()
    const delayClass = 'delay-500'

    let theme = $state('dark')
    let enabled = $state(false)
    let toggleButton: HTMLButtonElement

    onMount(() => {
        enabled = localStorage.getItem('ots:theme') === 'dark' ? true : false
        theme = enabled ? 'dark' : 'light'
        enabled ? toggleButton.dataset.state = 'enabled' : delete toggleButton.dataset.state
    })

    function toggle(event: MouseEvent & { currentTarget: EventTarget & HTMLButtonElement; }) {
        event.stopPropagation()

        setTimeout(() => {
            enabled = !enabled
            theme = enabled ? 'dark' : 'light'
            enabled ? event.currentTarget.dataset.state = 'enabled' : delete event.currentTarget.dataset.state
            localStorage.setItem('ots:theme', theme)

            localStorage.getItem('ots:theme') === 'dark'
                ? document.documentElement.classList.add('dark')
                : document.documentElement.classList.remove('dark')
        }, Number(delayClass.replace('delay-', '')))

        dispatch('toggle', theme)
    }
</script>

<svelte:head>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/theme-toggles@4.10.1/css/classic.min.css">
</svelte:head>

<button bind:this={toggleButton} onclick={toggle} class="theme-toggle group flex items-center gap-2 text-slate-800 transition-colors delay-500 outline-none {className}" class:theme-toggle--toggled={enabled} type="button" title="Toggle theme" aria-label="Toggle theme">
    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="1.5rem" height="1.5rem" fill="currentColor" stroke-linecap="round" class="theme-toggle__classic pointer-events-none group-data-[state=enabled]:text-amber-300" viewBox="0 0 32 32">
        <clipPath id="theme-toggle__classic__cutout">
            <path d="M0-5h30a1 1 0 0 0 9 13v24H0Z" />
        </clipPath>
        <g clip-path="url(#theme-toggle__classic__cutout)">
            <circle cx="16" cy="16" r="9.34" />
            <g stroke="currentColor" stroke-width="1.5">
                <path d="M16 5.5v-4" />
                <path d="M16 30.5v-4" />
                <path d="M1.5 16h4" />
                <path d="M26.5 16h4" />
                <path d="m23.4 8.6 2.8-2.8" />
                <path d="m5.7 26.3 2.9-2.9" />
                <path d="m5.8 5.8 2.8 2.8" />
                <path d="m23.4 23.4 2.9 2.9" />
            </g>
        </g>
    </svg>
    <span class="text-slate-800 dark:text-white group-hover:text-tuscany-600 group-focus:text-tuscany-600 md:sr-only">Switch to {theme === 'dark' ? 'light' : 'dark'} mode</span>
</button>
