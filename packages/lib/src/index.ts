import icons from '@scarlab-icons/icons'
import { toSvg } from './utils'

export function replaceByAttribute(params: any) {
    const components = document.querySelectorAll('[data-scarlab]')

    components.forEach((component: HTMLElement) => {
        const iconName = component.dataset.scarlab
        const iconType = component.dataset.type || 'outline'
        const iconSet = icons.filter((v) => iconName === v.name)
        const icon = iconSet.find((v) => v.name === iconName && v.directory === iconType)
        const attrs = {}

        if (icon) {
            for (let i = 0; i < component.attributes.length; i++){
                const attribute = component.attributes[i]

                if (!attribute.nodeName.includes('scarlab')) {
                    attrs[attribute.nodeName] = attribute.nodeValue
                }
            }

            component.outerHTML = toSvg(icon, {
                ...params,
                ...attrs,
            })
        }
    })
}

export function replace(params = {}) {
    replaceByAttribute(params)
}
