import fs from 'fs'
import path from 'path'
import cheerio from 'cheerio'
import { promisify } from 'util'
import { Element } from 'domhandler'
import useSprite from './sprite'
import iconsTags from './tags'

const readdir = promisify(fs.readdir)
const stat = promisify(fs.stat)

const OUTPUT_DIR = path.join(__dirname, '../dist/')
const ICONS_DIR = path.join(__dirname, '../svg/')

const hexRex = /^#?([a-f0-9]{6}|[a-f0-9]{3})$/

const type = `declare const icons: {
    name: string
    path: string
    paths: any[]
}[]

export default icons
`

function getSvgPaths(svg: string) {
    const $ = cheerio.load(svg)
    const svgNode = $('svg')
    const paths: any[] = []

    svgNode.contents().map((i, el: any | Element) => {
        if (el.name === 'path') {
            const attrs = {}

            Object.keys(el.attribs).forEach((k) => {
                attrs[k] = hexRex.test(el.attribs[k]) ? 'currentColor' : el.attribs[k]
            })

            paths.push(attrs)
        }
    })

    return paths
}

export async function scanDirectory(directory: string) {
    let arr: any = []

    const files =  await readdir(directory)

    for (const File of files) {
        const absolute = path.join(directory, File)
        const st = await stat(absolute)

        if (st.isDirectory()) {
            const icons = await scanDirectory(absolute)

            arr = [...arr, ...icons]
        } else {
            const svg = fs.readFileSync(absolute, 'utf8')
            const currentPath = absolute.replace(ICONS_DIR, '')

            arr.push({
                name: path.basename(currentPath, path.extname(absolute)),
                path: path.normalize(currentPath).split(path.sep).join('/'),
                paths: getSvgPaths(svg),
            })
        }
    }

    return arr
}

async function init() {
    const icons = await scanDirectory(ICONS_DIR)

    fs.mkdir(OUTPUT_DIR, { recursive: true }, (err) => {
        if (err) throw err;
    })

    fs.writeFileSync(
        path.join(OUTPUT_DIR, `icons.json`),
        JSON.stringify(icons, null, '\t')
    )

    fs.writeFileSync(
        path.join(OUTPUT_DIR, `index.js`),
        'module.exports = ' + JSON.stringify(icons, null, '\t')
    )

    fs.writeFileSync(
        path.join(OUTPUT_DIR, `index.mjs`),
        'export default ' + JSON.stringify(icons, null, '\t')
    )

    fs.writeFileSync(
        path.join(OUTPUT_DIR, `index.d.ts`),
        type
    )

    fs.writeFileSync(
        path.join(OUTPUT_DIR, `tags.json`),
        JSON.stringify(iconsTags, null, '\t')
    )

    useSprite(icons)
}

init()
