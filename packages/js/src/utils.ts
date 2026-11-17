import type { IconNode, SvgNode } from '@scarlab-icons/icons'

export type Attrs = Record<string, string | number | boolean | null | undefined>

// SVG-атрибуты, которые пишутся в camelCase и не должны превращаться в kebab-case
const CAMEL_CASE_ATTRS = new Set([
    'viewBox',
    'preserveAspectRatio',
    'gradientTransform',
    'gradientUnits',
    'patternUnits',
    'clipPathUnits',
])

export function escapeAttr(value: string) {
    return value
        .replace(/&/g, '&amp;')
        .replace(/"/g, '&quot;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
}

function escapeText(value: string) {
    return value
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
}

/** strokeWidth → stroke-width; viewBox остаётся как есть */
export function normalizeAttrName(name: string) {
    if (CAMEL_CASE_ATTRS.has(name)) return name
    return name.replace(/[A-Z]/g, (c) => `-${c.toLowerCase()}`)
}

const VALID_ATTR_NAME = /^[a-zA-Z_:][a-zA-Z0-9_:.-]*$/

function attrsToString(attrs: Attrs) {
    return Object.entries(attrs)
        .filter(([key, value]) => value !== null && value !== undefined && value !== false && VALID_ATTR_NAME.test(key))
        .map(([key, value]) => (value === true ? key : `${key}="${escapeAttr(String(value))}"`))
        .join(' ')
}

function renderNode(node: SvgNode): string {
    if (node.type === 'text') {
        return escapeText(node.value ?? '')
    }

    const attrs = attrsToString(node.attributes ?? {})
    const children = (node.children ?? []).map(renderNode).join('')

    return `<${node.name}${attrs ? ' ' + attrs : ''}>${children}</${node.name}>`
}

export function toSvg(icon: IconNode, attrs: Attrs = {}) {
    const normalized: Attrs = {}

    for (const [key, value] of Object.entries(attrs)) {
        normalized[normalizeAttrName(key)] = value
    }

    const className = [`scarlab scarlab-${icon.name}`, normalized.class]
        .filter(Boolean)
        .join(' ')

    // декоративная иконка скрыта от скринридеров, пока ей не дали доступное имя
    const labelled = normalized['aria-label'] || normalized['aria-labelledby']

    const combinedAttrs: Attrs = {
        ...icon.svg.attributes,
        'aria-hidden': labelled ? undefined : 'true',
        ...normalized,
        class: className,
    }

    const children = (icon.svg.children ?? []).map(renderNode).join('')

    return `<svg ${attrsToString(combinedAttrs)}>${children}</svg>`
}
