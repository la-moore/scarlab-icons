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

function renderAttributes(attributes: Record<string, string>): string {
    const parts: string[] = []

    for (const [k, v] of Object.entries(attributes)) {
        const value = String(v)
            .replace(/&/g, '&amp;')
            .replace(/"/g, '&quot;')

        parts.push(`${k}="${value}"`)
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
            if (typeof (c as any) === 'string') {
                return escapeText(String(c))
            }

            return renderNode(c as unknown as INode)
        })
        .join('')

    return `${open}${children}</${node.name}>`
}

function buildSvelteIconComponent(svg: INode): string {
    const svgAttrs = renderAttributes(svg.attributes ?? {})
    const attrs = svgAttrs ? `${svgAttrs} {...$$restProps}` : `{...$$restProps}`

    const children = (svg.children ?? [])
        .map((c) => {
            if (typeof (c as any) === 'string') {
                return escapeText(String(c))
            }

            return renderNode(c as unknown as INode)
        })
        .join('')

    return `<svg ${attrs}>${children}</svg>\n`
}

async function build() {
    await Promise.all(
        icons.map(async (icon) => {
            const path = [icon.style, icon.name].join('-')

            const svgNode = await parse(icon.content)

            return write(`dist/${icon.style}/${icon.name}.svelte`, buildSvelteIconComponent(svgNode))
        })
    )
}

build()
