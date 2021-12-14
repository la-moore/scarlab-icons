import path from 'path'
import convertIcons from './core/icons'
import getIcons from './utils/get-icons'
import useTags from './transformers/tags'
import useSprite from './transformers/sprite'
import useVue from './transformers/vue'
import useReact from './transformers/react'
import useSvelte from './transformers/svelte'
// import useAngular from './transformers/angular'

const ICONS_DIR = path.join(__dirname, '../svg/')

const icons = convertIcons(getIcons(ICONS_DIR))

useTags(icons)
useSprite(icons)
useVue(icons)
useReact(icons)
useSvelte(icons)
// useAngular(icons)

console.log('All: ', icons.length)
console.log('Solid: ', icons.filter(({ type }) => type === 'solid').length)
console.log('Outline: ', icons.filter(({ type }) => type === 'outline').length)
