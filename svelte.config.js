import { preprocessMeltUI, sequence } from '@melt-ui/pp';
import adapter from '@sveltejs/adapter-static'
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
/** @type {import('@sveltejs/kit').Config}*/
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: sequence([vitePreprocess(), preprocessMeltUI()]),
	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter({
            fallback: 'index.html'
        }),
        prerender: {
            handleHttpError: 'ignore'
        },
        paths: {
            base: process.argv.includes('dev') ? '' : '/outside-the-suitcase'
        },
        serviceWorker: {
            files: (filename) => {
                const filesToExclude = [
                    '.DS_Store',
                    'audio/timekeeper.mp3',
                    'audio/it-is-raining-outside.mp3',
                    'audio/and-the-raindrops.mp3',
                    'audio/sonetto-gasp.mp3',
                    'audio/sonetto-eek.mp3',
                    'audio/sonetto-dialouge.mp3',
                    'audio/sonetto-dialouge-timed.mp3',
                ]
                return !filesToExclude.includes(filename)
            }
        }
	},
    compilerOptions: {
        runes: true
    },
};
export default config;
