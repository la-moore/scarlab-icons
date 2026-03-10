import { write, getIcons } from './build'
import { stringify } from 'svgson'

async function build(style: string) {
    const icons = await getIcons()

    const opts = {
        color: 'currentColor',
        width: '2',
    }

    await Promise.all(
        icons.filter((icon) => icon.style === style)
            .map((icon) => write(`${icon.style}/${icon.name}.svg`, stringify(icon.svg)))
    )
}

let [ style ] = process.argv.slice(2)

if (!style) {
    throw new Error('Please specify a style')
}

build(style)