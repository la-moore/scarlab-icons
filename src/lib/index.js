import icons from '../../dist/icons.json'
import DEFAULT_ATTRS from '../../dist/attributes.json'

function attrsToString(attrs) {
    return Object.keys(attrs)
        .map(key => `${key}="${attrs[key]}"`)
        .join(' ');
}

function getContent(paths, beauty) {
    return paths.map((path) => {
        return `<path d="${path}"></path>`
    }).join(beauty ? '\n\t' : '')
}

function getAttributes(icon, attrs = {}) {
    return {
        ...DEFAULT_ATTRS[icon.type],
        ...{ class: `scarlab scarlab-${icon.name}` },
        ...attrs,
        // ...{
        // 	class: classnames(this.attrs.class, attrs.class)
        // },
    }
}

function toSvg(icon, attrs = {}) {
    const combinedAttrs = getAttributes(icon, attrs)

    return `<svg ${attrsToString(combinedAttrs)}>${getContent(icon.paths)}</svg>`
}

function replaceByAttribute(params) {
    const components = document.querySelectorAll('[data-scarlab]')

    components.forEach((component) => {
        const iconName = component.dataset.scarlab
        const type = component.dataset.type || 'outline'
        const icon = icons.find((v) => iconName === v.name && type === v.type)
        const attrs = {}

        if (icon) {
            [...component.attributes].forEach((attribute) => {
                if (!attribute.name.includes('scarlab')) {
                    attrs[attribute.name] = attribute.nodeValue
                }
            })

            component.outerHTML = toSvg(icon, {
                ...params,
                ...attrs,
            })
        }
    })
}

function replaceBySource(params) {
    const components = document.querySelectorAll('[src^="~scarlab"]')

    components.forEach((component) => {
        const [alias, iconName, type = 'outline'] = component.getAttribute('src').split('/')
        const icon = icons.find((v) => iconName === v.name && type === v.type)
        const attrs = {}

        if (icon) {
            [...component.attributes].forEach((attribute) => {
                if (!attribute.name.includes('scarlab')) {
                    attrs[attribute.name] = attribute.nodeValue
                }
            })

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
