const fs = require('fs')
const path = require('path')
const PACKAGES_DIR = path.join(__dirname, '../packages')
const PACKAGE_FILE = 'package.json'

const packages = [
    'vue',
    'lib',
    'icons',
    'react',
    'svelte',
]
const pack = JSON.parse(fs.readFileSync(path.join(__dirname, `../package.json`), 'utf8'))

for (const file of packages) {
    const f = JSON.parse(fs.readFileSync(path.join(PACKAGES_DIR, file, PACKAGE_FILE), 'utf8'))

    f.version = pack.version

    fs.writeFileSync(
        path.join(PACKAGES_DIR, file, PACKAGE_FILE),
        JSON.stringify(f, null, '\t')
    )
}
