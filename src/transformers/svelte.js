import fs from 'fs'
import path from 'path'
import { Transformer } from '../utils/transformer'

const OUTPUT_DIR = path.join(__dirname, '../../svelte/')

const template = (props, paths) => `
<svg ${serializeObjToAttrs(props)} ${'{...$$props}'}>
    ${ paths.map(d => `<path d="${d}" />`).join('\n\t') }
</svg>
}

export default SvgComponent
`

const templateMd = () => `
## Table of Contents

* [Usage](#usage)
* [Customization](#customization)
* [Figma](#figma)
* [License](#license)

## Usage

\`\`\`html
<script>
import { CircleIcon } from '@scarlab/icons-svelte/outline'
</script>

<CircleIcon />
\`\`\`

## Customization

### Change color

\`\`\`html
<CircleIcon color="#fb923c" />
<CircleIcon style="color: #fb923c;" />
\`\`\`

### Change stroke width

\`\`\`html
<CircleIcon stroke-width="1" />
<CircleIcon stroke-width="2" />
\`\`\`
`

function serializeObjToAttrs(obj) {
    return Object.keys(obj)
        .map(key => `${key}="${obj[key]}"`)
        .join(' ')
}

export default function useSvelte(icons) {
    const t = new Transformer({
        outputDir: OUTPUT_DIR
    })

    t.clearOutputDir()

    icons.forEach((item) => {
        t.createFile(`${item.type}/${item.name}.svelte`, () => {
            return template(
                item.getAttributes(),
                item.paths
            )
        })
    })

    t.createPackage('svelte', {})

    t.createFile('README.md', () => {
        const temp = fs.readFileSync(path.join(__dirname, '../template.md'), 'utf8')

        return temp.replace('{{ framework }}', 'svelte')
            .replace('{{ content }}', templateMd())
    })
}
