import fs from 'fs'
import path from 'path'
import MAIN_PACKAGE from '../../package.json'

export class Transformer {
    outputDir

    constructor(config) {
        this.outputDir = config.outputDir
    }

    clearOutputDir() {
        const files = fs.readdirSync(this.outputDir)

        for (const file of files) {
            const isDir = file.split('.').length === 1

            if (isDir) {
                fs.rmSync(this.outputDir+file, { recursive: true })
            } else {
                fs.unlinkSync(this.outputDir+file)
            }
        }
    }

    createFile(fileName, template, opts = null) {
        let content = ''
        let pathName = path.join(this.outputDir, fileName)

        if (template) {
            content = template()
        }

        fs.mkdir(path.dirname(pathName), { recursive: true }, (err) => {
            if (err) throw err;
        })

        fs.writeFileSync(
            pathName,
            `${content.replace(/^\s+|\s+$/g, '')}\n`,
            opts
        )

        return this
    }

    createPackage(framework, opt = null) {
        let pathName = path.join(this.outputDir, 'package.json')
        let content = {
            name: `@scarlab/icons${framework ? '-' + framework : ''}`,
            version: MAIN_PACKAGE.version,
            license: MAIN_PACKAGE.license,
            homepage: 'https://github.com/la-moore/scarlab-icons',
            publishConfig: {
                access: "public"
            },
            files: [
                '**/*'
            ],
            ...opt
        }

        fs.mkdir(path.dirname(pathName), { recursive: true }, (err) => {
            if (err) throw err;
        })

        fs.writeFileSync(
            pathName,
            JSON.stringify(content, null, '\t')
        )

        return this
    }
}
