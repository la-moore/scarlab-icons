import { stringifySvg, getFiles, getIconsJson } from '@scarlab-icons/transformer'
import tags from './tags'
import fs from 'fs'
import path from 'path'

fs.mkdirSync(path.resolve(__dirname, '../dist'), { recursive: true })

const argv = {
    dist: 'dist',
    group: 'icons',
    color: 'currentColor',
    width: '2'
}

const iconsType = `interface Node {
    name: string
    type: string
    value: string
    attributes: any
    children: Node[]
}

declare const icons: {
    name: string
    directory: string
    svg: Node
}[]

export default icons
`
const tagsType = `declare const icons: {
    [k: string]: string[]
}

export default icons
`

async function getIcons(argv: any) {
    const { files } = await getFiles('dist', argv.regex)

    return await getIconsJson(files, argv)
}

function generateSprite(icons: any) {
    const sprite = {
        name: "svg",
        type: "element",
        value: "",
        attributes: {
            "xmlns": "http://www.w3.org/2000/svg"
        },
        children: [
            {
                name: "defs",
                type: "element",
                value: "",
                attributes: {},
                children: icons
                    .map((icon: any) => {
                        return {
                            ...icon.svg,
                            name: 'symbol',
                            attributes: {
                                id: 'si-' + icon.name,
                                viewBox: "0 0 24 24"
                            },
                            children: icon.svg.children.map((child: any) => {
                                delete icon.svg.attributes.xmlns
                                delete icon.svg.attributes.viewBox

                                return {
                                    ...child,
                                    attributes: {
                                        ...child.attributes,
                                        ...(child.attributes.opacity ? {} : icon.svg.attributes)
                                    }
                                }
                            })
                        }
                    })
            }
        ]
    }

    return stringifySvg(sprite)
}

async function main() {
    const output = path.resolve(__dirname, '../dist')
    const base = await getIcons({ ...argv, style: 'stroke', regex: ['/svg/base/*.svg'] })
    const outline = await getIcons({ ...argv, style: 'stroke', regex: ['/svg/outline/*.svg'] })
    const solid = await getIcons({ ...argv, style: 'fill', regex: ['/svg/solid/*.svg'] })
    const ghost = await getIcons({ ...argv, style: 'ghost', regex: ['/svg/ghost/*.svg'] })

    for (let item of base) {
        item['directory'] = 'outline'
    }
    for (let item of outline) {
        item['directory'] = 'outline'
    }

    for (let item of solid) {
        item['directory'] = 'solid'
    }

    for (let item of ghost) {
        item['directory'] = 'ghost'
    }

    const icons = [
        ...base,
        ...outline,
        ...solid,
        ...ghost
    ]

    fs.writeFileSync(path.join(output, 'tags.json'), JSON.stringify(tags, null, '\t'))
    fs.writeFileSync(path.join(output, 'tags.js'), 'module.exports = ' + JSON.stringify(tags, null, '\t'))
    fs.writeFileSync(path.join(output, 'tags.mjs'), 'export default ' + JSON.stringify(tags, null, '\t'))
    fs.writeFileSync(path.join(output, 'tags.d.ts'), tagsType)

    fs.writeFileSync(path.join(output, 'icons.json'), JSON.stringify(icons, null, '\t'))
    fs.writeFileSync(path.join(output, 'index.js'), 'module.exports = ' + JSON.stringify(icons, null, '\t'))
    fs.writeFileSync(path.join(output, 'index.mjs'), 'export default ' + JSON.stringify(icons, null, '\t'))
    fs.writeFileSync(path.join(output, 'index.d.ts'), iconsType)

    fs.writeFileSync(path.join(output, 'scarlab-outline-sprite.svg'), generateSprite([...base, ...outline]))
    fs.writeFileSync(path.join(output, 'scarlab-solid-sprite.svg'), generateSprite(solid))
    fs.writeFileSync(path.join(output, 'scarlab-ghost-sprite.svg'), generateSprite(ghost))

    console.log(`Transformed ${icons.length} icons`)
    console.log(`Output: ${output}`)
}

main()
