/**
 * https://vitejs.dev/guide/assets.html#importing-script-as-a-worker
 * NOTE: Add "lib": ["WebWorker"] under compilerOptions in tsconfig.json
 * along with other libs like "esnext", "DOM", "DOM.Iterable"
 */

self.onmessage = async (event) => {
    if (event.data instanceof ArrayBuffer) {
        const arrayBuffer = event.data
        // support for BaseAudioContext about yet to come
        // https://github.com/WebAudio/web-audio-api/issues/2423
        // const audioContext = new AudioContext()
        // const audioBuffer = await audioContext.decodeAudioData(arrayBuffer)
        const { polarPath } = await import('$lib/waveform-path')

        // const path = polarPath(audioBuffer, {
        //     samples: 90,
        //     type: 'steps',
        //     left: 20,
        //     top: 20,
        //     distance: 10,
        //     length: 40,
        //     animation: true,
        //     normalize: true
        // })
        // postMessage(path)
    }
}

