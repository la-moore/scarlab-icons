import { readFile, realpath } from 'node:fs/promises'
import { realpathSync } from 'node:fs'
import { createRequire } from 'node:module'
import { dirname, join, sep } from 'node:path'
import { icons } from '@scarlab-icons/icons'
import type { Attrs } from '@scarlab-icons/js'
import { glob } from 'tinyglobby'
import { createUnplugin, type UnpluginFactory } from 'unplugin'
import { inlineHtml } from './html'
import { scanCode } from './scan'

export { inlineHtml, scanCode }

export interface Options {
    /** Корень проекта для поиска файлов. По умолчанию root из Vite или process.cwd() */
    root?: string
    /** Glob-шаблоны файлов, в которых ищутся иконки (относительно root) */
    content?: string[]
    /** Дополнительные glob-шаблоны исключений */
    ignore?: string[]
    /** Иконки, которые нужно включить всегда: имя ('heart') или 'style/name' */
    safelist?: string[]
    /**
     * Vite: заменять статические data-scarlab в index.html на <svg> при сборке.
     * Можно передать атрибуты по умолчанию, как в replace(). По умолчанию true.
     */
    inline?: boolean | Attrs
}

const ICONS_ID = '@scarlab-icons/icons'
const VIRTUAL_ID = '\0scarlab-icons:used'

export const DEFAULT_CONTENT = [
    '**/*.{html,htm,js,mjs,cjs,jsx,ts,mts,cts,tsx,vue,svelte,astro,md,mdx,php,twig,hbs,njk,liquid,erb}',
]

const DEFAULT_IGNORE = [
    '**/node_modules/**',
    '**/.git/**',
    '**/dist/**',
    '**/build/**',
    '**/.output/**',
    '**/coverage/**',
]

const KNOWN = new Set(icons.map((icon) => icon.name))

/** Каталог сборки @scarlab-icons/js: только его импорт данных подменяется */
function resolveJsDir(root: string): string | undefined {
    for (const base of [join(root, 'package.json'), import.meta.url]) {
        try {
            return dirname(realpathSync(createRequire(base).resolve('@scarlab-icons/js')))
        } catch {
            // пробуем следующий вариант
        }
    }
    return undefined
}

export const unpluginFactory: UnpluginFactory<Options | undefined> = (options = {}) => {
    let root = options.root ?? process.cwd()
    let serve = false
    let used = new Set<string>()
    let warnings: string[] = []
    let jsDir: string | undefined

    async function isJsImporter(importer: string) {
        const path = importer.split('?')[0]
        const real = await realpath(path).catch(() => path)
        return jsDir ? real.startsWith(jsDir + sep) : /[\\/]@scarlab-icons[\\/]js[\\/]/.test(real)
    }

    return {
        name: 'scarlab-icons',
        enforce: 'pre',

        async buildStart() {
            if (serve) return

            jsDir = resolveJsDir(root)
            used = new Set()
            warnings = []

            const files = await glob(options.content ?? DEFAULT_CONTENT, {
                cwd: root,
                ignore: [...DEFAULT_IGNORE, ...(options.ignore ?? [])],
                absolute: true,
            })

            for (const file of files) {
                scanCode(await readFile(file, 'utf8'), KNOWN, used)
                this.addWatchFile(file)
            }

            for (const entry of options.safelist ?? []) {
                const name = entry.slice(entry.lastIndexOf('/') + 1)
                if (KNOWN.has(name)) used.add(name)
                else warnings.push(`Иконка "${entry}" из safelist не найдена`)
            }
        },

        async resolveId(id, importer) {
            if (serve || id !== ICONS_ID || !importer) return null
            return (await isJsImporter(importer)) ? VIRTUAL_ID : null
        },

        loadInclude: (id) => id === VIRTUAL_ID,

        load(id) {
            if (id !== VIRTUAL_ID) return null

            for (const message of warnings) this.warn(message)
            warnings = []

            const subset = icons.filter((icon) => used.has(icon.name))
            return `export const icons = ${JSON.stringify(subset)}\n`
        },

        vite: {
            configResolved(config) {
                root = options.root ?? config.root
                // в dev-режиме отдаём полный набор: не нужно пересканировать проект на каждое изменение
                serve = config.command === 'serve'
            },

            transformIndexHtml(html) {
                if (options.inline === false) return html
                const params = typeof options.inline === 'object' ? options.inline : {}
                return inlineHtml(html, params, (icon) => this.warn?.(`Иконка "${icon}" в HTML не найдена`))
            },
        },
    }
}

export const unplugin = /* #__PURE__ */ createUnplugin(unpluginFactory)

export default unplugin
