// https://www.phind.com/search?cache=pt4csrf0gpdf883ojutodssy
// https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API/Using_AudioWorklet
// @ts-ignore
class PolarPathProcessor extends AudioWorkletProcessor {
    constructor() {
        super()
    }

    // https://developer.mozilla.org/en-US/docs/Web/API/AudioWorkletProcessor/process
    process(inputs: Float32Array[][][], outputs: Float32Array[][][], parameters: Record<string, Float32Array>) {
        const input = inputs[0]
        const output = outputs[0]

        console.log({
            input,
            output
        })

        return false
    }
}

// @ts-ignore
registerProcessor('waveform-worklet-processor', PolarPathProcessor)
