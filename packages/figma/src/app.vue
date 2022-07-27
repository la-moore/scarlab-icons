<template>
  <div class="text-sm">
    <div class="flex border-b border-gray-200">
      <input ref="input"
             v-model="query"
             class="h-10 px-3 appearance-none flex-1 focus:outline-0"
             placeholder="Search...">
      <div class="h-10 w-10 flex justify-center items-center cursor-pointer"
           @click="query = ''">
        <x-icon />
      </div>
    </div>

    <template v-for="(item, jdx) in list"
              :key="jdx">
      <div class="">
        <div class="font-medium flex items-center h-10 cursor-pointer leading-10 px-3 border-b border-gray-200"
             @click="item.isOpen = !item.isOpen">
          <div class="flex-1">
            {{ item.label }}
          </div>
          <div class="ml-3 -mr-3  w-10 flex justify-center items-center">
            <minus-icon v-if="item.isOpen" />
            <plus-icon v-else />
          </div>
        </div>

        <div v-if="item.isOpen"
             class="flex flex-wrap border-b border-gray-200">
          <template v-for="(icon, idx) in item.icons"
                    :key="idx">
            <div class="w-1/6 h-10 flex justify-center cursor-pointer items-center flex-shrink-0 hover:bg-gray-100"
                 @click="() => postMessage('CREATE_SVG_FRAME', { svg: toSvg(icon), name: icon.name })">
              <div v-html="toSvg(icon)" />
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

<script lang="ts">
import { defineComponent, reactive, ref, computed, watch, onMounted } from 'vue'
import { XIcon, PlusIcon, MinusIcon } from '@scarlab-icons/vue/dist/outline'
import { toSvg } from './utils'
import icons from '@scarlab-icons/icons'
import pck from '@scarlab-icons/icons/package.json'

export default defineComponent({
  name: 'App',
  components: {
    XIcon,
    PlusIcon,
    MinusIcon
  },
  setup() {
    const query = ref('')
    const input = ref<HTMLElement>(undefined)
    const list = reactive([
      {
        label: 'Outline',
        isOpen: false,
        icons: computed(() => icons.filter((icon) => icon.path.split('/').includes('outline') && icon.name.includes(query.value)))
      },
      {
        label: 'Solid',
        isOpen: false,
        icons: computed(() => icons.filter((icon) => icon.path.split('/').includes('solid') && icon.name.includes(query.value)))
      },
      {
        label: 'Ghost',
        isOpen: false,
        icons: computed(() => icons.filter((icon) => icon.path.split('/').includes('ghost') && icon.name.includes(query.value)))
      }
    ])

    watch(query, (v) => {
      list.forEach((item) => item.isOpen = Boolean(v))
    })

    function postMessage(action, data) {
      window.parent.postMessage({ pluginMessage: JSON.stringify({ action, data }) }, '*')
    }

    onMounted(() => {
      if (input.value) {
        input.value.focus()
      }
    })

    return {
      list,
      query,
      input,
      toSvg,
      postMessage,
      version: pck.version
    }
  }
})
</script>
