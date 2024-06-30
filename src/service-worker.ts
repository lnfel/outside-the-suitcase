/// <reference types="@sveltejs/kit" />
/// <reference lib="webworker" />

import { build, files, version } from "$service-worker"

/**
 * https://www.youtube.com/watch?v=_wiOcdEVgks
 * https://kit.svelte.dev/docs/service-workers
 */

declare let self: ServiceWorkerGlobalScope

// Install service worker
const CACHE = `cache-${version}`
const ASSETS = [...build, ...files]

self.addEventListener('install', (event) => {
    async function addFilesToCache() {
        const cache = await caches.open(CACHE)
        await cache.addAll(ASSETS)
    }

    event.waitUntil(addFilesToCache())
})

// Activate service worker
self.addEventListener('activate', (event) => {
    async function deleteOldCaches() {
        for (const key of await caches.keys()) {
            if (key !== CACHE) {
                await caches.delete(key)
            }
        }
    }

    event.waitUntil(deleteOldCaches())
})

// Listen to fetch events
self.addEventListener('fetch', (event) => {
    // ignore POST requests etc
    if (event.request.method !== 'GET') return;

    async function respond() {
        const url = new URL(event.request.url)
        const cache = await caches.open(CACHE)

        // `build`/`files` can always be served from the cache
        if (ASSETS.includes(url.pathname)) {
            const cachedResponse = await cache.match(url.pathname)
            if (cachedResponse) {
                return cachedResponse
            }
        }

        /**
         * for everything else, try the network first, but
         * fall back to the cache if we're offline
         */
        try {
            const response = await fetch(event.request)
            const isNotExtension = url.protocol === 'http:' || url.protocol === 'https:'
            const isSuccess = response.status === 200

            if (!(response instanceof Response)) {
                throw new Error('Invalid response from fetch')
            }

            if (isNotExtension && isSuccess) {
                cache.put(event.request, response.clone())
            }

            return response
        } catch (error) {
            // fall back to cache
            const cachedResponse = await cache.match(event.request)
            if (cachedResponse) {
                return cachedResponse
            }
        }

        return new Response('Not Found', { status: 404 })
    }

    event.respondWith(respond())
})

self.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
        self.skipWaiting()
    }
})
