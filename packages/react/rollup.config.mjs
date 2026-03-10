import { builtinModules } from 'node:module'

import commonjs from '@rollup/plugin-commonjs'
import nodeResolve from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
import dts from 'rollup-plugin-dts'

const baseExternal = [
  ...builtinModules,
  ...builtinModules.map((m) => `node:${m}`),
  'react',
  'react/jsx-runtime'
]

const external = (id) => {
  if (baseExternal.includes(id)) {
    return true
  }

  return id.startsWith('./base/') ||
      id.startsWith('./outline/') ||
      id.startsWith('./solid/') ||
      id.startsWith('./ghost/')
}

/** @type {import('rollup').RollupOptions[]} */
export default [
  
]
