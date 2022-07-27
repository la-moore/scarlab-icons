function attrsToString(attrs: any) {
    return Object.keys(attrs)
        .map(key => `${key}="${attrs[key]}"`)
        .join(' ');
}

function getContent(paths: any, beauty?: any) {
    return paths.map((path: any) => `<path ${attrsToString(path)}></path>`)
        .join(beauty ? '\n\t' : '')
}

export function toSvg(icon: any, attrs = {}) {
    const combinedAttrs = {
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "none",
        ...{ class: `scarlab scarlab-${icon.name}` },
        ...attrs
    }

    return `<svg ${attrsToString(combinedAttrs)}>${getContent(icon.paths)}</svg>`
}
