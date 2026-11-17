import { test } from 'node:test'
import assert from 'node:assert/strict'
import { existsSync, mkdtempSync, readdirSync, rmSync, writeFileSync } from 'node:fs'
import { createRequire } from 'node:module'
import { join } from 'node:path'
import { pathToFileURL } from 'node:url'
import { icons } from '@scarlab-icons/icons'
import { ROOT, pkg, read, SAMPLES, matchSnapshot, resolveExportTarget } from './helpers.mjs'

const require = createRequire(import.meta.url)
const countByStyle = (style) => icons.filter((i) => i.style === style).length
const pascal = (s) => s.replace(/(^|-)([a-z0-9])/g, (_, __, c) => c.toUpperCase())

// ---------- exports: все пути из package.json существуют ----------

/** Все конечные пути из (возможно вложенных) условий exports */
const flattenTargets = (c) => (typeof c === 'string' ? [c] : Object.values(c).flatMap(flattenTargets))

for (const name of ['icons', 'js', 'react', 'vue', 'svelte', 'angular', 'unplugin']) {
    test(`${name}: все пути из exports существуют`, () => {
        const manifest = JSON.parse(read(pkg(name, 'package.json')))
        const missing = []

        for (const [entry, conditions] of Object.entries(manifest.exports)) {
            const sample = entry.startsWith('./base') ? 'activity' : 'heart'
            for (const target of flattenTargets(conditions)) {
                const file = pkg(name, resolveExportTarget(target, sample))
                if (!existsSync(file)) missing.push(`${entry} → ${target}`)
            }
        }

        for (const field of ['main', 'module', 'types']) {
            if (manifest[field] && !existsSync(pkg(name, manifest[field]))) missing.push(`${field} → ${manifest[field]}`)
        }

        assert.deepEqual(missing, [])
    })
}

// ---------- React ----------

function serializeReact(el) {
    if (typeof el !== 'object' || el === null) return el
    const { children, ref, ...props } = el.props
    return {
        type: el.type,
        props,
        children: [].concat(children ?? []).map(serializeReact),
    }
}

test('react: компоненты рендерят svg, пробрасывают props и ref', async () => {
    const ref = { current: null }

    for (const [style, name] of SAMPLES) {
        const { default: Icon } = await import(pathToFileURL(pkg('react', 'dist', style, `${name}.js`)))
        // forwardRef-компонент: сама функция рендера лежит в .render
        const render = (props) => Icon.render(props, ref)
        const el = render({ className: 'x', width: 32 })

        assert.equal(el.type, 'svg')
        assert.equal(el.props.className, 'x')
        assert.equal(el.props.width, 32)
        assert.equal(el.props.ref, ref, 'ref доходит до <svg>')
        assert.equal(Icon.$$typeof, Symbol.for('react.forward_ref'))
        assert.equal(Icon.displayName, pascal(`${style}-${name}`))
        matchSnapshot(`react/${style}-${name}.json`, serializeReact(render({})))

        const Cjs = require(pkg('react', 'dist', style, `${name}.cjs`))
        assert.deepEqual(serializeReact(Cjs.render({}, null)), serializeReact(render({})), 'CJS ≡ ESM')
    }
})

test('react: aria-hidden по умолчанию, снимается при aria-label', async () => {
    const { default: Icon } = await import(pathToFileURL(pkg('react', 'dist', 'outline', 'heart.js')))
    assert.equal(Icon.render({}, null).props['aria-hidden'], 'true')
    assert.equal(Icon.render({ 'aria-label': 'Like' }, null).props['aria-hidden'], undefined)
    assert.equal(Icon.render({ 'aria-labelledby': 'id' }, null).props['aria-hidden'], undefined)
    assert.equal(Icon.render({ 'aria-hidden': false }, null).props['aria-hidden'], false, 'явное значение важнее')
})

test('react: index каждого стиля экспортирует все иконки', async () => {
    for (const style of ['base', 'ghost', 'outline', 'solid']) {
        const esm = await import(pathToFileURL(pkg('react', 'dist', style, 'index.js')))
        const cjs = require(pkg('react', 'dist', style, 'index.cjs'))
        assert.equal(Object.keys(esm).length, countByStyle(style), style)
        assert.equal(Object.keys(cjs).length, countByStyle(style), style)
    }
})

// ---------- Vue ----------

test('vue: SSR-рендер, атрибуты пробрасываются на svg', async () => {
    const { createSSRApp, h } = await import('vue')
    const { renderToString } = await import('vue/server-renderer')

    for (const [style, name] of SAMPLES) {
        const { default: Icon } = await import(pathToFileURL(pkg('vue', 'dist', style, `${name}.js`)))
        const html = await renderToString(createSSRApp({ render: () => h(Icon, { class: 'x', width: 32 }) }))

        assert.match(html, /^<svg /)
        assert.match(html, / class="x"/)
        assert.match(html, / width="32"/)
        matchSnapshot(`vue/${style}-${name}.html`, await renderToString(createSSRApp({ render: () => h(Icon) })))
    }
})

