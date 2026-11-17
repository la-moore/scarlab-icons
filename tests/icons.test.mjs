import { test } from 'node:test'
import assert from 'node:assert/strict'
import { readdirSync } from 'node:fs'
import { createRequire } from 'node:module'
import { icons } from '@scarlab-icons/icons'
import { pkg, read, SAMPLES, matchSnapshot } from './helpers.mjs'

const require = createRequire(import.meta.url)
const STYLES = ['base', 'ghost', 'outline', 'solid']
const srcNames = (style) => readdirSync(pkg('icons', 'src', style)).filter((f) => f.endsWith('.svg')).map((f) => f.slice(0, -4)).sort()

test('в сборку попали все SVG из src', () => {
    for (const style of STYLES) {
        const built = icons.filter((i) => i.style === style).map((i) => i.name).sort()
        assert.deepEqual(built, srcNames(style), `стиль ${style}`)
    }
})

test('ghost, outline и solid содержат одинаковый набор иконок', () => {
    assert.deepEqual(srcNames('ghost'), srcNames('outline'))
    assert.deepEqual(srcNames('solid'), srcNames('outline'))
})

test('порядок иконок детерминирован (style, name)', () => {
    const keys = icons.map((i) => `${i.style}/${i.name}`)
    const sorted = [...icons]
        .sort((a, b) => a.style.localeCompare(b.style) || a.name.localeCompare(b.name))
        .map((i) => `${i.style}/${i.name}`)
    assert.deepEqual(keys, sorted)
    assert.equal(new Set(keys).size, keys.length, 'дубликаты имён')
})

test('каждая иконка: 24x24, без размеров, с currentColor', () => {
    for (const icon of icons) {
        const { attributes, children } = icon.svg
        const id = `${icon.style}/${icon.name}`
        assert.equal(attributes.viewBox, '0 0 24 24', id)
        assert.equal(attributes.width, undefined, id)
        assert.equal(attributes.height, undefined, id)
        assert.ok(children.length > 0, `${id}: пустая иконка`)
        if (icon.style === 'solid') {
            assert.equal(attributes.fill, 'currentColor', id)
            assert.equal(attributes.stroke, 'none', id)
        } else {
            assert.equal(attributes.stroke, 'currentColor', id)
            assert.equal(attributes.fill, 'none', id)
        }
        assert.doesNotMatch(icon.content, /#[0-9a-f]{3,6}\b/i, `${id}: захардкоженный цвет`)
    }
})

test('CJS и ESM отдают одинаковые данные', () => {
    const cjs = require('@scarlab-icons/icons')
    assert.deepEqual(cjs.icons, icons)
})

test('index.d.ts описывает все иконки', () => {
    const dts = read(pkg('icons', 'index.d.ts'))
    const union = dts.match(/export type Icon = (.*)/)[1]
    assert.equal(union.split(' | ').length, icons.length)
    assert.match(dts, /export declare const icons: IconNode\[\]/)
})

test('snapshot образцов', () => {
    for (const [style, name] of SAMPLES) {
        const icon = icons.find((i) => i.style === style && i.name === name)
        matchSnapshot(`icons/${style}-${name}.svg`, icon.content)
    }
})
