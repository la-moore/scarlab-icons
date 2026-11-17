// Проверка типов для потребителя с moduleResolution: bundler (Vite, webpack и т.п.)
import ReactActivity from '@scarlab-icons/react/base/activity'
import { OutlineHeart } from '@scarlab-icons/react/outline'
import VueActivity from '@scarlab-icons/vue/base/activity'
import SvelteHeart from '@scarlab-icons/svelte/ghost/heart'
import { GhostHeart } from '@scarlab-icons/svelte/ghost'
void [ReactActivity, OutlineHeart, VueActivity, SvelteHeart, GhostHeart]

import scarlabVite from '@scarlab-icons/unplugin/vite'
import scarlabRollup from '@scarlab-icons/unplugin/rollup'
import type { Options } from '@scarlab-icons/unplugin'
const options: Options = { safelist: ['heart', 'outline/star'], inline: { strokeWidth: 1.5 } }
void [scarlabVite(options), scarlabRollup()]
