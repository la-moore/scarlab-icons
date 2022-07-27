import fs from 'fs'
import path from 'path'

let config

export function FigmaPlugin(options, globOptions) {
    return {
        name: 'vite-figma',
        apply: 'build',
        configResolved(opts) {
            config = opts
        },
        closeBundle() {
            const code = fs.readFileSync(
                path.join(__dirname, `main.js`),
                'utf8'
            )

            if (config.figma) {
                fs.writeFileSync(
                    path.join(config.build.outDir, `manifest.json`),
                    JSON.stringify(config.figma, null, '\t')
                )
            }

            fs.writeFileSync(
                path.join(config.build.outDir, `main.js`),
                code
            )
        }
    }
}
