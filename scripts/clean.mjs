// Удаляет переданные пути (замена rimraf): node ../../scripts/clean.mjs dist .build
import { rmSync } from 'node:fs'

for (const path of process.argv.slice(2)) rmSync(path, { recursive: true, force: true })
