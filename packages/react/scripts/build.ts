import { mkdir, writeFile } from 'node:fs/promises'
import { dirname } from 'node:path'
import { parse, type INode } from 'svgson'
import { icons } from '@scarlab-icons/icons'

async function write(file: string, text: string) {
    await mkdir(dirname(file), { recursive: true })
    await writeFile(file, text, 'utf8')
}

function camelize(str: string) {
    return str.replace(/-([a-z0-9])/g, (g) => g[1].toUpperCase())
}

function pascalize(str: string) {
    const camel = camelize(str)
    return camel[0].toUpperCase() + camel.slice(1)
}

function toJsString(value: unknown): string {
    return JSON.stringify(value)
}

function toReactAttrName(name: string): string {
    if (name === 'class') return 'className'
    if (name === 'stroke-width') return 'strokeWidth'
    if (name === 'stroke-linecap') return 'strokeLinecap'
    if (name === 'stroke-linejoin') return 'strokeLinejoin'
    if (name === 'stroke-miterlimit') return 'strokeMiterlimit'
    if (name === 'fill-rule') return 'fillRule'
    if (name === 'clip-rule') return 'clipRule'
    if (name === 'clip-path') return 'clipPath'
    if (name === 'stop-color') return 'stopColor'
    if (name === 'stop-opacity') return 'stopOpacity'
    if (name === 'color-interpolation-filters') return 'colorInterpolationFilters'
    if (name === 'xlink:href') return 'xlinkHref'
    if (name.startsWith('aria-') || name.startsWith('data-')) return name
    return camelize(name)
}

function buildPropsObject(attributes: Record<string, string>, mergeProps: boolean): string {
    const pairs: string[] = []

    for (const [k, v] of Object.entries(attributes)) {
        const key = toReactAttrName(k)
        pairs.push(`${toJsString(key)}: ${toJsString(v)}`)
    }

    if (mergeProps) {
        pairs.push(`...props`)
    }

    return `{ ${pairs.join(', ')} }`
}

function buildNode(node: INode, isRootSvg: boolean): string {
    const tag = node.name

    const attr = buildPropsObject(node.attributes ?? {}, isRootSvg)

    if (!node.children || node.children.length === 0) {
        return `jsx(${toJsString(tag)}, ${attr})`
    }

    const children = node.children
        .map((c) => {
            if (typeof (c as any) === 'string') {
                const text = String(c).trim()
                return text ? toJsString(text) : ''
            }

            const child = c as unknown as INode
            if (child.type === 'text') {
                const text = (child.value ?? '').trim()
                return text ? toJsString(text) : ''
            }

            return buildNode(child, false)
        })
        .filter(Boolean)

    if (children.length === 1) {
        return `jsx(${toJsString(tag)}, { ...${attr}, children: ${children[0]} })`
    }

    return `jsxs(${toJsString(tag)}, { ...${attr}, children: [${children.join(', ')}] })`
}

function buildEsmComponent(componentName: string, svgNode: INode): string {
    const body = buildNode(svgNode, true)

    return [
        `import { jsx, jsxs } from "react/jsx-runtime"`,
        `export default function ${componentName}(props) {`,
        `    return ${body}`,
        `}`,
        ``
    ].join('\n')
}

function buildCjsComponent(componentName: string, svgNode: INode): string {
    const body = buildNode(svgNode, true)

    return [
        `const { jsx, jsxs } = require("react/jsx-runtime")`,
        `module.exports = function ${componentName}(props) {`,
        `    return ${body}`,
        `}`,
        ``
    ].join('\n')
}

function buildTypes(componentName: string): string {
    return [
        `import type { ComponentType, SVGProps } from 'react'`,
        `declare const ${componentName}: ComponentType<SVGProps<SVGSVGElement>>`,
        `export default ${componentName}`,
        ``
    ].join('\n')
}

async function build() {
    await Promise.all(
        icons.map(async (icon) => {
            const path = [icon.style, icon.name].join('-')
            const component = pascalize(path)

            const svgNode = await parse(icon.content)

            return Promise.all([
                write(`dist/${icon.style}/${icon.name}.ts`, buildTypes(component)),
                write(`dist/${icon.style}/${icon.name}.js`, buildEsmComponent(component, svgNode)),
                write(`dist/${icon.style}/${icon.name}.cjs`, buildCjsComponent(component, svgNode))
            ])
        })
    )
}
build()
