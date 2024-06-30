import * as path from "path"
import { fileURLToPath } from "url"
import { rm, readdir, writeFile, stat } from 'node:fs/promises'
import { crayon } from "crayon.js"
import manifest from "../build/manifest.json" with { type: "json" }

// https://dev.to/_staticvoid/how-to-run-typescript-natively-in-nodejs-with-tsx-3a0c
// https://tsx.is/node/esm#command-line-api

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const audioPath = 'build/audio'
const filesToKeep = [
    'ambient-music.m4a',
    'reverse-bgm.mp3'
]
const pathsToExclude = (await readdir(audioPath))
    .filter((file => !filesToKeep.includes(file)))
    .map(path => `../${audioPath}/${path}`)

/**
 * Remove directories and files from build folder
 * 
 * @param {String[]} paths 
 */
async function excludeFilesFromBuild(paths: string[]) {
    console.log(crayon.lightYellow('Removing the following paths from build output:'))
    paths.forEach(async (src) => {
        const resolvedPathName = path.join(__dirname, src)
        const parentDirectory = path.basename(path.dirname(resolvedPathName))
        const file = path.basename(resolvedPathName)
        // console.log(`${path.join(__dirname, '..')}${crayon.lightRed(`/${audioPath}/${file}`)}`)
        console.log(`   ${audioPath}/${crayon.lightRed(`${file}`)}`)
        await rm(resolvedPathName, { recursive: true, force: true })
    })
    await stat(path.join(__dirname, '../build/img/bg/the-storm.psd')).then(async (stats) => {
        console.log(`   build/img/bg/${crayon.lightRed('the-storm.psd')}`)
        await rm(path.join(__dirname, '../build/img/bg/the-storm.psd'), { recursive: true, force: true })
    }).catch((error) => {
        // console.log(crayon.lightBlue('../build/img/bg/the-storm.psd has already been removed.'))
        // if (error instanceof Error) {
        //     console.log(error.message)
        // } else {
        //     console.log(error.toString())
        // }
    })
}

async function updatePWAManifest() {
    const start_url = '/outside-the-suitcase'
    console.log(`${crayon.lightYellow('Changing manifest.json for production:')}`)
    console.log(`   start_url: ${crayon.lightGreen(start_url)}`)
    manifest.start_url = start_url
    await writeFile(path.join(__dirname, '../build/manifest.json'), JSON.stringify(manifest, null, 4), { encoding: 'utf8' })
}

(async () => {
    Promise.all([
        excludeFilesFromBuild(pathsToExclude),
        updatePWAManifest()
    ])
    .catch((error) => {
        console.log(error)
    })
})()
