import icons from '@scarlab-icons/icons'
import {TransformToReact, stringifySvg, pascalize, clearDist} from '@scarlab-icons/transformer'
import fs from 'fs'
import path from 'path'

const type = (name: string) => `import * as React from 'react';
declare function ${name}(props: React.ComponentProps<'svg'>): JSX.Element;
`

function generateIndexFile(file: string) {
    fs.writeFileSync(
        path.resolve(__dirname, `../${file}/index.js`),
        icons
            .filter((icon: any) => icon.directory === file)
            .map((icon: any) => {
                const name = pascalize(icon.name + '-icon')

                return `export { default as ${name} } from './${icon.name}.jsx';`
            })
            .join('\n')
    )

    fs.writeFileSync(
        path.resolve(__dirname, `../${file}/index.ts`),
        icons
            .filter((icon: any) => icon.directory === file)
            .map((icon: any) => {
                const name = pascalize(icon.name + '-icon')

                return `export { default as ${name} } from './${icon.name}.tsx';`
            })
            .join('\n')
    )
}

async function main() {
    const mainOutput = path.resolve(__dirname)

    await clearDist(path.resolve(__dirname, '../outline'))
    await clearDist(path.resolve(__dirname, '../solid'))
    await clearDist(path.resolve(__dirname, '../ghost'))

    for (let icon of icons) {
        const output = path.resolve(__dirname, '../', icon.directory)
        const name = [icon.directory, icon.name].join('-')
        const svg = stringifySvg(icon.svg, {
            transformAttr: (key, value, escape) => value ? `${key}="${escape(value)}"`: key
        })

        fs.writeFileSync(`${output}/${icon.name}.jsx`, await TransformToReact(svg))
        fs.writeFileSync(`${output}/${icon.name}.tsx`, type(pascalize(name)))
    }

    generateIndexFile('ghost')
    generateIndexFile('outline')
    generateIndexFile('solid')

    fs.writeFileSync(
        path.resolve(__dirname, '../index.js'),
        icons
            .map((icon: any) => {
                const path = [icon.directory, icon.name].join('-')
                const name = pascalize(path)

                return `export { default as ${name} } from './${icon.directory}/${icon.name}.jsx';`
            })
            .join('\n')
    )

    fs.writeFileSync(
        path.resolve(__dirname, '../index.ts'),
        icons
            .map((icon: any) => {
                const path = [icon.directory, icon.name].join('-')
                const name = pascalize(path)

                return `export { default as ${name} } from './${icon.directory}/${icon.name}.tsx';`
            })
            .join('\n')
    )

    console.log(`Transformed ${icons.length} icons`)
    console.log(`Output: ${mainOutput}`)
}

main()
