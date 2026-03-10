<template>
  <div class="text-sm">
    <div class="flex border-b border-gray-200">
      <input
          ref="input"
          v-model="query"
          class="h-10 px-3 appearance-none flex-1 focus:outline-0"
          placeholder="Search..."
      >
      <div
          class="h-10 w-10 flex justify-center items-center cursor-pointer"
          @click="query = ''"
      >
        <BaseX stroke-width="1" />
      </div>
    </div>

    <template
        v-for="(item, _jdx) in list"
        :key="_jdx"
    >
      <div class="">
        <div
            class="font-medium flex items-center h-10 cursor-pointer leading-10 px-3 border-b border-gray-200"
            @click="item.isOpen = !item.isOpen"
        >
          <div class="flex-1">
            {{ item.label }}
          </div>
          <div class="ml-3 -mr-3 w-10 p-2 flex justify-center items-center">
            <BaseFold v-if="item.isOpen" />
            <BaseUnfold v-else />
          </div>
        </div>

        <div
            v-if="item.isOpen"
            class="flex flex-wrap border-b border-gray-200"
        >
          <template
              v-for="(icon, _idx) in item.icons"
              :key="_idx"
          >
            <div class="w-1/6 h-10 flex justify-center cursor-pointer items-center shrink-0 hover:bg-gray-100"
                 @click="() => postMessage('CREATE_SVG_FRAME', { svg: toSvg(icon, { width: '24', height: '24' }), name: icon.name })">
              <div v-html="toSvg(icon, { width: '24', height: '24' })" />
            </div>
          </template>
        </div>
      </div>
    </template>

    <div class="p-3 text-gray-500 text-center flex flex-col items-center space-y-3">
      <a class="text-blue-500" href="http://scarlab-icons.la-moore.ru/" target="_blank">Web App</a>
      <div class="space-x-3">
        <a class="text-blue-500" href="https://github.com/la-moore/scarlab-icons" target="_blank">GitHub</a>
        <a class="text-blue-500" href="https://www.npmjs.com/org/scarlab" target="_blank">NPM</a>
      </div>
      <p>
        Scarlab Icons v{{ version }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref, computed, watch, onMounted } from 'vue'
import { BaseX, BaseFold, BaseUnfold } from '@scarlab-icons/vue/base'
import { icons } from '@scarlab-icons/icons'
import { toSvg } from './utils'

const version = ref('3.0.0')
const query = ref('')
const input = ref<HTMLElement>()
const list = reactive([
  {
    label: 'Base',
    isOpen: false,
    icons: computed(() => icons.filter((icon) => icon.style === 'base' && icon.name.includes(query.value)))
  },
  {
    label: 'Outline',
    isOpen: false,
    icons: computed(() => icons.filter((icon) => icon.style === 'outline' && icon.name.includes(query.value)))
  },
  {
    label: 'Solid',
    isOpen: false,
    icons: computed(() => icons.filter((icon) => icon.style === 'solid' && icon.name.includes(query.value)))
  },
  {
    label: 'Ghost',
    isOpen: false,
    icons: computed(() => icons.filter((icon) => icon.style === 'ghost' && icon.name.includes(query.value)))
  }
])

watch(query, (v) => {
  list.forEach((item) => item.isOpen = Boolean(v))
})

function postMessage(action: string, data: any) {
  window.parent.postMessage({ pluginMessage: JSON.stringify({ action, data }) }, '*')
}

onMounted(() => {
  if (input.value) {
    input.value.focus()
  }
})
</script>
