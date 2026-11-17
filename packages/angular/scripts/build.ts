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

function escapeText(text: string): string {
    return text
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
}

function escapeAttr(value: string): string {
    return value
        .replace(/&/g, '&amp;')
        .replace(/"/g, '&quot;')
}

function renderAttributes(attributes: Record<string, string>): string {
    const parts: string[] = []

    for (const [k, v] of Object.entries(attributes)) {
        parts.push(`${k}="${escapeAttr(String(v))}"`)
    }

    return parts.join(' ')
}

function renderNode(node: INode): string {
    if (node.type === 'text') {
        return escapeText(node.value ?? '')
    }

    const attrs = renderAttributes(node.attributes ?? {})
    const open = attrs ? `<${node.name} ${attrs}>` : `<${node.name}>`

    if (!node.children || node.children.length === 0) {
        return `${open}</${node.name}>`
    }

    const children = node.children
        .map((c) => {
            if (typeof (c as any) === 'string') return escapeText(String(c))
            return renderNode(c as unknown as INode)
        })
        .join('')

    return `${open}${children}</${node.name}>`
}

const SRC = '.build/src'

function quote(value: string): string {
    return `'${value.replace(/\\/g, '\\\\').replace(/'/g, "\\'")}'`
}

function binding(name: string, input: string, value: string | undefined): string {
    const fallback = value === undefined ? 'null' : escapeAttr(quote(value))
    return `[attr.${name}]="${input} ?? ${fallback}"`
}

function buildAngularIconComponent(componentName: string, selector: string, svg: INode): string {
    const attrs = { ...(svg.attributes ?? {}) }

    const defaults = {
        width: attrs.width ?? '24',
        height: attrs.height ?? '24',
        viewBox: attrs.viewBox ?? '0 0 24 24',
        fill: attrs.fill,
        stroke: attrs.stroke,
        strokeWidth: attrs['stroke-width']
    }

    for (const key of ['xmlns', 'width', 'height', 'viewBox', 'fill', 'stroke', 'stroke-width', 'class', 'style']) {
        delete attrs[key]
    }

    const staticAttrs = renderAttributes(attrs)
    const staticAttrPart = staticAttrs ? ` ${staticAttrs}` : ''

    const children = (svg.children ?? [])
        .map((c) => {
            if (typeof (c as any) === 'string') return escapeText(String(c))
            return renderNode(c as unknown as INode)
        })
        .join('')

    const bindings = [
        binding('width', 'width', defaults.width),
        binding('height', 'height', defaults.height),
        binding('viewBox', 'viewBox', defaults.viewBox),
        binding('fill', 'fill', defaults.fill),
        binding('stroke', 'stroke', defaults.stroke),
        binding('stroke-width', 'strokeWidth', defaults.strokeWidth),
        binding('class', 'className', undefined),
        binding('style', 'style', undefined)
    ].join(' ')

    const template = `<svg${staticAttrPart} ${bindings}>${children}</svg>`

    return [
        `import { Component, Input } from '@angular/core'`,
        ``,
        `@Component({`,
        `    selector: '${selector}',`,
        `    standalone: true,`,
        `    template: ${JSON.stringify(template)},`,
        `})`,
        `export default class ${componentName} {`,
        `    @Input() width: string | number | null = null`,
        `    @Input() height: string | number | null = null`,
        `    @Input() viewBox: string | null = null`,
        `    @Input() fill: string | null = null`,
        `    @Input() stroke: string | null = null`,
        `    @Input() strokeWidth: string | number | null = null`,
        `    @Input() className: string | null = null`,
        `    @Input() style: string | null = null`,
        `}`,
        ``
    ].join('\n')
}

const tsconfig = {
    compilerOptions: {
        target: 'ES2022',
        module: 'ES2022',
        moduleResolution: 'bundler',
        lib: ['ES2022', 'DOM'],
        rootDir: 'src',
        outDir: '../dist',
        declaration: true,
        strict: true,
        skipLibCheck: true,
        useDefineForClassFields: false,
        experimentalDecorators: true
    },
    angularCompilerOptions: {
        compilationMode: 'partial',
        strictTemplates: true
    },
    include: ['src/**/*.ts']
}

async function build() {
    const styles: Record<string, { component: string, name: string }[]> = {}

    await Promise.all(
        icons.map(async (icon) => {
            const path = [icon.style, icon.name].join('-')
            const component = pascalize(path)
            const selector = `scarlab-icon-${icon.style}-${icon.name}`

            if (!styles[icon.style]) styles[icon.style] = []
            styles[icon.style].push({ component, name: icon.name })

            const svgNode = await parse(icon.content)

            return write(`${SRC}/${icon.style}/${icon.name}.ts`, buildAngularIconComponent(component, selector, svgNode))
        })
    )

    await Promise.all(Object.entries(styles).map(([style, list]) => {
        list.sort((a, b) => a.name.localeCompare(b.name))

        return write(`${SRC}/${style}/index.ts`, list.map((icon) => {
            return `export { default as ${icon.component} } from './${icon.name}.js'`
        }).join('\n') + '\n')
    }))

    await write('.build/tsconfig.json', JSON.stringify(tsconfig, null, 4))
}

build()
