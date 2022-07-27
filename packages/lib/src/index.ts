import icons from '@scarlab-icons/icons'
import { toSvg } from './utils'

export function replaceByAttribute(params: any) {
    const components = document.querySelectorAll('[data-scarlab]')

    components.forEach((component: HTMLElement) => {
        const iconName = component.dataset.scarlab
        const iconType = component.dataset.type || 'outline'
        const iconSet = icons.filter((v) => iconName === v.name)
        const icon = iconSet.find((v) => v.path.split('/').includes(iconType))
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

export function replaceBySource(params: any) {
    const components = document.querySelectorAll('[src^="~scarlab"]')

    components.forEach((component: HTMLImageElement) => {
        const data = component.getAttribute('src')?.split('/') || []

        const iconName = data[1] || 'circle'
        const iconType = data[2] || 'outline'
        const iconSet = icons.filter((v) => iconName === v.name)
        const icon = iconSet.find((v) => v.path.split('/').includes(iconType))
        const attrs = {}

        if (icon) {
            for (let i = 0; i < component.attributes.length; i++){
                const attribute = component.attributes[i]

                if (!attribute.nodeName.includes('scarlab')) {
                    attrs[attribute.nodeName] = attribute.nodeValue
                }
            }

            const svg = toSvg(icon, {
                ...params,
                ...attrs,
            })

            component.src = 'data:image/svg+xml;base64,' + window.btoa(svg)
        }
    })
}

export function replace(params = {}) {
    replaceByAttribute(params)
    replaceBySource(params)
}

export { toSvg } from './utils'
