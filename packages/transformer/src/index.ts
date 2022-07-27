import fs from 'fs'
import path from 'path'

interface IConfig {
    outputDir: string
}

export class Transformer {
    outputDir

    constructor(config: IConfig) {
        this.outputDir = config.outputDir
    }

    clearOutputDir() {
        const files = fs.readdirSync(this.outputDir)

        for (const file of files) {
            this.remove(file)
        }

        return this
    }

    remove(fileName: string) {
        let pathName = path.join(this.outputDir, fileName)
        const isDir = pathName.split('.').length === 1

        const exists = fs.existsSync(pathName)

        if (exists) {
            if (isDir) {
                fs.rmSync(pathName, { recursive: true })
            } else {
                fs.unlink(pathName,(err) => {
                    if (err) { return }
                })
            }
        }
    }

    createFile(fileName: string, template?: () => string, opts?: any) {
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

    camelize(str: string) {
        return str.replace(/-([a-z0-9])/g, g => g[1].toUpperCase())
    }

    pascalize(str: string) {
        const camel = this.camelize(str)
        return camel[0].toUpperCase() + camel.slice(1)
    }

    camelToKebab(key: string) {
        const result = key
            .replace(/:/g, '-')
            .replace(/([A-Z])/g, ' $1')
            .trim()
        return result.split(/\s+/g).join('-').toLowerCase()
    }

}
