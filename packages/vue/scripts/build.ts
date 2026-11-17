import { write, iconsByStyle, esmIndex, cjsIndex, cjsIndexTypes, type SvgNode } from '../../../scripts/shared.mts'

/** Дочерние элементы svg → вызовы h() */
function renderChildren(children: SvgNode[]): string {
    const nodes = children.filter((c) => c.type === 'element')
    return `[${nodes.map((c) => `h(${JSON.stringify(c.name)}, ${JSON.stringify(c.attributes)}${c.children?.length ? `, ${renderChildren(c.children)}` : ''})`).join(', ')}]`
}

/**
 * Функциональный компонент на h(): все атрибуты (class, style, слушатели и т.д.)
 * явно мержатся в корневой svg, поэтому автоматическое наследование отключено.
 */
function renderComponent(component: string, svg: SvgNode, format: 'esm' | 'cjs'): string {
    return [
        format === 'esm'
            ? `import { h, mergeProps } from "vue"`
            : `const { h, mergeProps } = require("vue")`,
        ``,
        `const attrs = ${JSON.stringify(svg.attributes)}`,
        ``,
        `function ${component}(props) {`,
        `    // декоративная иконка скрыта от скринридеров, пока ей не дали доступное имя`,
        `    const a11y = props["aria-label"] || props["aria-labelledby"] ? null : { "aria-hidden": "true" }`,
        `    return h("svg", mergeProps(attrs, a11y, props), ${renderChildren(svg.children)})`,
        `}`,
        `${component}.inheritAttrs = false`,
        ``,
        format === 'esm' ? `export default ${component}` : `module.exports = ${component}`,
        ``
    ].join('\n')
}

const TYPE_IMPORT = `import type { FunctionalComponent, SVGAttributes, VNodeProps } from 'vue'`
const TYPE_DECL = (component: string) => `declare const ${component}: FunctionalComponent<SVGAttributes & VNodeProps>`

async function build() {
    await Promise.all(iconsByStyle().map(([style, list]) => Promise.all([
        ...list.flatMap(({ icon, component, name }) => [
            write(`dist/${style}/${name}.d.ts`, [TYPE_IMPORT, TYPE_DECL(component), `export default ${component}`, ''].join('\n')),
            write(`dist/${style}/${name}.d.cts`, [TYPE_IMPORT, TYPE_DECL(component), `export = ${component}`, ''].join('\n')),
            write(`dist/${style}/${name}.js`, renderComponent(component, icon.svg, 'esm')),
            write(`dist/${style}/${name}.cjs`, renderComponent(component, icon.svg, 'cjs'))
        ]),
        write(`dist/${style}/index.d.ts`, esmIndex(list)),
        write(`dist/${style}/index.js`, esmIndex(list)),
        write(`dist/${style}/index.d.cts`, cjsIndexTypes(list)),
        write(`dist/${style}/index.cjs`, cjsIndex(list))
    ])))

    const typesFile = `export type { FunctionalComponent as IconComponent } from 'vue'\n`
    await Promise.all([write('dist/types.d.ts', typesFile), write('dist/types.d.cts', typesFile)])
}

build()
