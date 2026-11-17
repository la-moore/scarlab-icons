import assert from 'node:assert/strict'
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

export const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..')
export const pkg = (...parts) => join(ROOT, 'packages', ...parts)
export const read = (path) => readFileSync(path, 'utf8')

/** Иконки-образцы для snapshot-тестов: по одной на каждый стиль */
export const SAMPLES = [
    ['base', 'activity'],
    ['ghost', 'heart'],
    ['outline', 'heart'],
    ['solid', 'heart'],
]

const SNAPSHOT_DIR = join(ROOT, 'tests', '__snapshots__')
const UPDATE = process.env.UPDATE_SNAPSHOTS === '1'

/**
 * Простейший snapshot: сравнивает значение с файлом в tests/__snapshots__.
 * Если файла нет или UPDATE_SNAPSHOTS=1, то файл (пере)записывается.
 */
export function matchSnapshot(name, value) {
    const file = join(SNAPSHOT_DIR, `${name}.snap`)
    const actual = typeof value === 'string' ? value : JSON.stringify(value, null, 2)

    if (UPDATE || !existsSync(file)) {
        if (process.env.CI && !UPDATE) {
            assert.fail(`Snapshot "${name}" отсутствует. Запустите локально: npm run test:update`)
        }
        mkdirSync(dirname(file), { recursive: true })
        writeFileSync(file, actual, 'utf8')
        return
    }

    assert.equal(actual, read(file), `Snapshot "${name}" не совпадает. Если изменение ожидаемое: npm run test:update`)
}

/** Подставляет имя файла вместо `*` в пути из поля exports */
export function resolveExportTarget(target, sample) {
    return target.replace('*', sample)
}
