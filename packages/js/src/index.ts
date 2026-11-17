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

export function getIcon(name: string, style: string = DEFAULT_STYLE): IconNode | undefined {
    return icons.find((icon) => icon.name === name && icon.style === style)
}

export function replaceByAttribute(params: Attrs = {}, root: ParentNode = document) {
    const elements = root.querySelectorAll<HTMLElement>('[data-scarlab]')

    for (const element of elements) {
        const iconName = element.dataset.scarlab
        const iconStyle = element.dataset.style || DEFAULT_STYLE
        const icon = iconName ? getIcon(iconName, iconStyle) : undefined

        if (!icon) continue

        const attrs: Attrs = {}

        for (const attribute of Array.from(element.attributes)) {
            const name = attribute.name

            if (SERVICE_ATTRS.has(name)) continue

            attrs[DATA_ATTR_ALIASES[name] ?? name] = attribute.value
        }

        element.outerHTML = toSvg(icon, {
            ...params,
            ...attrs,
        })
    }
}

export function replace(params: Attrs = {}, root?: ParentNode) {
    replaceByAttribute(params, root)
}
