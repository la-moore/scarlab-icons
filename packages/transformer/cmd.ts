import yargs from 'yargs'
import { stringify } from 'svgson'
import {
    TransformToVue,
    TransformToReact,
    TransformToSvelte,
    execute,
    getFiles,
    getIconsJson,
    clearDist
} from './src'
import fs from "fs";
import path from "path";

async function handleJson(argv: any) {
    await execute(async () => {
        const { dist, files } = await getFiles(argv.dist, argv.regex)
        const icons = await getIconsJson(files, argv)
        const output = path.resolve(dist, argv.group)

        await clearDist(output+'.json')

        fs.writeFileSync(output+'.json', JSON.stringify(icons, null, '\t'))

        console.log(`Transformed ${icons.length} icons`)
        console.log(`Output: ${output}`)
    })
}

async function handleVue(argv: any) {
    await execute(async () => {
        const { dist, files } = await getFiles(argv.dist, argv.regex)
        const icons = await getIconsJson(files, argv)
        const output = path.resolve(dist, argv.group)

        await clearDist(output)

        for (let icon of icons) {
            fs.writeFileSync(`${output}/${icon.name}.js`, await TransformToVue(stringify(icon.svg)))
        }

        console.log(`Transformed ${icons.length} icons`)
        console.log(`Output: ${output}`)
    })
}

async function handleReact(argv: any) {
    await execute(async () => {
        const { dist, files } = await getFiles(argv.dist, argv.regex)
        const icons = await getIconsJson(files, argv)
        const output = path.resolve(dist, argv.group)

        await clearDist(output)

        for (let icon of icons) {
            fs.writeFileSync(`${output}/${icon.name}.js`, await TransformToReact(stringify(icon.svg)))
        }

        console.log(`Transformed ${icons.length} icons`)
        console.log(`Output: ${output}`)
    })
}

async function handleSvelte(argv: any) {
    await execute(async () => {
        const { dist, files } = await getFiles(argv.dist, argv.regex)
        const icons = await getIconsJson(files, argv)
        const output = path.resolve(dist, argv.group)

        await clearDist(output)

        for (let icon of icons) {
            fs.writeFileSync(`${output}/${icon.name}.svelte`, await TransformToSvelte(stringify(icon.svg)))
        }

        console.log(`Transformed ${icons.length} icons`)
        console.log(`Output: ${output}`)
    })
}

async function handleSvg(argv: any) {
    await execute(async () => {
        const { dist, files } = await getFiles(argv.dist, argv.regex)
        const icons = await getIconsJson(files, argv)
        const output = path.resolve(dist, argv.group)

        await clearDist(output)

        for (let icon of icons) {
            fs.writeFileSync(`${output}/${icon.name}.svg`, stringify(icon.svg))
        }

        console.log(`Transformed ${icons.length} icons`)
        console.log(`Output: ${output}`)
    })
}

yargs(process.argv.slice(2))
    .version('2.0.0')
    .command('json <regex...>', 'Transform icons to json', () => {}, handleJson)
    .command('vue <regex...>', 'Transform icons to vue', () => {}, handleVue)
    .command('react <regex...>', 'Transform icons to react', () => {}, handleReact)
    .command('svelte <regex...>', 'Transform icons to svelte', () => {}, handleSvelte)
    .command('svg <regex...>', 'Transform icons to svg', () => {}, handleSvg)
    .alias('h', 'help')
    .alias('v', 'version')
    .alias('d', 'dist')
    .describe('d', 'Output directory')
    .alias('g', 'group')
    .describe('g', 'Output group')
    .alias('s', 'style')
    .describe('s', 'Icon style [fill|stroke|ghost]')
    .alias('c', 'color')
    .describe('c', 'Icon color')
    .alias('w', 'width')
    .describe('w', 'Stroke width')
    .default({ d: 'dist', g: 'icons', c: 'currentColor', w: '2' })
    .demandCommand(1)
    .parse();

