import { test } from 'node:test'
import assert from 'node:assert/strict'
import { createRequire } from 'node:module'
import { toSvg, getIcon, replace } from '@scarlab-icons/js'
import { SAMPLES, matchSnapshot } from './helpers.mjs'

const require = createRequire(import.meta.url)

/** Минимальная заглушка DOM-элемента для replace() */
function fakeElement(attrs) {
    const dataset = {}
    for (const [k, v] of Object.entries(attrs)) {
        if (k.startsWith('data-')) dataset[k.slice(5).replace(/-(.)/g, (_, c) => c.toUpperCase())] = v
    }
    return {
        dataset,
        attributes: Object.entries(attrs).map(([name, value]) => ({ name, value })),
        outerHTML: '<div></div>',
    }
}

const fakeRoot = (elements) => ({ querySelectorAll: () => elements })

test('getIcon: по умолчанию base, неизвестная иконка → undefined', () => {
    assert.equal(getIcon('activity').style, 'base')
    assert.equal(getIcon('heart', 'solid').style, 'solid')
    assert.equal(getIcon('does-not-exist'), undefined)
})

test('toSvg: snapshot образцов', () => {
    for (const [style, name] of SAMPLES) {
        matchSnapshot(`js/${style}-${name}.svg`, toSvg(getIcon(name, style)))
    }
})

test('toSvg: camelCase → kebab-case, viewBox не трогается', () => {
    const svg = toSvg(getIcon('activity'), { strokeWidth: 3, viewBox: '0 0 20 20' })
    assert.match(svg, / stroke-width="3"/)
    assert.match(svg, / viewBox="0 0 20 20"/)
    assert.doesNotMatch(svg, /strokeWidth/)
})

test('toSvg: пользовательский class дописывается', () => {
    const svg = toSvg(getIcon('activity'), { class: 'my-icon' })
    assert.match(svg, /class="scarlab scarlab-activity my-icon"/)
})

test('toSvg: значения экранируются, невалидные имена отбрасываются', () => {
    const svg = toSvg(getIcon('activity'), {
        title: '"><script>alert(1)</script>',
        'onload x': 'evil',
    })
    assert.doesNotMatch(svg, /<script>/)
    assert.match(svg, /title="&quot;&gt;&lt;script&gt;/)
    assert.doesNotMatch(svg, /evil/)
})

test('toSvg: null/undefined/false пропускаются, true → булев атрибут', () => {
    const svg = toSvg(getIcon('activity'), { a: null, b: undefined, c: false, focusable: true })
    assert.doesNotMatch(svg, / (a|b|c)[ =>]/)
    assert.match(svg, / focusable[ >]/)
})

test('toSvg: aria-hidden по умолчанию, снимается при aria-label', () => {
    assert.match(toSvg(getIcon('activity')), / aria-hidden="true"/)
    assert.doesNotMatch(toSvg(getIcon('activity'), { ariaLabel: 'Activity' }), /aria-hidden/)
    assert.doesNotMatch(toSvg(getIcon('activity'), { 'aria-labelledby': 'id' }), /aria-hidden/)
    assert.doesNotMatch(toSvg(getIcon('activity'), { ariaHidden: false }), /aria-hidden/, 'явное значение важнее')
})

test('replace: заменяет элементы, сервисные data-атрибуты не переносятся', () => {
    const el = fakeElement({ 'data-scarlab': 'heart', 'data-style': 'outline', class: 'icon', 'data-stroke-width': '3' })
    const missing = fakeElement({ 'data-scarlab': 'does-not-exist' })

    replace({ width: 32, strokeWidth: 1 }, fakeRoot([el, missing]))

    assert.match(el.outerHTML, /^<svg /)
    assert.match(el.outerHTML, /class="scarlab scarlab-heart icon"/)
    assert.match(el.outerHTML, / stroke-width="3"/, 'атрибут элемента важнее параметров')
    assert.match(el.outerHTML, / width="32"/)
    assert.doesNotMatch(el.outerHTML, /data-scarlab|data-style|data-stroke-width/)
    assert.equal(missing.outerHTML, '<div></div>', 'неизвестная иконка остаётся как есть')
})

test('CJS-сборка экспортирует то же API', () => {
    const cjs = require('@scarlab-icons/js')
    assert.equal(typeof cjs.replace, 'function')
    assert.equal(cjs.toSvg(cjs.getIcon('activity')), toSvg(getIcon('activity')))
})
