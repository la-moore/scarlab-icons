function attrsToString(attrs: any) {
    return Object.keys(attrs)
        .map(key => `${key}="${attrs[key]}"`)
        .join(' ');
}

function getContent(paths: any, beauty?: any) {
    return paths.map((path: any) => `<path ${attrsToString(path.attributes)}></path>`)
        .join(beauty ? '\n\t' : '')
}

export function toSvg(icon: any, attrs = {}) {
    const combinedAttrs = {
        ...icon.svg.attributes,
        ...{ class: `scarlab scarlab-${icon.name}` },
        ...attrs
    }

    return `<svg ${attrsToString(combinedAttrs)}>${getContent(icon.svg.children)}</svg>`
}
