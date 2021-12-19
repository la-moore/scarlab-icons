const json = require('@rollup/plugin-json')
const { nodeResolve } = require('@rollup/plugin-node-resolve')
const minify = require('rollup-plugin-babel-minify')
const copy = require('rollup-plugin-copy')

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
            copy({
                targets: [
                    { src: 'dist/*', dest: 'lib' },
                    { src: 'README.md', dest: 'lib' },
                ]
            }),
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
