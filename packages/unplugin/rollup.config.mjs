import typescript from '@rollup/plugin-typescript'
import dts from 'rollup-plugin-dts'

const input = {
  index: 'src/index.ts',
  vite: 'src/vite.ts',
  rollup: 'src/rollup.ts'
}

// всё, кроме собственных исходников, остаётся внешним: unplugin, tinyglobby, данные иконок
const external = (id) => !id.startsWith('.') && !id.startsWith('/') && !id.startsWith('\0')

/** @type {import('rollup').RollupOptions[]} */
export default [
  {
    input,
    external,
    plugins: [
      typescript({
        tsconfig: './tsconfig.json',
        declaration: false,
        declarationMap: false,
        sourceMap: false
      })
    ],
    output: {
      dir: 'dist',
      format: 'esm',
      entryFileNames: '[name].js',
      chunkFileNames: 'shared-[hash].js'
    }
  },
  {
    input,
    external,
    plugins: [dts()],
    output: {
      dir: 'dist',
      format: 'esm',
      entryFileNames: '[name].d.ts',
      chunkFileNames: 'shared-[hash].d.ts'
    }
  }
]
