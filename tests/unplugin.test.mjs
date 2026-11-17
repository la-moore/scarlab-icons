import { test } from 'node:test'
import assert from 'node:assert/strict'
import { mkdtempSync, readdirSync, rmSync } from 'node:fs'
import { join } from 'node:path'
import { rollup } from 'rollup'
import nodeResolve from '@rollup/plugin-node-resolve'
import { build as viteBuild } from 'vite'
import { icons } from '@scarlab-icons/icons'
import { inlineHtml, scanCode } from '@scarlab-icons/unplugin'
import scarlabRollup from '@scarlab-icons/unplugin/rollup'
import scarlabVite from '@scarlab-icons/unplugin/vite'
import { ROOT, read } from './helpers.mjs'

const FIXTURE = join(ROOT, 'tests', 'fixtures', 'unplugin')
const KNOWN = new Set(icons.map((i) => i.name))

/** Сколько IconNode попало в бандл: у каждого ровно одно поле "style" */
const countIcons = (code) => (code.match(/"style":\s*"(base|ghost|outline|solid)"/g) ?? []).length
const expectedCount = (names) => icons.filter((i) => names.includes(i.name)).length
const hasIcon = (code, name) => new RegExp(`"name":\\s*"${name}"`).test(code)

async function bundleWithRollup(plugins) {
    const bundle = await rollup({
        input: join(FIXTURE, 'src', 'main.js'),
        plugins: [...plugins, nodeResolve()],
        onwarn: () => {},
    })
    const { output } = await bundle.generate({ format: 'esm' })
    await bundle.close()
    return output[0].code
}

// ---------- сканер ----------

test('scanCode: HTML, шаблоны, тернарники, dataset и setAttribute', () => {
    const found = new Set()
    scanCode(
        [
            '<i data-scarlab="star"></i>',
            "<i data-scarlab='bell' />",
            '<i data-scarlab=heart>',
            '`<i data-scarlab="${on ? \'heart-broken\' : \'activity\'}">`',
            "<Icon data-scarlab={big ? 'airplay' : 'alert'} />",
            "el.dataset.scarlab = 'bold'",
            "el.setAttribute('data-scarlab', 'barcode')",
            "const notAnIcon = 'cast'",
            "data-scarlab=\"does-not-exist\"",
        ].join('\n'),
        KNOWN,
        found,
    )
    assert.deepEqual(
        [...found].sort(),
        ['activity', 'airplay', 'alert', 'barcode', 'bell', 'bold', 'heart', 'heart-broken', 'star'],
    )
})

// ---------- замена в HTML ----------

test('inlineHtml: пустые и самозакрывающиеся элементы заменяются на <svg>', () => {
    const html = inlineHtml('<p><i data-scarlab="star" data-style="solid" class="x"></i> <span data-scarlab="heart" data-style="outline"/></p>')
    assert.match(html, /^<p><svg [^>]*class="scarlab scarlab-star x"[^>]*>.*<\/svg> <svg [^>]*scarlab-heart/)
    assert.doesNotMatch(html, /data-scarlab/)
})

test('inlineHtml: параметры, data-stroke-width и сущности обрабатываются как в replace()', () => {
    const html = inlineHtml('<i data-scarlab="activity" data-stroke-width="3" title="A &amp; B"></i>', { width: 32 })
    assert.match(html, / stroke-width="3"/)
    assert.match(html, / width="32"/)
    assert.match(html, / title="A &amp; B"/, 'без двойного экранирования')
})

test('inlineHtml: script, style, комментарии, непустые и неизвестные элементы не трогаются', () => {
    const untouched = [
        '<script>el.innerHTML = \'<i data-scarlab="star"></i>\'</script>',
        '<style>[data-scarlab="star"] { color: red }</style>',
        '<!-- <i data-scarlab="star"></i> -->',
        '<i data-scarlab="star">fallback</i>',
        '<i data-scarlab="does-not-exist"></i>',
    ]
    for (const html of untouched) assert.equal(inlineHtml(html), html)
})

// ---------- Rollup ----------

test('rollup без плагина тянет все иконки (контрольная проверка)', async () => {
    const code = await bundleWithRollup([])
    assert.equal(countIcons(code), icons.length)
})

test('rollup: в бандл попадают только найденные иконки', async () => {
    const code = await bundleWithRollup([scarlabRollup({ root: FIXTURE })])
    const used = ['star', 'heart', 'heart-broken', 'bell']

    assert.equal(countIcons(code), expectedCount(used))
    for (const name of used) assert.ok(hasIcon(code, name), name)
    assert.ok(!hasIcon(code, 'airplay'))
    assert.ok(code.length < 100_000, `бандл ${code.length} байт`)
})

test('rollup: safelist добавляет иконки, в т.ч. в формате style/name', async () => {
    const code = await bundleWithRollup([scarlabRollup({ root: FIXTURE, safelist: ['airplay', 'base/activity'] })])
    assert.equal(countIcons(code), expectedCount(['star', 'heart', 'heart-broken', 'bell', 'airplay', 'activity']))
})

test('rollup: прямой импорт @scarlab-icons/icons из кода пользователя не подменяется', async () => {
    const bundle = await rollup({
        input: 'entry',
        plugins: [
            { name: 'entry', resolveId: (id) => (id === 'entry' ? id : null), load: (id) => (id === 'entry' ? "export { icons } from '@scarlab-icons/icons'" : null) },
            scarlabRollup({ root: FIXTURE }),
            nodeResolve(),
        ],
    })
    const { output } = await bundle.generate({ format: 'esm' })
    await bundle.close()
    assert.equal(countIcons(output[0].code), icons.length)
})

// ---------- Vite ----------

test('vite build: HTML со встроенными <svg>, JS только с найденными иконками', async () => {
    const outDir = mkdtempSync(join(ROOT, 'tests', '.tmp-unplugin-'))

    try {
        await viteBuild({
            root: FIXTURE,
            logLevel: 'silent',
            configFile: false,
            plugins: [scarlabVite()],
            build: { outDir, emptyOutDir: true, minify: false },
        })

        const html = read(join(outDir, 'index.html'))
        assert.match(html, /<svg [^>]*class="scarlab scarlab-star big"/)
        assert.match(html, / title="A &amp; B"/)
        assert.doesNotMatch(html, /data-scarlab="star"/)

        const assets = join(outDir, 'assets')
        const js = readdirSync(assets).filter((f) => f.endsWith('.js')).map((f) => read(join(assets, f))).join('\n')

        assert.equal(countIcons(js), expectedCount(['star', 'heart', 'heart-broken', 'bell']))
        assert.ok(js.length < 100_000, `бандл ${js.length} байт`)
    } finally {
        rmSync(outDir, { recursive: true, force: true })
    }
})
