import path from 'path'
import { Transformer } from '../utils/transformer'
import { pascalize } from '../utils/text-transform'

const OUTPUT_DIR = path.join(__dirname, '../../angular/')
const POSTFIX = 'icon'

const template = (props, paths, name) => `
import { Component } from '@angular/core'

@Component({
  selector: '${name}',
  template: '<svg ${serializeObjToAttrs(props)}>${ paths.map(d => `<path d="${d}" />`).join('') }</svg>'
})

export default class SvgComponent {}
`

const templateTs = (name) => `
declare class ${name} {};
export default ${name};
`

const templateModule = (name, fileName, ext = '') => `
export { default as ${name} } from './${fileName}${ext}'
`

function serializeObjToAttrs(obj) {
    return Object.keys(obj)
        .map(key => `${key}="${obj[key]}"`)
        .join(' ')
}

export default function useAngular(icons) {
    const t = new Transformer({
        outputDir: OUTPUT_DIR
    })

    t.clearOutputDir()

    icons.forEach((item) => {
        t.createFile(`${item.type}/${item.name}.js`, () => {
            return template(
                item.getAttributes(),
                item.paths,
                [item.name, POSTFIX].join('-')
            )
        })
        t.createFile(`${item.type}/${item.name}.ts`, () => {
            return template(
                item.getAttributes(),
                item.paths,
                [item.name, POSTFIX].join('-')
            )
        })

        t.createFile(`${item.type}/index.js`, () => {
            return templateModule(
                pascalize([item.name, POSTFIX].join('-')),
                item.name,
                '.js',
            )
        }, { flag: 'a+' })
        t.createFile(`${item.type}/index.ts`, () => {
            return templateModule(
                pascalize([item.name, POSTFIX].join('-')),
                item.name,
            )
        }, { flag: 'a+' })

        t.createFile('index.js', () => {
            return templateModule(
                pascalize([item.name, item.type, POSTFIX].join('-')),
                [item.type, item.name].join('/'),
                '.js',
            )
        }, { flag: 'a+' })
        t.createFile('index.ts', () => {
            return templateModule(
                pascalize([item.name, item.type, POSTFIX].join('-')),
                [item.type, item.name].join('/'),
            )
        }, { flag: 'a+' })
    })
}
