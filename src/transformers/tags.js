import path from 'path'
import tags from '../../dist/tags.json'
import fs from "fs";

const OUTPUT_DIR = path.join(__dirname, '../../dist/')

export default function useTags(icons) {
    const obj = {}

    icons.forEach((icon) => {
        if (!obj[icon.name]) {
            obj[icon.name] = tags[icon.name] || []
        }
    })

    fs.writeFileSync(
        path.join(OUTPUT_DIR, `tags.json`),
        JSON.stringify(obj, null, '\t')
    )
}
