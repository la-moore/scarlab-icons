import fs from 'fs'
import path from 'path'
import * as cheerio from 'cheerio'

function getSvgPaths(svg) {
    const $ = cheerio.load(svg)
    const svgNode = $('svg')
    const paths = []

    svgNode.contents().map((i, el) => {
        if (el.name === 'path') {
            const d = el.attribs.d

            paths.push(el.attribs.d)
        }
    })

    return paths
}

export default function getIcons(dir) {
    const files = []

    function ThroughDirectory(directory) {
        fs.readdirSync(directory).forEach(File => {
            const absolute = path.join(directory, File)

            if (fs.statSync(absolute).isDirectory()) {
                return ThroughDirectory(absolute)
            } else {
                const svg = fs.readFileSync(absolute, 'utf8')

                return files.push({
                    name: path.basename(absolute, path.extname(absolute)),
                    path: absolute,
                    type: path.basename(path.dirname(absolute)),
                    paths: getSvgPaths(svg),
                })
            }
        })
    }

    ThroughDirectory(dir)

    return files
}
