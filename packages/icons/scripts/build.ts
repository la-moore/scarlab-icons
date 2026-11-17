import fs from 'node:fs/promises'
import { dirname, basename }  from 'node:path'
import { parse, stringify, INode }  from 'svgson'
import { optimize } from 'svgo'

export interface Icon {
    svg: INode
    style: string
    content: string
    name: string
}

const COLOR = 'currentColor'
const STROKE_WIDTH = '2'

/** Цвет и обводка задаются на корневом <svg>, чтобы их можно было переопределить через props */
function applyStyle(svg: INode, style: string) {
    if (style === 'solid') {
        Object.assign(svg.attributes, {
            fill: COLOR,
            stroke: 'none',
            'fill-rule': 'evenodd',
            'clip-rule': 'evenodd',
        })
        return
    }

    Object.assign(svg.attributes, {
        stroke: COLOR,
        fill: 'none',
        'stroke-width': STROKE_WIDTH,
        'stroke-linecap': 'round',
        'stroke-linejoin': 'round',
    })

    // в ghost полупрозрачные фигуры заливаются, остальные остаются контуром
    if (style === 'ghost') {
        for (const child of svg.children) {
            if (child.attributes.opacity) child.attributes.fill = COLOR
        }
    }
}

export async function getIcons() {
    const styles = (await fs.readdir('./src', { withFileTypes: true }))
        .filter((entry) => entry.isDirectory())
        .map((entry) => entry.name)
    const icons: Icon[] = []

    await Promise.all(
        styles.map(async (style) => {
            const files = await fs.readdir(`./src/${style}`)

            return Promise.all(
                files.map(async (file) => {
                    if (file.startsWith('.')) return

                    const raw = await fs.readFile(`./src/${style}/${file}`, 'utf8')

                    const { data: content } = optimize(raw, {
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

                    applyStyle(svg, style)

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

    // Promise.all + push даёт случайный порядок — сортируем для детерминированной сборки
    icons.sort((a, b) => a.style.localeCompare(b.style) || a.name.localeCompare(b.name))

    return icons
}

export async function write(file: string, text: string) {
    await fs.mkdir(dirname(file), { recursive: true })
    await fs.writeFile(file, text, 'utf8')
}