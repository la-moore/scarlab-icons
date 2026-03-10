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

type SvgDefaults = {
    width?: string
    height?: string
    viewBox?: string
    fill?: string
    stroke?: string
}

function buildAngularIconComponent(componentName: string, selector: string, svg: INode): string {
    const attrs = { ...(svg.attributes ?? {}) }

    const defaults: SvgDefaults = {
        width: attrs.width,
        height: attrs.height,
        viewBox: attrs.viewBox,
        fill: attrs.fill,
        stroke: attrs.stroke
    }

    delete attrs.width
    delete attrs.height
    delete attrs.viewBox
    delete attrs.fill
    delete attrs.stroke
    delete attrs.class
    delete attrs.style

    const staticAttrs = renderAttributes(attrs)
    const staticAttrPart = staticAttrs ? ` ${staticAttrs}` : ''

    const widthDefault = JSON.stringify(defaults.width ?? '24')
    const heightDefault = JSON.stringify(defaults.height ?? '24')
    const viewBoxDefault = JSON.stringify(defaults.viewBox ?? '0 0 24 24')
    const fillDefault = JSON.stringify(defaults.fill ?? 'none')

    const children = (svg.children ?? [])
        .map((c) => {
            if (typeof (c as any) === 'string') return escapeText(String(c))
            return renderNode(c as unknown as INode)
        })
        .join('')

    const template = `<svg${staticAttrPart} [attr.width]="width ?? ${widthDefault}" [attr.height]="height ?? ${heightDefault}" [attr.viewBox]="viewBox ?? ${viewBoxDefault}" [attr.fill]="fill ?? ${fillDefault}" [attr.stroke]="stroke ?? null" [attr.class]="className ?? null" [attr.style]="style ?? null">${children}</svg>`

    return [
        `import { Component, Input } from '@angular/core'`,
        ``,
        `@Component({`,
        `    selector: '${selector}',`,
        `    standalone: true,`,
        `    template: ${JSON.stringify(template)},`,
        `})`,
        `export default class ${componentName} {`,
        `    @Input() width: string | null = null`,
        `    @Input() height: string | null = null`,
        `    @Input() viewBox: string | null = null`,
        `    @Input() fill: string | null = null`,
        `    @Input() stroke: string | null = null`,
        `    @Input() className: string | null = null`,
        `    @Input() style: string | null = null`,
        `}`,
        ``
    ].join('\n')
}

async function build() {
    await Promise.all(
        icons.map(async (icon) => {
            const path = [icon.style, icon.name].join('-')
            const component = pascalize(path)
            const selector = `scarlab-icon-${icon.style}-${icon.name}`

            const svgNode = await parse(icon.content)

            return write(`dist/${icon.style}/${icon.name}.ts`, buildAngularIconComponent(component, selector, svgNode))
        })
    )
}

build()
