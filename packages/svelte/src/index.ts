import path from 'path'
import icons from '@scarlab-icons/icons'
import { Transformer } from '@scarlab-icons/transformer'

const OUTPUT_DIR = path.join(__dirname, '../dist/')

const svgProps = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "none",
}

function serializeObjToAttrs(obj: any) {
    return Object.keys(obj)
        .map(key => `${key}="${obj[key]}"`)
        .join(' ')
}

const template = (paths: any[]) => `
<svg ${serializeObjToAttrs(svgProps)} ${'{...$$props}'}>
    ${ paths.map(attrs => `<path ${serializeObjToAttrs(attrs)} />`).join('\n\t') }
</svg>

export default SvgComponent
`

const t = new Transformer({
    outputDir: OUTPUT_DIR
})

icons.forEach((icon) => {
    const path = icon.path.split('.')[0]

    t.createFile(`${path.split('/').join('-')}.svelte`, () => {
        return template(icon.paths)
    })
})
