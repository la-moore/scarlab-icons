import { write, camelize, iconsByStyle, esmIndex, cjsIndex, cjsIndexTypes, type SvgNode } from '../../../scripts/shared.mts'

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
        // декоративная иконка скрыта от скринридеров, пока ей не дали доступное имя
        pairs.push(`"aria-hidden": props["aria-label"] || props["aria-labelledby"] ? undefined : "true"`)
        pairs.push(`...props`, `ref`)
    }

    return `{ ${pairs.join(', ')} }`
}

function buildNode(node: SvgNode, isRootSvg: boolean): string {
    const tag = node.name

    const attr = buildPropsObject(node.attributes ?? {}, isRootSvg)

    if (!node.children || node.children.length === 0) {
        return `jsx(${toJsString(tag)}, ${attr})`
    }

    const children = node.children
        .map((c) => {
            const child = c
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

function buildEsmComponent(componentName: string, svgNode: SvgNode): string {
    const body = buildNode(svgNode, true)

    return [
        `import { forwardRef } from "react"`,
        `import { jsx, jsxs } from "react/jsx-runtime"`,
        `const ${componentName} = forwardRef(function ${componentName}(props, ref) {`,
        `    return ${body}`,
        `})`,
        `${componentName}.displayName = ${toJsString(componentName)}`,
        `export default ${componentName}`,
        ``
    ].join('\n')
}

function buildCjsComponent(componentName: string, svgNode: SvgNode): string {
    const body = buildNode(svgNode, true)

    return [
        `const { forwardRef } = require("react")`,
        `const { jsx, jsxs } = require("react/jsx-runtime")`,
        `const ${componentName} = forwardRef(function ${componentName}(props, ref) {`,
        `    return ${body}`,
        `})`,
        `${componentName}.displayName = ${toJsString(componentName)}`,
        `module.exports = ${componentName}`,
        ``
    ].join('\n')
}

const TYPE_IMPORT = `import type { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react'`
const TYPE_DECL = (component: string) =>
    `declare const ${component}: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, 'ref'> & RefAttributes<SVGSVGElement>>`

/** Типы для ESM (`.d.ts`) */
function buildEsmTypes(component: string): string {
    return [TYPE_IMPORT, TYPE_DECL(component), `export default ${component}`, ``].join('\n')
}

/** Типы для CJS (`.d.cts`): module.exports = компонент */
function buildCjsTypes(component: string): string {
    return [TYPE_IMPORT, TYPE_DECL(component), `export = ${component}`, ``].join('\n')
}

async function build() {
    await Promise.all(iconsByStyle().map(([style, list]) => Promise.all([
        ...list.flatMap(({ icon, component, name }) => [
            write(`dist/${style}/${name}.d.ts`, buildEsmTypes(component)),
            write(`dist/${style}/${name}.d.cts`, buildCjsTypes(component)),
            write(`dist/${style}/${name}.js`, buildEsmComponent(component, icon.svg)),
            write(`dist/${style}/${name}.cjs`, buildCjsComponent(component, icon.svg))
        ]),
        write(`dist/${style}/index.d.ts`, esmIndex(list)),
        write(`dist/${style}/index.js`, esmIndex(list)),
        write(`dist/${style}/index.d.cts`, cjsIndexTypes(list)),
        write(`dist/${style}/index.cjs`, cjsIndex(list))
    ])))
}

build()
