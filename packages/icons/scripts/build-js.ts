import { write, type Icon } from './build.ts'

const STYLES = ['base', 'ghost', 'outline', 'solid'] as const

function union(values: string[]) {
    return values.length ? values.map((v) => `'${v}'`).join(' | ') : 'never'
}

/** Данные для пакетов-обёрток: index.js, index.cjs и типы */
export async function buildIndex(icons: Icon[]) {
    const byStyle = (style: string) => icons.filter((icon) => icon.style === style).map((icon) => icon.name)

    const dts = [
        `export type IconStyle = ${union([...STYLES])}`,
        '',
        ...STYLES.map((style) => {
            const typeName = style[0].toUpperCase() + style.slice(1) + 'IconName'
            return `export type ${typeName} = ${union(byStyle(style))}`
        }),
        '',
        '/** Полное имя иконки в формате `style/name` */',
        `export type Icon = ${union(icons.map((icon) => `${icon.style}/${icon.name}`))}`,
        '',
        'export interface SvgNode {',
        '    name: string',
        '    type: string',
        '    value: string',
        '    attributes: Record<string, string>',
        '    children: SvgNode[]',
        '}',
        '',
        'export interface IconNode {',
        '    svg: SvgNode',
        '    style: IconStyle',
        '    name: string',
        '    content: string',
        '}',
        '',
        '/** @deprecated используйте IconNode */',
        'export type Node = IconNode',
        '',
        'export declare const icons: IconNode[]',
        '',
    ].join('\n')

    // svgson кладёт в каждый узел ссылку parent: в данных она не нужна (и не описана в типах)
    const json = JSON.stringify(icons, (key, value) => (key === 'parent' ? undefined : value))

    await Promise.all([
        write('index.d.ts', dts),
        write('index.js', `export const icons = ${json}\n`),
        write('index.cjs', `module.exports = { icons: ${json} }\n`),
    ])
}
