import path from 'path'
import { Transformer } from '../utils/transformer'
import { pascalize } from '../utils/text-transform'

const OUTPUT_DIR = path.join(__dirname, '../../vue/')
const POSTFIX = 'icon'

const template = (props, paths) => `
import { createElementVNode as _createElementVNode, openBlock as _openBlock, createElementBlock as _createElementBlock } from "vue"

export default function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    ${ serializeObjToAttrs(props) },
    ..._ctx
  }, [
    ${ paths.map(d => `_createElementVNode("path", ${JSON.stringify({ d })})`).join(', \n\t') }
  ]))
}
`

const templateTs = (name) => `
import { RenderFunction } from 'vue';
declare const ${name}: RenderFunction;
export default ${name};
`

const templateModule = (name, fileName, ext = '') => `
export { default as ${name} } from './${fileName}${ext}'
`

function serializeObjToAttrs(obj) {
    return Object.keys(obj)
        .map(key => `"${key}": "${obj[key]}"`)
        .join(', \n\t')
}

export default function useVue(icons) {
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

    t.createPackage('vue', {
        files: [
            "index.ts",
            "index.js",
            "outline",
            "solid"
        ],
    })
}
