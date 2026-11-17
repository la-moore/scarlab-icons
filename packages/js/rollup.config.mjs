import { builtinModules } from 'node:module'

import commonjs from '@rollup/plugin-commonjs'
import nodeResolve from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
import dts from 'rollup-plugin-dts'

const external = [
  ...builtinModules,
  ...builtinModules.map((m) => `node:${m}`),
  // данные иконок — зависимость, а не часть бандла: npm дедуплицирует их с другими пакетами
  '@scarlab-icons/icons'
]

/** @type {import('rollup').RollupOptions[]} */
export default [
  {
    input: 'src/index.ts',
    external,
    plugins: [
      nodeResolve({ preferBuiltins: true }),
      commonjs(),
      typescript({
        tsconfig: './tsconfig.json',
        declaration: false,
        declarationMap: false
      })
    ],
    output: [
      {
        file: 'dist/index.js',
        format: 'esm',
        // sourcemap: true
      },
      {
        file: 'dist/index.cjs',
        format: 'cjs',
        exports: 'named',
        // sourcemap: true
      }
    ]
  },
  {
    input: 'src/index.ts',
    external,
    plugins: [dts({ respectExternal: true })],
    output: {
      file: 'dist/index.d.ts',
      format: 'esm'
    }
  }
]
