import { mkdir, writeFile } from "node:fs/promises"
import { dirname } from "node:path"
import { icons } from '@scarlab-icons/icons'
import { compile } from '@vue/compiler-dom'

async function write(file: string, text: string) {
    await mkdir(dirname(file), { recursive: true })
    await writeFile(file, text, 'utf8')
}

function camelize(str: string) {
    return str.replace(/-([a-z0-9])/g, g => g[1].toUpperCase())
}

function pascalize(str: string) {
    const camel = camelize(str)
    return camel[0].toUpperCase() + camel.slice(1)
}

function transformEsm(code: string) {
    return code.replace('export function', 'export default function')
        .replace(
            /createElementBlock as _createElementBlock/,
            'createElementBlock as _createElementBlock, mergeProps as _mergeProps'
        )
        .replace(
            /_createElementBlock\(\s*"svg",\s*({[\s\S]*?})\s*,/m,
            (_m, props) =>
                `_createElementBlock("svg", _mergeProps(${props}, _ctx),`
        )
}

function transformCjs(code: string) {
    return code
        .replace(
            /import\s+\{\s*([^}]+)\s*\}\s+from\s+(['"])(.*?)\2/,
            (_match, imports, _quote, mod) => {
                let newImports = imports
                    .split(',')
                    .map((i) => i.trim().replace(/\s+as\s+/, ': '))
                    .join(', ')

                return `const { ${newImports} } = require("${mod}")`
            }
        )
        .replace(
            /createElementBlock: _createElementBlock/,
            'createElementBlock: _createElementBlock, mergeProp: _mergeProps'
        )
        .replace(
            /_createElementBlock\(\s*"svg",\s*({[\s\S]*?})\s*,/m,
            (_m, props) =>
                `_createElementBlock("svg", _mergeProps(${props}, _ctx),`
        )
        .replace('export function render', 'module.exports = function render')
}

async function build() {
    const styles: Record<string, {
        component: string
        name: string
    }[]> = {}

    await Promise.all(icons.map((icon) => {
        const types: string[] = []
        let { code } = compile(icon.content, {
            mode: 'module',
        })

        const path = [icon.style, icon.name].join('-')
        const component = pascalize(path)

        types.push(`import type { FunctionalComponent, HTMLAttributes, VNodeProps } from 'vue'`)
        types.push(`declare const ${component}: FunctionalComponent<HTMLAttributes & VNodeProps>`)
        types.push(`export default ${component}`)

        if (!styles[icon.style]) styles[icon.style] = []
        styles[icon.style].push({ component, name: icon.name })

        return Promise.all([
            write(`dist/${icon.style}/${icon.name}.ts`, types.join('\n')),
            write(`dist/${icon.style}/${icon.name}.js`, transformEsm(code)),
            write(`dist/${icon.style}/${icon.name}.cjs`, transformCjs(code))
        ])
    }))

    await Promise.all(Object.entries(styles).map(([style, icons]) => {
        return Promise.all([
            write(`dist/${style}/index.ts`, icons.map((icon) => {
                return `export { default as ${icon.component} } from './${icon.name}';`
            }).join('\n')),
            write(`dist/${style}/index.js`, icons.map((icon) => {
                return `export { default as ${icon.component} } from './${icon.name}.js';`
            }).join('\n')),
            write(`dist/${style}/index.cjs`, (() => {
                const requires = icons.map((icon) => {
                    return `const ${icon.component} = require("./${icon.name}")`
                })

                return [
                    requires.join('\n'),
                    `module.exports = { ${ icons.map((icon) => icon.component).join(', ') } }`
                ].join('\n')
            })())
        ])
    }))

    await write(`dist/types.ts`, [
        `export type { FunctionalComponent as IconComponent } from 'vue';`
    ].join('\n'))
}

build()
