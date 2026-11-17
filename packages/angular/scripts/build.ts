import { write, iconsByStyle, esmIndex, escapeAttr, renderAttributes, renderChildren, type SvgNode } from '../../../scripts/shared.mts'

const SRC = '.build/src'

function quote(value: string): string {
    return `'${value.replace(/\\/g, '\\\\').replace(/'/g, "\\'")}'`
}

function binding(name: string, input: string, value: string | undefined): string {
    const fallback = value === undefined ? 'null' : escapeAttr(quote(value))
    return `[attr.${name}]="${input} ?? ${fallback}"`
}

function buildAngularIconComponent(componentName: string, selector: string, svg: SvgNode): string {
    const attrs = { ...(svg.attributes ?? {}) }

    const defaults = {
        width: attrs.width ?? '24',
        height: attrs.height ?? '24',
        viewBox: attrs.viewBox ?? '0 0 24 24',
        fill: attrs.fill,
        stroke: attrs.stroke,
        strokeWidth: attrs['stroke-width']
    }

    for (const key of ['xmlns', 'width', 'height', 'viewBox', 'fill', 'stroke', 'stroke-width', 'class', 'style']) {
        delete attrs[key]
    }

    const staticAttrs = renderAttributes(attrs)
    const staticAttrPart = staticAttrs ? ` ${staticAttrs}` : ''

    const children = renderChildren(svg)

    const bindings = [
        binding('width', 'width', defaults.width),
        binding('height', 'height', defaults.height),
        binding('viewBox', 'viewBox', defaults.viewBox),
        binding('fill', 'fill', defaults.fill),
        binding('stroke', 'stroke', defaults.stroke),
        binding('stroke-width', 'strokeWidth', defaults.strokeWidth),
        binding('class', 'className', undefined),
        binding('style', 'style', undefined),
        // декоративная иконка скрыта от скринридеров, пока ей не дали доступное имя
        `[attr.aria-label]="ariaLabel"`,
        `[attr.aria-hidden]="ariaLabel ? null : 'true'"`
    ].join(' ')

    const template = `<svg${staticAttrPart} ${bindings}>${children}</svg>`

    return [
        `import { Component, Input } from '@angular/core'`,
        ``,
        `@Component({`,
        `    selector: '${selector}',`,
        `    standalone: true,`,
        `    template: ${JSON.stringify(template)},`,
        `})`,
        `export default class ${componentName} {`,
        `    @Input() width: string | number | null = null`,
        `    @Input() height: string | number | null = null`,
        `    @Input() viewBox: string | null = null`,
        `    @Input() fill: string | null = null`,
        `    @Input() stroke: string | null = null`,
        `    @Input() strokeWidth: string | number | null = null`,
        `    @Input() className: string | null = null`,
        `    @Input() style: string | null = null`,
        `    @Input() ariaLabel: string | null = null`,
        `}`,
        ``
    ].join('\n')
}

const tsconfig = {
    compilerOptions: {
        target: 'ES2022',
        module: 'ES2022',
        moduleResolution: 'bundler',
        lib: ['ES2022', 'DOM'],
        rootDir: 'src',
        outDir: '../dist',
        declaration: true,
        strict: true,
        skipLibCheck: true,
        useDefineForClassFields: false,
        experimentalDecorators: true
    },
    angularCompilerOptions: {
        compilationMode: 'partial',
        strictTemplates: true
    },
    include: ['src/**/*.ts']
}

async function build() {
    await Promise.all(iconsByStyle().map(([style, list]) => Promise.all([
        ...list.map(({ icon, component, name }) => write(
            `${SRC}/${style}/${name}.ts`,
            buildAngularIconComponent(component, `scarlab-icon-${style}-${name}`, icon.svg)
        )),
        write(`${SRC}/${style}/index.ts`, esmIndex(list))
    ])))

    await write('.build/tsconfig.json', JSON.stringify(tsconfig, null, 4))
}

build()
