import path from 'path'
import icons from '@scarlab-icons/icons'
import { Transformer } from '@scarlab-icons/transformer'

const OUTPUT_DIR = path.join(__dirname, '../dist/')

const svgProps = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "none",
}

function serializeObjToAttrs(obj: any) {
    return Object.keys(obj)
        .map(key => `${key}="${obj[key]}"`)
        .join(' ')
}

const template = (paths: any[]) => `
import * as React from "react"

function SvgComponent(props) {
  return <svg ${serializeObjToAttrs(svgProps)} ${'{...props}'}>
    ${ paths.map(attrs => `<path ${serializeObjToAttrs(attrs)} />`).join('\n\t') }
  </svg>
}

export default SvgComponent
`

const templateTs = (name: string) => `
import * as React from 'react';
declare function ${name}(props: React.ComponentProps<'svg'>): JSX.Element;
export default ${name};
`

const templateModule = (name: string, fileName: string, ext = '') => `
export { default as ${name} } from './${fileName}${ext}'
`

const t = new Transformer({
    outputDir: OUTPUT_DIR
})

function init() {
    t.remove('../index.ts')
    t.remove('../index.js')
    t.remove('../ghost.ts')
    t.remove('../ghost.js')
    t.remove('../outline.ts')
    t.remove('../outline.js')
    t.remove('../solid.ts')
    t.remove('../solid.js')

    console.log('files deleted')

    icons.forEach((icon) => {
        const path = icon.path.split('.')[0]
        const type = icon.path.split('/')[0]

        t.createFile(`${path.split('/').join('-')}.js`, () => {
            return template(icon.paths)
        })
        t.createFile(`${path.split('/').join('-')}.ts`, () => {
            return templateTs(t.pascalize(icon.name))
        })

        t.createFile(`${type}.js`, () => {
            return templateModule(
                t.pascalize([icon.name, 'icon'].join('-')),
                path.split('/').join('-'),
                '.js',
            )
        }, { flag: 'a+' })
        t.createFile(`${type}.ts`, () => {
            return templateModule(
                t.pascalize([icon.name, 'icon'].join('-')),
                path.split('/').join('-'),
            )
        }, { flag: 'a+' })

        t.createFile(`../${type}.js`, () => {
            return templateModule(
                t.pascalize([icon.name, 'icon'].join('-')),
                'dist/' + path.split('/').join('-'),
                '.js',
            )
        }, { flag: 'a+' })
        t.createFile(`../${type}.ts`, () => {
            return templateModule(
                t.pascalize([icon.name, 'icon'].join('-')),
                'dist/' + path.split('/').join('-'),
            )
        }, { flag: 'a+' })

        t.createFile('index.js', () => {
            return templateModule(
                t.pascalize(path.split('/').join('-')),
                path.split('/').join('-'),
                '.js',
            )
        }, { flag: 'a+' })
        t.createFile('index.ts', () => {
            return templateModule(
                t.pascalize(path.split('/').join('-')),
                path.split('/').join('-'),
            )
        }, { flag: 'a+' })

        t.createFile('../index.js', () => {
            return templateModule(
                t.pascalize(path.split('/').join('-')),
                'dist/' + path.split('/').join('-'),
                '.js',
            )
        }, { flag: 'a+' })
        t.createFile('../index.ts', () => {
            return templateModule(
                t.pascalize(path.split('/').join('-')),
                'dist/' + path.split('/').join('-'),
            )
        }, { flag: 'a+' })
    })
}

init()
