import path from 'path'
import { Transformer } from '../utils/transformer'

const OUTPUT_DIR = path.join(__dirname, '../../svelte/')

const template = (props, paths) => `
<svg ${serializeObjToAttrs(props)} ${'{...$$props}'}>
    ${ paths.map(d => `<path d="${d}" />`).join('\n\t') }
</svg>
}

export default SvgComponent
`

function serializeObjToAttrs(obj) {
    return Object.keys(obj)
        .map(key => `${key}="${obj[key]}"`)
        .join(' ')
}

export default function useSvelte(icons) {
    const t = new Transformer({
        outputDir: OUTPUT_DIR
    })

    t.clearOutputDir()

    icons.forEach((item) => {
        t.createFile(`${item.type}/${item.name}.svelte`, () => {
            return template(
                item.getAttributes(),
                item.paths
            )
        })
    })

    t.createPackage('svelte', {
        files: [
            "outline",
            "solid"
        ],
    })
}
