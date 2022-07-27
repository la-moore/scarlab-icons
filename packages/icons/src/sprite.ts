import path from 'path'
import { Transformer } from '@scarlab-icons/transformer'

const OUTPUT_DIR = path.join(__dirname, '../dist/')

function serializeObjToAttrs(obj) {
    return Object.keys(obj)
        .map(key => `${key}="${obj[key]}"`)
        .join(' ')
}

const template = (symbols) => `
<svg xmlns="http://www.w3.org/2000/svg">
<defs>
    ${ symbols.join('\n\t') }
</defs>
</svg>
`

const templateSymbol = (name, paths) => `
<symbol id="${name}" viewBox="0 0 24 24">${ paths.map((params) => `<path ${serializeObjToAttrs(params)} />`).join('') }</symbol>
`

export default function useSprite(icons) {
    const t = new Transformer({
        outputDir: OUTPUT_DIR
    })

    const symbols: any[] = []

    icons.forEach((item) => {
        symbols.push(
            `${templateSymbol(item.name, item.paths).replace(/^\s+|\s+$/g, '')}`
        )
    })

    t.createFile('scarlab-sprite.svg', () => template(symbols))
}
