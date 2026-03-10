import { icons } from '@scarlab-icons/icons'
import { toSvg } from './utils'

export function replaceByAttribute(params: any) {
    const components = document.querySelectorAll('[data-scarlab]') as NodeListOf<HTMLElement>

    for (let component of components) {
        const iconName = component.dataset.scarlab
        const iconStyle = component.dataset.style || 'base'
        const iconSet = icons.filter((v) => iconName === v.name)
        const icon = iconSet.find((v) => v.name === iconName && v.style === iconStyle)
        const attrs = {}

        if (icon) {
            for (let i = 0; i < component.attributes.length; i++){
                const attribute = component.attributes[i]

                if (!attribute.nodeName.includes('scarlab')) {
                    // @ts-ignore
                    attrs[attribute.nodeName] = attribute.nodeValue
                }
            }

            component.outerHTML = toSvg(icon, {
                ...params,
                ...attrs,
            })
        }
    }
}

export function replace(params = {}) {
    replaceByAttribute(params)
}