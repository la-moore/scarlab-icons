const json = require('@rollup/plugin-json')
const { nodeResolve } = require('@rollup/plugin-node-resolve')
const minify = require('rollup-plugin-babel-minify')

export default [
    {
        input: 'src/lib/index.js',
        output: {
            file: 'lib/index.js',
            format: 'umd',
            name: 'ScarlabIcons'
        },
        plugins: [
            json(),
            nodeResolve(),
        ]
    },
    {
        input: 'src/lib/index.js',
        output: {
            file: 'lib/index.min.js',
            format: 'umd',
            name: 'ScarlabIcons'
        },
        plugins: [
            json(),
            nodeResolve(),
            minify(),
        ]
    }
]
