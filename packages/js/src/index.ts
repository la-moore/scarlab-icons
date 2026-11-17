import { icons, type IconNode, type IconStyle } from '@scarlab-icons/icons'
import { toSvg, type Attrs } from './utils'

export { toSvg }
export type { Attrs }

const DEFAULT_STYLE: IconStyle = 'base'

// Служебные атрибуты, которые не переносятся на итоговый <svg>
const SERVICE_ATTRS = new Set(['data-scarlab', 'data-style'])

// data-* атрибуты, которые маппятся на атрибуты SVG
const DATA_ATTR_ALIASES: Record<string, string> = {
    'data-stroke-width': 'stroke-width',
}

export interface ElementAttribute {
    name: string
    value: string
}

export function getIcon(name: string, style: string = DEFAULT_STYLE): IconNode | undefined {
    return icons.find((icon) => icon.name === name && icon.style === style)
}

const warned = new Set<string>()

function warnMissing(key: string) {
    if (warned.has(key) || typeof console === 'undefined') return
    warned.add(key)
    console.warn(
        `[scarlab-icons] Иконка "${key}" не найдена. ` +
            'Если вы используете @scarlab-icons/unplugin и имя вычисляется в рантайме, добавьте его в safelist.',
    )
}

/**
 * Собирает <svg> по атрибутам элемента-заглушки (data-scarlab, data-style и остальные).
 * Возвращает undefined, если data-scarlab нет или иконка не найдена.
 */
export function attributesToSvg(attributes: Iterable<ElementAttribute>, params: Attrs = {}): string | undefined {
    const list = Array.from(attributes)
    const iconName = list.find((a) => a.name === 'data-scarlab')?.value
    const iconStyle = list.find((a) => a.name === 'data-style')?.value || DEFAULT_STYLE

    if (!iconName) return undefined

    const icon = getIcon(iconName, iconStyle)

    if (!icon) {
        warnMissing(`${iconStyle}/${iconName}`)
        return undefined
    }

    const attrs: Attrs = {}

    for (const { name, value } of list) {
        if (SERVICE_ATTRS.has(name)) continue
        attrs[DATA_ATTR_ALIASES[name] ?? name] = value
    }

    return toSvg(icon, { ...params, ...attrs })
}

export function replaceByAttribute(params: Attrs = {}, root: ParentNode = document) {
    const elements = root.querySelectorAll<HTMLElement>('[data-scarlab]')

    for (const element of elements) {
        const svg = attributesToSvg(element.attributes, params)
        if (svg) element.outerHTML = svg
    }
}

export function replace(params: Attrs = {}, root?: ParentNode) {
    replaceByAttribute(params, root)
}
