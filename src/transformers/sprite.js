import path from 'path'
import { Transformer } from '../utils/transformer'

const OUTPUT_DIR = path.join(__dirname, '../../lib/')

const template = (symbols) => `
<svg xmlns="http://www.w3.org/2000/svg">
<defs>
    ${ symbols.join('\n\t') }
</defs>
</svg>
`

const templateSymbol = (name, paths) => `
<symbol id="${name}" viewBox="0 0 24 24">${ paths.map(d => `<path d="${d}" />`).join('') }</symbol>
`

export default function useSprite(icons) {
    const t = new Transformer({
        outputDir: OUTPUT_DIR
    })

    const types = {}

    icons.forEach((item) => {
        if (!types[item.type]) {
            types[item.type] = []
        }

        types[item.type].push(
            `${templateSymbol(item.name, item.paths).replace(/^\s+|\s+$/g, '')}`
        )
    })

    Object.keys(types).forEach((type) => {
        t.createFile(`sprite-${type}.svg`, () => {
            return template(types[type])
        })
    })

    t.createPackage(null, {
        files: [
            "index.js",
            "index.min.js",
            "sprite-outline.svg",
            "sprite-solid.svg"
        ],
    })
}
