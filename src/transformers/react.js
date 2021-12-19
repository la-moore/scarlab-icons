import fs from 'fs'
import path from 'path'
import { Transformer } from '../utils/transformer'
import { pascalize } from '../utils/text-transform'

const OUTPUT_DIR = path.join(__dirname, '../../react/')
const POSTFIX = 'icon'

const template = (props, paths) => `
import * as React from "react"

function SvgComponent(props) {
  return <svg ${serializeObjToAttrs(props)} ${'{...props}'}>
    ${ paths.map(d => `<path d="${d}" />`).join('\n\t') }
  </svg>
}

export default SvgComponent
`

const templateTs = (name) => `
import * as React from 'react';
declare function ${name}(props: React.ComponentProps<'svg'>): JSX.Element;
export default ${name};
`

const templateModule = (name, fileName, ext = '') => `
export { default as ${name} } from './${fileName}${ext}'
`

const templateMd = () => `
## Table of Contents

* [Usage](#usage)
* [Customization](#customization)
* [Figma](#figma)
* [License](#license)

## Usage

\`\`\`js
import { CircleIcon } from '@scarlab/icons-react/outline'

class Component extends React.Component {
  render() {
    return <h3> Cool circle <CircleIcon /> </h3>
  }
}
\`\`\`

## Customization

### Change color

\`\`\`html
<circle-icon color="#fb923c" />
<circle-icon style="color: #fb923c;" />
\`\`\`

### Change stroke width

\`\`\`html
<circle-icon stroke-width="1" />
<circle-icon stroke-width="2" />
\`\`\`
`

function serializeObjToAttrs(obj) {
    return Object.keys(obj)
        .map(key => `${key}="${obj[key]}"`)
        .join(' ')
}

export default function useReact(icons) {
    const t = new Transformer({
        outputDir: OUTPUT_DIR
    })

    t.clearOutputDir()

    icons.forEach((item) => {
        t.createFile(`${item.type}/${item.name}.js`, () => {
            return template(
                item.getAttributes(),
                item.paths
            )
        })
        t.createFile(`${item.type}/${item.name}.ts`, () => {
            return templateTs(pascalize(item.name))
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

    t.createPackage('react', {})

    t.createFile('README.md', () => {
        const temp = fs.readFileSync(path.join(__dirname, '../template.md'), 'utf8')

        return temp.replace('{{ framework }}', 'react')
            .replace('{{ content }}', templateMd())
    })
}
