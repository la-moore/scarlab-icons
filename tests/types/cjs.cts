// Проверка типов для потребителя с moduleResolution: nodenext, CommonJS
import ReactActivity = require('@scarlab-icons/react/base/activity')
import { OutlineHeart } from '@scarlab-icons/react/outline'
import VueActivity = require('@scarlab-icons/vue/base/activity')
import { SolidHeart } from '@scarlab-icons/vue/solid'
import { createElement } from 'react'
createElement(ReactActivity, { width: 24 })
createElement(OutlineHeart, {})
void [VueActivity, SolidHeart]
