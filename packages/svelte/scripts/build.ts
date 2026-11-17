import { write, iconsByStyle, esmIndex, renderAttributes, renderChildren, type SvgNode } from '../../../scripts/shared.mts'

function buildSvelteIconComponent(svg: SvgNode): string {
    const svgAttrs = renderAttributes(svg.attributes ?? {})
    // декоративная иконка скрыта от скринридеров, пока ей не дали доступное имя
    const a11y = `aria-hidden={$$restProps['aria-label'] || $$restProps['aria-labelledby'] ? undefined : 'true'}`
    const attrs = [svgAttrs, a11y, `{...$$restProps}`].filter(Boolean).join(' ')

    return `<svg ${attrs}>${renderChildren(svg)}</svg>\n`
}

/**
 * Типы компонента. Класс SvelteComponent понимают и Svelte 4, и Svelte 5
 * (в Svelte 5 он помечен deprecated, но остаётся валидным типом компонента).
 */
function buildTypes(component: string): string {
    return [
        `import { SvelteComponent } from 'svelte'`,
        `import type { SVGAttributes } from 'svelte/elements'`,
        `export default class ${component} extends SvelteComponent<SVGAttributes<SVGSVGElement>> {}`,
        ``
    ].join('\n')
}

async function build() {
    await Promise.all(iconsByStyle().map(([style, list]) => Promise.all([
        ...list.flatMap(({ icon, component, name }) => [
            write(`dist/${style}/${name}.svelte`, buildSvelteIconComponent(icon.svg)),
            write(`dist/${style}/${name}.svelte.d.ts`, buildTypes(component))
        ]),
        write(`dist/${style}/index.js`, esmIndex(list, '.svelte')),
        write(`dist/${style}/index.d.ts`, esmIndex(list, '.svelte'))
    ])))
}

build()
