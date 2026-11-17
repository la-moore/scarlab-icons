import { attributesToSvg, getIcon, type Attrs, type ElementAttribute } from '@scarlab-icons/js'

// Области, внутри которых разметку трогать нельзя: там это строки, CSS или текст
const RAW_BLOCKS = /<(script|style|textarea|template)\b[\s\S]*?<\/\1\s*>|<!--[\s\S]*?-->/gi

const START_TAG = /<([a-zA-Z][\w:-]*)((?:\s+[^\s"'<>/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s"'=<>`]+))?)*)\s*(\/?)>/g
const ATTRIBUTE = /([^\s"'<>/=]+)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'=<>`]+)))?/g

const NAMED_ENTITIES: Record<string, string> = { amp: '&', lt: '<', gt: '>', quot: '"', apos: "'", nbsp: ' ' }

function decodeEntities(value: string) {
    return value.replace(/&(#x[0-9a-f]+|#\d+|[a-z]+);/gi, (entity, body: string) => {
        if (body[0] === '#') {
            const code = body[1] === 'x' || body[1] === 'X' ? parseInt(body.slice(2), 16) : parseInt(body.slice(1), 10)
            return Number.isNaN(code) ? entity : String.fromCodePoint(code)
        }
        return NAMED_ENTITIES[body.toLowerCase()] ?? entity
    })
}

function parseAttributes(source: string): ElementAttribute[] {
    return [...source.matchAll(ATTRIBUTE)].map((m) => ({
        name: m[1].toLowerCase(),
        value: decodeEntities(m[2] ?? m[3] ?? m[4] ?? ''),
    }))
}

function inlineSegment(html: string, params: Attrs, onMissing?: (icon: string) => void) {
    let result = ''
    let last = 0

    for (const match of html.matchAll(START_TAG)) {
        const [tag, tagName, rawAttrs, selfClosing] = match
        if (!/\bdata-scarlab\s*=/i.test(rawAttrs)) continue

        let end = match.index + tag.length

        // заменяем только пустые элементы: содержимое может быть фолбэком
        if (!selfClosing) {
            const close = new RegExp(`^\\s*</${tagName}\\s*>`, 'i').exec(html.slice(end))
            if (!close) continue
            end += close[0].length
        }

        const attributes = parseAttributes(rawAttrs)
        const name = attributes.find((a) => a.name === 'data-scarlab')?.value ?? ''
        const style = attributes.find((a) => a.name === 'data-style')?.value || 'base'

        if (!getIcon(name, style)) {
            onMissing?.(`${style}/${name}`)
            continue
        }

        result += html.slice(last, match.index) + attributesToSvg(attributes, params)
        last = end
    }

    return result + html.slice(last)
}

/**
 * Заменяет статические <i data-scarlab="..."></i> на готовый <svg>
 * по тем же правилам, что и replace() из @scarlab-icons/js.
 */
export function inlineHtml(html: string, params: Attrs = {}, onMissing?: (icon: string) => void): string {
    let result = ''
    let last = 0

    for (const match of html.matchAll(RAW_BLOCKS)) {
        result += inlineSegment(html.slice(last, match.index), params, onMissing) + match[0]
        last = match.index + match[0].length
    }

    return result + inlineSegment(html.slice(last), params, onMissing)
}