test('vue: aria-hidden, слияние class/style, слушатели, CJS ≡ ESM', async () => {
    const { createSSRApp, h } = await import('vue')
    const { renderToString } = await import('vue/server-renderer')
    const { default: Icon } = await import(pathToFileURL(pkg('vue', 'dist', 'outline', 'heart.js')))
    const Cjs = require(pkg('vue', 'dist', 'outline', 'heart.cjs'))
    const ssr = (C, props) => renderToString(createSSRApp({ render: () => h(C, props) }))

    assert.match(await ssr(Icon), / aria-hidden="true"/)
    assert.doesNotMatch(await ssr(Icon, { 'aria-label': 'Like' }), /aria-hidden/)
    assert.match(await ssr(Icon, { 'aria-label': 'Like' }), / aria-label="Like"/)

    const html = await ssr(Icon, { class: 'a', style: { color: 'red' }, onClick: () => {} })
    assert.equal(html.match(/class="/g).length, 1, 'class не дублируется')
    assert.match(html, / class="a"/)
    assert.match(html, / style="color:red;"/)

    assert.equal(await ssr(Cjs, { class: 'a' }), await ssr(Icon, { class: 'a' }))
})

test('vue: index каждого стиля экспортирует все иконки', async () => {
    for (const style of ['base', 'ghost', 'outline', 'solid']) {
        const esm = await import(pathToFileURL(pkg('vue', 'dist', style, 'index.js')))
        assert.equal(Object.keys(esm).length, countByStyle(style), style)
    }
})

// ---------- Svelte ----------

test('svelte: все компоненты компилируются без предупреждений', async () => {
    const { compile } = await import('svelte/compiler')

    for (const style of ['base', 'ghost', 'outline', 'solid']) {
        const files = readdirSync(pkg('svelte', 'dist', style)).filter((f) => f.endsWith('.svelte'))
        assert.equal(files.length, countByStyle(style), style)

        for (const file of files) {
            const { warnings } = compile(read(pkg('svelte', 'dist', style, file)), { filename: file, generate: 'client' })
            assert.deepEqual(warnings.map((w) => w.message), [], `${style}/${file}`)
        }
    }
})

test('svelte: SSR-рендер, $$restProps пробрасываются на svg', async () => {
    const { compile } = await import('svelte/compiler')
    const { render } = await import('svelte/server')
    // временная папка внутри репозитория, чтобы скомпилированный код нашёл svelte в node_modules
    const tmp = mkdtempSync(join(ROOT, 'tests', '.tmp-'))

    try {
        for (const [style, name] of SAMPLES) {
            const { js } = compile(read(pkg('svelte', 'dist', style, `${name}.svelte`)), { generate: 'server' })
            const file = join(tmp, `${style}-${name}.mjs`)
            writeFileSync(file, js.code)
            const { default: Icon } = await import(pathToFileURL(file))

            const { body } = render(Icon, { props: { class: 'x', width: 32 } })
            assert.match(body, /<svg [^>]*class="x"/)
            assert.match(body, /<svg [^>]*width="32"/)
            assert.match(body, /<svg [^>]*aria-hidden="true"/)
            assert.doesNotMatch(render(Icon, { props: { 'aria-label': 'x' } }).body, /aria-hidden/)
            matchSnapshot(`svelte/${style}-${name}.html`, render(Icon).body.replace(/<!--[\s\S]*?-->/g, ''))
        }
    } finally {
        rmSync(tmp, { recursive: true, force: true })
    }
})

// ---------- Angular ----------

test('angular: компоненты собраны в partial-режиме, есть типы', () => {
    for (const [style, name] of SAMPLES) {
        const js = read(pkg('angular', 'dist', style, `${name}.js`))
        assert.match(js, /ɵɵngDeclareComponent/)
        assert.match(js, new RegExp(`selector: "scarlab-icon-${style}-${name}"`))
        assert.ok(existsSync(pkg('angular', 'dist', style, `${name}.d.ts`)))

        const template = JSON.parse(`"${js.match(/template: "((?:[^"\\]|\\.)*)"/)[1]}"`)
        assert.match(template, /\[attr.aria-hidden\]="ariaLabel \? null : 'true'"/)
        assert.match(js, /ariaLabel: "ariaLabel"/)
        matchSnapshot(`angular/${style}-${name}.html`, template)
    }
})

test('angular: index каждого стиля экспортирует все иконки', () => {
    for (const style of ['base', 'ghost', 'outline', 'solid']) {
        const index = read(pkg('angular', 'dist', style, 'index.js'))
        assert.equal(index.trim().split('\n').length, countByStyle(style), style)
    }
})
