const json = require('@rollup/plugin-json')
const commonjs = require('@rollup/plugin-commonjs')
const typescript = require('@rollup/plugin-typescript')
const { nodeResolve } = require('@rollup/plugin-node-resolve')

// const packageJson = require('./package.json')

export default {
    input: 'src/index.ts',
    output: [
        {
            file: 'dist/index.js',
            format: 'umd',
            name: 'ScarlabIcons'
        },
        {
            file: 'dist/index.es.js',
            format: 'esm'
        }
    ],
    plugins: [
        json(),
        nodeResolve(),
        typescript(),
        commonjs(),
    ]
}
