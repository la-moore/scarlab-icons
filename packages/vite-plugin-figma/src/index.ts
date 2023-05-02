import { Plugin } from 'vite'
import fs from 'fs'
import path from 'path'
import { build } from 'esbuild'

interface OptionsI {
    name: string
    id: string
    editorType: ("figma" | "figjam")[]
    api:  string
    main: string
}

const config = {
    root: '',
    outDir: '',
}

export function viteFigmaPlugin(options: OptionsI): Plugin {
    return {
        name: 'vite-figma',
        apply: 'build',
        configResolved(opts) {
            config.root = opts.root
            config.outDir = opts.build.outDir
        },
        closeBundle() {
            if (options.main) {
                const entry = path.join(config.root, options.main)
                const outfile = path.join(config.outDir, `figma.js`)

                build({
                    entryPoints: [ entry ],
                    bundle: true,
                    outfile,
                }).catch(() => process.exit(1))
            }

            fs.writeFileSync(
                path.join(config.outDir, `manifest.json`),
                JSON.stringify({
                    ...options,
                    ui: "index.html",
                    main: "figma.js"
                }, null, '\t')
            )
        }
    }
}
