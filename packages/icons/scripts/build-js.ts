import { write, getIcons } from './build'

async function build() {
    const icons = await getIcons()

    write('index.ts', [
        'export type Node = { svg: Record<string, any>, style: string, content: string, name: string }',
        'export const icons: Node[] = []',
        `export type Icon = '${icons.map((icon) => icon.style + '/' + icon.name).join("' | '")}'`
    ].join('\n'))
    write('index.js', [
        'export const icons = ' + JSON.stringify(icons, null, '\t')
    ].join('\n'))
    write('index.cjs', [
        `module.exports = { icons: ${JSON.stringify(icons, null, '\t')} }`
    ].join('\n'))
}

build()
