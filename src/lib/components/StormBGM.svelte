<script lang="ts">
    import { base } from '$app/paths'
    import { getAudioData, polarPath } from '$lib/waveform-path'
    import WaveformWorker from '$lib/worker/waveform-path?worker'
    import WaveformWorkletURL from '$lib/worker/waveform-worklet?url'

    const statusMap = {
        'idle': "Listen to the melody",
        'loading': "Searching for the source",
        'playing': "Snap back to reality",
        'paused': "Listen again"
    }

    let bgmEnabled = $state(false)
    let status: 'idle' | 'loading' | 'playing' | 'paused' = $state('idle')
    let bgmLoaded = $state(false)
    let audioElement: HTMLAudioElement | undefined = $state()
    let path: string = $state("")

    async function loadBgm() {
        const response = await fetch(`${window.location.origin}${base}/audio/reverse-bgm.mp3`)
        const arrayBuffer = await response.arrayBuffer()
        const arrayBufferForWorker = structuredClone(arrayBuffer)
        /**
         * Note that if you need to decode the arrayBuffer,
         * this will detach the buffer, thus you won't be able to create the blob.
         * Solution: get the array buffer, create the blob, decode the array buffer.
         */
        const audioURL = URL.createObjectURL(new Blob([arrayBuffer], { type: 'audio/mpeg' }))
        const audioContext = new AudioContext()
        // await audioContext.resume()
        const audioBuffer = await audioContext.decodeAudioData(arrayBuffer)
        // await audioContext.audioWorklet.addModule(WaveformWorkletURL)
        // const waveformAudioWorkletNode = new AudioWorkletNode(audioContext, 'waveform-worklet-processor')
        // waveformAudioWorkletNode.port.onmessage = (event) => {
        //     console.log(event)
        // }
        // waveformAudioWorkletNode.connect(audioContext.destination)
        // const audioBuffer2 = await getAudioData('/audio/reverse-bgm.mp3')
        audioElement = new Audio() // '/audio/reverse-bgm.mp3'
        bgmLoaded = true
        
        if (audioBuffer) {
            audioElement.loop = true
            audioElement.src = audioURL

            // if (window.Worker) {
            //     const worker = new WaveformWorker()
            //     worker.postMessage(arrayBufferForWorker, [arrayBufferForWorker])
            //     worker.onmessage = (event) => {
            //         path = event.data
            //         console.log(event.data)
            //     }
            // }

            // path = polarPath(audioBuffer, {
            //     samples: 25,
            //     type: 'mirror',
            //     left: 12,
            //     top: 12,
            //     distance: 10,
            //     length: 20,
            //     animation: true,
            //     normalize: true
            // })
            const waveformResponse = await fetch(`${base}/api/waveform-path`)
            path = (await waveformResponse.json()).path
        }
    }

    async function toggleAudio(event: MouseEvent & { currentTarget: EventTarget & HTMLButtonElement }) {
        event.stopPropagation()
        bgmEnabled = !bgmEnabled

        if (!bgmLoaded && bgmEnabled) {
            status = 'loading'
            await loadBgm()
        }

        if (bgmEnabled && audioElement) {
            status = 'playing'
            audioElement.play()
            document.querySelector('#waveform path animate')?.setAttribute('values', path)
            document.querySelector('#waveform circle')?.classList.add('hidden')
        } else if (!bgmEnabled && audioElement) {
            status = 'paused'
            document.querySelector('#waveform path animate')?.setAttribute('values', '')
            document.querySelector('#waveform circle')?.classList.remove('hidden')
            audioElement.pause()
        }
    }
</script>

<button onclick={toggleAudio} type="button" class="outline-none flex items-center gap-2 md:static hover:text-tuscany-600 focus:text-tuscany-600">
    <svg class="round w-6 h-6" id="waveform">
        <defs>
            <radialGradient id="rgrad" cx="50%" cy="50%" r="50%">         
                <stop offset="0%" style="stop-color:rgb(0,255,10);stop-opacity:1.00"></stop>
                <stop offset="25%" style="stop-color:rgb(0,188,212);stop-opacity:0.70"></stop>
                <stop offset="50%" style="stop-color:rgb(238,130,238);stop-opacity:1.00"></stop>
                <stop offset="75%" style="stop-color:rgb(103,58,183);stop-opacity:0.70"></stop>
                <stop offset="100%" style="stop-color:rgb(233,30,99);stop-opacity:1.00"></stop>
            </radialGradient>
        </defs>
        <circle fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" cx="12" cy="12" r="10"/>
        <path style="stroke:url(#rgrad); stroke-width: 1px; fill: none;">
            <animate
            attributeName="d"
            dur="2.54s"
            repeatCount="indefinite"
            calcMode="linear"
            values=""/>
        </path>
    </svg>
    <span class="md:sr-only">{statusMap[status]}</span>
</button>
