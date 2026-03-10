import fs from 'node:fs/promises'
import { dirname, basename }  from 'node:path'
import { parse, stringify, INode }  from 'svgson'
import { optimize } from 'svgo'

interface Icon {
    svg: INode
    style: string
    content: string
    name: string
}

export async function getIcons() {
    const styles = await fs.readdir('./src')
    const icons: Icon[] = []

    const opts = {
        color: 'currentColor',
        width: '2',
    }

    await Promise.all(
        styles.map(async (style) => {
            let files = await fs.readdir(`./src/${style}`)

            return Promise.all(
                files.map(async (file) => {
                    if (file.startsWith('.')) return

                    const raw =  await fs.readFile(`./src/${style}/${file}`, 'utf8')

                    const { data: content } =  optimize(raw, {
                        plugins: [
                            'preset-default',
                            'removeDimensions',
                            'sortAttrs',
                            'cleanupListOfValues',
                            {
                                name: 'removeAttrs',
                                params: {
                                    attrs: [
                                        'stroke', 'path:stroke', 'path:stroke-width',
                                        'path:stroke-linecap', 'path:stroke-linejoin',
                                        'fill', 'path:fill',
                                    ],
                                },
                            },
                        ],
                    })
                    const svg = await parse(content)

                    if (style === 'solid') {
                        svg.attributes.fill = opts.color
                        svg.attributes.stroke = 'none'
                        svg.attributes['fill-rule'] = 'evenodd'
                        svg.attributes['clip-rule'] = 'evenodd'
                    }

                    if (style === 'outline' || style === 'base') {
                        svg.attributes.stroke = opts.color
                        svg.attributes.fill = 'none'
                        svg.attributes['stroke-width'] = opts.width
                        svg.attributes['stroke-linecap'] = 'round'
                        svg.attributes['stroke-linejoin'] = 'round'
                    }

                    if (style === 'ghost') {
                        svg.attributes.stroke = opts.color
                        svg.attributes.fill = 'none'
                        svg.attributes['stroke-width'] = opts.width
                        svg.attributes['stroke-linecap'] = 'round'
                        svg.attributes['stroke-linejoin'] = 'round'

                        for (let child of svg.children) {
                            if (child.attributes.opacity) {
                                child.attributes.fill = opts.color
                            } else {
                                svg.attributes.stroke = opts.color
                            }
                        }
                    }

                    icons.push({
                        svg,
                        style,
                        content: stringify(svg),
                        name: basename(file).replace('.svg', ''),
                    })
                })
            )
        })
    )

    return icons
}

export async function write(file: string, text: string) {
    await fs.mkdir(dirname(file), { recursive: true })
    await fs.writeFile(file, text, 'utf8')
}