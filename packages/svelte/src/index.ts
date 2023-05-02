import icons from '@scarlab-icons/icons'
import {clearDist, TransformToSvelte, stringifySvg } from '@scarlab-icons/transformer'
import fs from 'fs'
import path from 'path'

async function main() {
    await clearDist(path.resolve(__dirname, '../outline'))
    await clearDist(path.resolve(__dirname, '../solid'))
    await clearDist(path.resolve(__dirname, '../ghost'))

    const mainOutput = path.resolve(__dirname)

    for (let icon of icons) {
        const output = path.resolve(__dirname, '../', icon.directory)
        const svg = stringifySvg(icon.svg, {
            transformAttr: (key, value, escape) => value ? `${key}="${escape(value)}"`: key
        })

        fs.writeFileSync(`${output}/${icon.name}.svelte`, await TransformToSvelte(svg))
    }

    console.log(`Transformed ${icons.length} icons`)
    console.log(`Output: ${mainOutput}`)
}

main()
