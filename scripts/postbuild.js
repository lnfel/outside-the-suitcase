import * as path from "path"
import { fileURLToPath } from "url"
import { rm, readdir } from 'node:fs/promises'
import { crayon } from "crayon.js"

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
async function excludeFilesFromBuild(paths) {
    console.log(crayon.lightYellow('Removing the following paths from build output:'))
    paths.forEach(async (src) => {
        const resolvedPathName = path.join(__dirname, src)
        const parentDirectory = path.basename(path.dirname(resolvedPathName))
        const file = path.basename(resolvedPathName)
        // console.log(`${path.join(__dirname, '..')}${crayon.lightRed(`/${audioPath}/${file}`)}`)
        console.log(`${audioPath}/${crayon.lightRed(`${file}`)}`)
        await rm(resolvedPathName, { recursive: true, force: true })
    })
}

(async () => {
    Promise.all([excludeFilesFromBuild(pathsToExclude)])
        .catch((error) => {
            console.log(error)
        })
})()
