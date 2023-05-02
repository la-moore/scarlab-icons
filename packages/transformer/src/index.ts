import path from 'path'
import fs from 'fs'
import { glob } from 'glob'
import { rimraf } from 'rimraf'
import { parse, stringify } from 'svgson'
import { optimize } from 'svgo'

export { TransformToVue } from './build-vue'
export { TransformToReact } from './build-react'
export { TransformToSvelte } from './build-svelte'

export const parseSvg = parse
export const stringifySvg = stringify

const ROOT_DIR = process.cwd()

export async function execute(fn: () => Promise<void>) {
    const startTime = performance.now()

    await fn()

    const endTime = performance.now()

    console.log(`Execution time: ${Math.round(endTime - startTime)}ms`)
}

export async function getFiles(dist: string, files: string[]) {
    const input = files.map((v: string) => ROOT_DIR + '/' + v)
    const _dist = path.resolve(ROOT_DIR, dist)
    const _files = await glob(input)

    return {
        dist: _dist,
        files: _files,
        input
    }
}

export async function clearDist(dir: string) {
    await rimraf(dir)

    if (!path.extname(dir)) {
        fs.mkdirSync(dir, { recursive: true })
    }
}

export async function getSvg(file: string, styled = false) {
    const svgPath = path.resolve(ROOT_DIR, file)
    let content = fs.readFileSync(svgPath, 'utf8')

    content = optimize(content, {
        plugins: [
            {
                name: 'removeAttrs',
                params: {
                    attrs: ['width', 'height', 'stroke', 'fill']
                }
            }
        ]
    }).data

    return optimize(content).data
}

export async function getIconsJson(files: string[], argv?: { style?: string, color?: string, width?: string }) {
    const icons = []
    const opts = {
        style: argv?.style || '',
        color: argv?.color || 'currentColor',
        width: argv?.width || '2',
    }

    for (let file of files) {
        const content = await getSvg(file, !!opts.style)
        const svg = await parse(content)

        if (opts.style === 'fill') {
            svg.attributes = svg.attributes || {}
            svg.attributes.stroke = 'none'
            svg.attributes.fill = opts.color
            svg.attributes['fill-rule'] = 'evenodd'
            svg.attributes['clip-rule'] = 'evenodd'
        }

        if (opts.style === 'stroke' || opts.style === 'ghost') {
            svg.attributes = svg.attributes || {}
            svg.attributes.stroke = opts.color
            svg.attributes.fill = 'none'
            svg.attributes['stroke-width'] = opts.width
            svg.attributes['stroke-linecap'] = 'round'
            svg.attributes['stroke-linejoin'] = 'round'

            if (opts.style === 'ghost') {
                for (let child of svg.children) {
                    if (child.attributes.opacity) {
                        child.attributes.stroke = 'none'
                        child.attributes.fill = opts.color
                    }
                }
            }
        }

        icons.push({
            name: path.basename(file, '.svg'),
            directory: path.dirname(file),
            svg
        })
    }

    return icons
}

export function camelize(str: string) {
    return str.replace(/-([a-z0-9])/g, g => g[1].toUpperCase())
}

export function pascalize(str: string) {
    const camel = camelize(str)
    return camel[0].toUpperCase() + camel.slice(1)
}

export function camelToKebab(key: string) {
    const result = key
        .replace(/:/g, '-')
        .replace(/([A-Z])/g, ' $1')
        .trim()
    return result.split(/\s+/g).join('-').toLowerCase()
}
