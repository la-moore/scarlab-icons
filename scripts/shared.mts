/**
 * Общие утилиты для скриптов сборки фреймворк-пакетов (react, vue, svelte, angular).
 * Сами скрипты не публикуются — в npm уходит только dist.
 */
import { mkdir, writeFile } from 'node:fs/promises'
import { dirname } from 'node:path'
import { icons, type IconNode, type SvgNode } from '@scarlab-icons/icons'

export type { IconNode, SvgNode }

export async function write(file: string, text: string) {
    await mkdir(dirname(file), { recursive: true })
    await writeFile(file, text, 'utf8')
}

export function camelize(str: string) {
    return str.replace(/-([a-z0-9])/g, (g) => g[1].toUpperCase())
}

export function pascalize(str: string) {
    const camel = camelize(str)
    return camel[0].toUpperCase() + camel.slice(1)
}

// ---------- иконки ----------

export interface IconEntry {
    icon: IconNode
    /** Имя компонента: base-activity → BaseActivity */
    component: string
    name: string
}

/** Иконки, сгруппированные по стилю и отсортированные по имени (порядок детерминирован) */
export function iconsByStyle(): [style: string, entries: IconEntry[]][] {
    const styles = new Map<string, IconEntry[]>()

    for (const icon of icons) {
        if (!styles.has(icon.style)) styles.set(icon.style, [])
        styles.get(icon.style)!.push({ icon, component: pascalize(`${icon.style}-${icon.name}`), name: icon.name })
    }

    for (const list of styles.values()) list.sort((a, b) => a.name.localeCompare(b.name))

    return [...styles.entries()].sort(([a], [b]) => a.localeCompare(b))
}

// ---------- index-файлы ----------

/** ESM-index (и его .d.ts): `export { default as X } from './x.js'` */
export function esmIndex(list: IconEntry[], ext = '.js'): string {
    return list.map((e) => `export { default as ${e.component} } from './${e.name}${ext}'`).join('\n') + '\n'
}

/** CJS-index: `module.exports = { X, Y }` */
export function cjsIndex(list: IconEntry[]): string {
    return [
        ...list.map((e) => `const ${e.component} = require('./${e.name}.cjs')`),
        `module.exports = { ${list.map((e) => e.component).join(', ')} }`,
        ``
    ].join('\n')
}

/** Типы CJS-index (.d.cts) */
export function cjsIndexTypes(list: IconEntry[]): string {
    return [
        ...list.map((e) => `import ${e.component} = require('./${e.name}.cjs')`),
        `export { ${list.map((e) => e.component).join(', ')} }`,
        ``
    ].join('\n')
}

// ---------- SVG → разметка (svelte, angular) ----------

export function escapeText(text: string): string {
    return text
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
}

export function escapeAttr(value: string): string {
    return value
        .replace(/&/g, '&amp;')
        .replace(/"/g, '&quot;')
}

export function renderAttributes(attributes: Record<string, string>): string {
    return Object.entries(attributes)
        .map(([k, v]) => `${k}="${escapeAttr(String(v))}"`)
        .join(' ')
}

export function renderNode(node: SvgNode): string {
    if (node.type === 'text') return escapeText(node.value ?? '')

    const attrs = renderAttributes(node.attributes ?? {})
    const open = attrs ? `<${node.name} ${attrs}>` : `<${node.name}>`

    return `${open}${renderChildren(node)}</${node.name}>`
}

export function renderChildren(node: SvgNode): string {
    return (node.children ?? []).map(renderNode).join('')
}
