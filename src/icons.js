import fs from 'fs'
import path from 'path'
import convertIcons from './core/icons'
import getIcons from './utils/get-icons'

const OUTPUT_DIR = path.join(__dirname, '../dist/')
const ICONS_DIR = path.join(__dirname, '../svg/')

const icons = convertIcons(getIcons(ICONS_DIR))

fs.writeFileSync(
    path.join(OUTPUT_DIR, `icons.json`),
    JSON.stringify(icons, null, '\t')
)
