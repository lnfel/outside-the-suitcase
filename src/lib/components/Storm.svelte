<script lang="ts">
    import { onMount } from "svelte"
    import { base } from "$app/paths"
    // import * as Three from 'three'

    // let clock = new Three.Clock()

    // CSS Rain Effect
    // https://codepen.io/REast/pen/ExZeWP
    // Canvas Bubbles
    // https://codepen.io/MarioD/pen/gWregQ
    // Animating with requestAnimationFrame
    // https://joshondesign.com/p/books/canvasdeepdive/chapter04.html

    function updateCanvasPosition(canvas: HTMLCanvasElement, container: HTMLDivElement) {
        const containerWidth = container.clientWidth
        const containerHeight = container.clientHeight
        if (canvas) {
            canvasWidth = canvas.width = Math.max(500, containerWidth)
            canvasHeight = canvas.height = Math.max(320, containerHeight)
        }
        container.style.left = container.style.right = container.style.top = container.style.bottom = "0";
    }

    function createRain() {
        rainArr = []
        for (let i = rainCount - 1; i >= 0; i--) {
            rainArr.push({
                x: 1,
                y: 0,
                z: 0
            })
        }

        for (let j = 0; j < rainCount; j++) {
            rainArr[j].x = Math.floor((Math.random() * document.documentElement.clientWidth) + 9)
            rainArr[j].y = Math.floor((Math.random() * rainContainer.clientHeight) + 9)
            rainArr[j].z = Math.floor((Math.random() * 2) + 1)
            rainArr[j].w = Math.floor((Math.random() * 3) + 2)
        }
    }

    /**
     * Paints and updates the raindrops position on the canvas
     */
    function paintRain() {
        for (let i = 0; i < rainCount; i++) {
            // use this for resetting falling rain
            // if (rainArr[i].y >= rainContainer.clientHeight) {
            //     rainArr[i].y -= rainContainer.clientHeight
            // }

            // reset rain y position when reaching the top
            if (rainArr[i].y <= 0) {
                rainArr[i].y += rainContainer.clientHeight
            }
            if (rainArr[i].x < -10) {
                rainArr[i].x += canvasWidth
            } else {
                // use += if we want rain to fall down instead
                rainArr[i].y -= Number(rainArr[i]?.w ?? 1) * rainSpeed
                // this one adds a slight angle to rain drops
                // rainArr[i].x -= 5 + Math.floor(rainArr[i].y / 250) - Number(rainArr[i]?.w ?? 0)
            }

            const gradient = ctx.createRadialGradient(250, 450, 140, 250, 300, 600)
            if (localStorage.getItem('ots:theme') === 'dark') {
                gradient.addColorStop(0, 'rgba(100, 170, 160, 0.2)')
                gradient.addColorStop(0.1, 'rgba(100, 160, 160, 0.12)')
                gradient.addColorStop(0.2, 'rgba(100, 150, 150, 0.1)')
                gradient.addColorStop(1, 'rgba(100, 140, 140, .08)')
            } else {
                gradient.addColorStop(0, 'rgba(0, 0, 0, 0.2)')
            }
            ctx.fillStyle = gradient
            ctx.fillRect(rainArr[i].x, rainArr[i].y, rainArr[i].z, 4)
        }
    }

    /**
     * Add lightning effect
     */
    function simulateWeather(timer: number) {
        if (weatherEnabled) {
            lightningAlpha = 0
            if (timer > 350) {
                lightningAlpha = (500 - timer) * 0.004
            } else if (timer < 350 && timer > 250) {
                lightningAlpha = (timer - 250) * 0.006
            } else if (timer < 250 && timer >= 100) {
                lightningAlpha = (250 - timer) * 0.004
            } else if (timer < 100 && timer >= 0) {
                lightningAlpha = timer * 0.006
                // Reset everything to default
                weatherEnabled = false // disable lightning
                lightningTimer = 8000 // reset lightning timer
            }

            if (lightningAlpha > 0) {
                ctx.fillStyle = localStorage.getItem('ots:theme') === 'dark'
                    ? `rgba(250, 250, 245, ${lightningAlpha})`
                    : `rgba(0, 0, 0, ${lightningAlpha})`
                ctx.fillRect(0, 0, canvasWidth, canvasHeight)
            }
        }
    }

    function mainLoop() {
        // const elapsedTime = clock.getElapsedTime()

        const canvas = document.querySelector('canvas')
        if (canvas) {
            updateCanvasPosition(canvas, rainContainer)
        }
        // msTimer += 30 // this is used for the lamp post
        if (weatherEnabled) {
            if (lightningTimer < 0) {
                lightningTimer = 8000
            } else {
                lightningTimer -= 15 // previously using 30 when using setInterval
            }
        }

        // ctx.fillStyle = "#202426"
        canvasFill = localStorage.getItem('ots:theme') === 'dark' ? "#0f172a" : "#ffffff"
        ctx.fillStyle = canvasFill
        ctx.fillRect(0, 0, canvasWidth, canvasHeight)

        paintRain()

        if (lightningTimer < 500) {
            // console.log(Number(elapsedTime.toFixed(0)))
            simulateWeather(lightningTimer)
        }

        window.requestAnimationFrame(mainLoop)
    }

    function momentWithSonetto(event: MouseEvent & { currentTarget: EventTarget & HTMLButtonElement }) {
        weatherEnabled = true
        const phrases = [
            "Timekeeper",
            "It's raining outside.",
            "and the raindrops...",
            "*Gasp*",
            "Eeeek!"
        ]
        const typeSpeed = 1
        // let charIndex = 0
        // let counter = 0
        function within(timer: number, rangeStart: number, rangeEnd: number) {
            return timer <= rangeStart && timer >= rangeEnd
        }
        function typeWriter(phrase: string) {
            const start = performance.now()
            const duration = (phrase.length * 60) / typeSpeed
            function tick() {
                const id = window.requestAnimationFrame(tick)
                const now = performance.now()
                const i = Math.trunc((phrase.length * (now - start)) / duration)
                if (dialouge !== phrase) {
                    dialouge = phrase.slice(0, i)
                } else {
                    window.cancelAnimationFrame(id)
                }
            }
            tick()
        }
        function sonnettoSpeaks() {
            sonnettoSpeaksFrameRequest = window.requestAnimationFrame(sonnettoSpeaks)
            if (weatherEnabled) {
                if (within(lightningTimer, 8000, 6000)) {
                    typeWriter(phrases[0])
                }
                if (within(lightningTimer, 6000, 4000)) {
                    typeWriter(phrases[1])
                }
                if (within(lightningTimer, 4000, 2000)) {
                    typeWriter(phrases[2])
                }
                if (within(lightningTimer, 2000, 500)) {
                    typeWriter(phrases[3])
                }
                if (within(lightningTimer, 500, 0)) {
                    typeWriter(phrases[4])
                }
            } else {
                cancelAnimationFrame(sonnettoSpeaksFrameRequest)
                setTimeout((target: HTMLButtonElement) => {
                    dialouge = ""
                    target.blur()
                }, 2000, event.target)
            }
        }
        sonnettoSpeaks()
        // dialougeLoop = setInterval(() => {
        //     dialouge = phrases[counter]
        //     counter++
        //     if (!weatherEnabled) {
        //         setTimeout((target: HTMLButtonElement) => {
        //             dialouge = ""
        //             target.blur()
        //             clearInterval(dialougeLoop)
        //         }, 2000, event.target)
        //     }
        // }, 2000)
    }

    let rainContainer: HTMLDivElement
    let ctx: CanvasRenderingContext2D,
        canvasWidth: number,
        canvasHeight: number,
        canvasFill: string,
        msTimer = 0.0,
        lightningTimer = $state(8000),
        lightningAlpha = 0,
        rainArr: { x: number, y: number, z: number, w?: number }[] = [],
        rainSpeed = 0.5,
        rainCount = 300,
        gameLoop: number,
        weatherEnabled = $state(false),
        dialouge = $state(""),
        dialougeLoop: number,
        sonnettoSpeaksFrameRequest = $state(0)
    
    onMount(() => {
        // const backgroundMusic = new Audio('/audio/reverse-bgm.mp3')
        // backgroundMusic.loop = true
        // backgroundMusic.addEventListener('canplaythrough', () => {
        //     backgroundMusic.play()
        // })
        const div = document.createElement('div')
        const canvas = document.createElement('canvas')
        canvasFill = localStorage.getItem('ots:theme') === 'dark' ? "#0f172a" : "#ffffff"
        const resizeObserver = new ResizeObserver((entries) => {
            rainArr = []
            createRain()
        })
        resizeObserver.observe(rainContainer)
        ctx = canvas.getContext('2d') as CanvasRenderingContext2D

        rainContainer.appendChild(div)
        div.style.position = 'fixed'
        div.appendChild(canvas)
        updateCanvasPosition(canvas, rainContainer)
        createRain()

        // 1 frame every 30ms
        // if (typeof gameLoop !== undefined) {
        //     clearInterval(gameLoop)
        //     gameLoop = setInterval(mainLoop, 30)
        // }
        mainLoop()
    })
</script>

<div bind:this={rainContainer} class="rain-container fixed inset-0 -z-10 pointer-events-none"></div>

<div class="fixed top-6 right-10 md:right-20 flex items-center gap-2">
    <span class="crimson-text-regular text-sm">{ dialouge }</span>
    <button onclick={momentWithSonetto} type="button" class="opacity-20 outline-none hover:opacity-100 focus:opacity-100 transition-opacity">
        <img src="{base}/img/character/sonetto.webp" alt="Vertin" class="w-10 h-10 rounded-full overflow-hidden pointer-events-none">
    </button>
</div>
