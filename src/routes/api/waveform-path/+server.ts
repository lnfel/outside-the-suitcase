import { json } from '@sveltejs/kit'
import { polarPath } from '$lib/waveform-path/index.js'
import { AudioContext } from 'node-web-audio-api'

export const prerender = true

export const GET = async ({ fetch, url }) => {
    const response = await fetch(`${url.origin}/audio/reverse-bgm.mp3`)
    const arrayBuffer = await response.arrayBuffer()

    const audioContext = new AudioContext()
    const audioBuffer = await audioContext.decodeAudioData(arrayBuffer)

    const path = polarPath(audioBuffer, {
        samples: 25,
        type: 'mirror',
        left: 12,
        top: 12,
        distance: 10,
        length: 20,
        animation: true,
        normalize: true
    })
    
    return json({
        path
    })
}
