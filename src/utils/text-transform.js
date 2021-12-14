export function camelize(str) {
    return str.replace(/-([a-z0-9])/g, g => g[1].toUpperCase())
}

export function pascalize(str) {
    const camel = camelize(str)
    return camel[0].toUpperCase() + camel.slice(1)
}

export function camelToKebab(key) {
    const result = key
        .replace(/:/g, '-')
        .replace(/([A-Z])/g, ' $1')
        .trim()
    return result.split(/\s+/g).join('-').toLowerCase()
}
