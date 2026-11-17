import { stringify } from 'svgson'
import { write, type Icon } from './build.ts'

/** Оптимизированные svg-файлы: {style}/{name}.svg */
export function buildSvgFiles(icons: Icon[]) {
    return Promise.all(icons.map((icon) => write(`${icon.style}/${icon.name}.svg`, stringify(icon.svg))))
}
