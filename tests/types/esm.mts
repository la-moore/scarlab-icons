// Проверка типов для потребителя с moduleResolution: nodenext, ESM
import { createElement, createRef } from 'react'
import ReactActivity from '@scarlab-icons/react/base/activity'
import { OutlineHeart } from '@scarlab-icons/react/outline'
import VueActivity from '@scarlab-icons/vue/base/activity'
import { SolidHeart } from '@scarlab-icons/vue/solid'
import type { IconComponent } from '@scarlab-icons/vue/types'
import { h } from 'vue'
import SvelteHeart from '@scarlab-icons/svelte/ghost/heart'
import { BaseActivity as SvelteActivity } from '@scarlab-icons/svelte/base'
import type { ComponentProps } from 'svelte'

createElement(ReactActivity, { width: 24, className: 'x', strokeWidth: 1 })
createElement(OutlineHeart, {})
createElement(OutlineHeart, { ref: createRef<SVGSVGElement>(), 'aria-label': 'Like' })
// @ts-expect-error ref на другой тип элемента
createElement(OutlineHeart, { ref: createRef<HTMLDivElement>() })
// @ts-expect-error неизвестный prop
createElement(OutlineHeart, { foo: 1 })
h(VueActivity, { class: 'x', 'stroke-width': 1 })
h(SolidHeart)
const c: IconComponent = VueActivity
const p: ComponentProps<SvelteHeart> = { class: 'x', width: 24 }
// @ts-expect-error неверный тип
const q: ComponentProps<SvelteHeart> = { width: {} }
void [c, p, q, SvelteActivity]
