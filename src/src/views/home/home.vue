<template>
  <div class="min-h-screen bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 pb-12">
    <NavBar />
    <HomeHero class="mb-12" />

    <div class="flex px-6 md:px-12 space-x-6 max-w-screen-2xl mx-auto">
      <div class="flex-1 space-y-6">
        <div class="-m-1">
          <template
            v-for="(item, idx) in popularTags"
            :key="idx"
          >
            <div class="p-1 inline-block">
              <div
                class="cursor-pointer text-gray-700 bg-gray-300 hover:bg-gray-400 dark:text-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 inline-flex justify-center items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded"
                @click="search = item.tag"
              >
                {{ item.tag }}
              </div>
            </div>
          </template>
        </div>

        <div class="sticky top-0 py-6 bg-gray-200 border-b border-gray-300 dark:border-gray-700 dark:bg-gray-800 flex space-x-3">
          <div class="flex flex-1 rounded-md bg-gray-300 dark:bg-gray-700">
            <div class="relative w-full text-gray-600 dark:text-gray-300 focus-within:text-gray-500 dark:focus-within:text-gray-500">
              <div class="absolute inset-y-0 w-12 flex justify-center items-center pointer-events-none">
                <SearchAltIcon class="h-4 w-4 transition" />
              </div>

              <input
                v-model="search"
                class="block bg-transparent h-12 w-full pl-12 px-3 py-2 appearance-none focus:outline-none placeholder-gray-500 text-gray-800 dark:placeholder-gray-500 dark:text-gray-200"
                :placeholder="`Search ${iconsCount} icons`"
              >
            </div>

            <div
              v-if="search"
              class="w-12 flex justify-center items-center cursor-pointer text-gray-600 dark:text-gray-300"
              @click="search = ''"
            >
              <XAltIcon class="h-4 w-4" />
            </div>
          </div>

          <div class="flex items-center">
            <BaseButtonIcon
              class="h-12 w-12 text-gray-700 bg-gray-200 rounded-md bg-white hover:bg-gray-300 dark:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
              @click="copyType = !copyType"
            >
              <ClipboardIcon v-if="copyType" />
              <DocumentDownloadIcon v-else />
            </BaseButtonIcon>
          </div>
        </div>

        <div class="grid gap-3 grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 2xl:grid-cols-6">
          <template
            v-for="(icon, idx) in filtered"
            :key="idx"
          >
            <div
              class="cursor-pointer group rounded-xl h-44 border border-gray-300 hover:bg-gray-300 flex flex-col items-center py-3 dark:border-gray-700 dark:hover:bg-gray-700"
              @click="() => getIcon(icon.name)"
            >
              <div class="text-gray-500 dark:text-gray-300 flex-1 flex items-center justify-center">
                <div v-html="icon.toSvg(iconSettings)" />
              </div>
              <div class="text-center text-xs py-3">
                {{ icon.name }}
              </div>
            </div>
          </template>
        </div>
      </div>

      <div class="hidden md:block shrink-0 w-full pt-6 max-w-xs xl:max-w-sm axl:max-w-md">
        <div class="sticky top-6 space-y-6">
          <div class="h-12 flex items-center">
            <div class="font-bold text-lg text-gray-600 dark:text-gray-300">
              Customize:
            </div>
          </div>
          <div class="space-y-1">
            <dt class="text-sm font-medium text-gray-500 dark:text-gray-400 flex items-center">
              <div class="flex-1">
                Size:
              </div>
              <div class="">
                {{ size }}px
              </div>
            </dt>
            <dd class="">
              <input
                v-model="size"
                class="form-slider appearance-none w-full h-2 rounded-md p-0 bg-gray-300 dark:bg-gray-700 thumb:cursor-pointer thumb:appearance-none thumb:border-0 thumb:rounded-full thumb:w-4 thumb:h-4 thumb:bg-gray-600 dark:thumb:bg-gray-300 focus:outline-none focus:ring-0"
                type="range"
                min="10"
                max="96"
              >
            </dd>
          </div>
          <div class="space-y-1">
            <dt class="text-sm font-medium text-gray-500 dark:text-gray-400">
              Color:
            </dt>
            <dd class="relative flex items-center flex-1 rounded-md bg-gray-300 dark:bg-gray-700">
              <div class="relative w-full text-gray-600 dark:text-gray-300 focus-within:text-gray-500 dark:focus-within:text-gray-500">
                <input
                  v-model="color"
                  class="block bg-transparent h-12 w-full px-3 py-2 appearance-none focus:outline-none placeholder-gray-500 text-gray-800 dark:placeholder-gray-500 dark:text-gray-200"
                  :placeholder="`Search ${iconsCount} icons`"
                >
              </div>

              <Popover class="w-12 h-5 text-center shrink-0">
                <PopoverButton>
                  <div class="w-5 inline-block">
                    <div
                      class="aspect-1 rounded-md shadow-inner-border cursor-pointer"
                      :style="{ background: color }"
                    />
                  </div>
                </PopoverButton>

                <PopoverPanel class="absolute right-0 w-64 mt-4 z-10">
                  <div class="bg-gray-100 dark:bg-gray-700 p-3 rounded-md shadow-lg">
                    <div class="grid grid-cols-6 gap-2">
                      <template
                        v-for="(background, idx) in colors"
                        :key="idx"
                      >
                        <div
                          class="aspect-1 rounded-md shadow-inner-border cursor-pointer"
                          :style="{ background }"
                          @click="color = background"
                        />
                      </template>
                    </div>
                  </div>
                </PopoverPanel>
              </Popover>
            </dd>
          </div>
          <div class="space-y-1">
            <dt class="text-sm font-medium text-gray-500 dark:text-gray-400">
              Type:
            </dt>
            <Popover class="relative w-full">
              <PopoverButton class="w-full cursor-pointer">
                <dd class="relative flex items-center flex-1 rounded-md bg-gray-300 dark:bg-gray-700">
                  <div class="relative w-full text-gray-600 dark:text-gray-300 focus-within:text-gray-500 dark:focus-within:text-gray-500">
                    <input
                      v-model="type"
                      readonly
                      class="block cursor-pointer bg-transparent h-12 w-full px-3 py-2 appearance-none focus:outline-none placeholder-gray-500 text-gray-800 dark:placeholder-gray-500 dark:text-gray-200"
                      :placeholder="`Search ${iconsCount} icons`"
                    >
                  </div>

                  <div class="w-12 h-5 flex justify-center shrink-0">
                    <ChevronDownIcon />
                  </div>
                </dd>
              </PopoverButton>
              <PopoverPanel class="absolute text-left right-0 w-64 mt-2 z-10">
                <div class="bg-gray-100 dark:bg-gray-700 p-2 rounded-md shadow-lg">
                  <div class="">
                    <template
                      v-for="(item, idx) in types"
                      :key="idx"
                    >
                      <div
                        class="cursor-pointer text-gray-700 bg-gray-100 hover:bg-gray-200 dark:text-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded"
                        @click="type = item"
                      >
                        {{ item }}
                      </div>
                    </template>
                  </div>
                </div>
              </PopoverPanel>
            </Popover>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from 'vue'
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
import { notify } from '@kyvg/vue3-notification'
import { useDarkMode } from '/~/state/dark-mode'
import { useSettings } from '/~/state/settings'
import { useIcons } from '/~/state/icons'
import { useTags } from '/~/state/tags'
import { useRoute, useRouter } from 'vue-router'
import BaseButtonIcon from '/~/components/button-icon.vue'
import NavBar from './components/nav-bar.vue'
import HomeHero from './components/hero.vue'
import {
  SearchAltIcon, ChevronDownIcon,
  XAltIcon, ClipboardIcon, DocumentDownloadIcon
} from '@scarlab-icons/vue/outline'
import PACKAGE from '@scarlab-icons/icons/package.json'
import iconsJson from '@scarlab-icons/icons'

export default defineComponent({
  name: 'HomeView',
  components: {
    SearchAltIcon,
    ChevronDownIcon,
    XAltIcon,
    ClipboardIcon,
    DocumentDownloadIcon,
    NavBar,
    HomeHero,
    Popover,
    PopoverButton,
    PopoverPanel,
    BaseButtonIcon
  },
  setup() {
    const { size, strokeWidth, color } = useSettings()
    const { inverseDarkMode } = useDarkMode()
    const { icons } = useIcons()
    const { tags } = useTags()
    const router = useRouter()
    const route = useRoute()
    const copyType = ref(true)
    const types = ref([
      'All',
      'Solid',
      'Outline',
      'Ghost'
    ])
    const colors = ref([
      'currentColor',
      '#fecdd3',
      '#f43f5e',
      '#9f1239',
      '#fed7aa',
      '#f97316',
      '#9a3412',
      '#d9f99d',
      '#84cc16',
      '#3f6212',
      '#bfdbfe',
      '#3b82f6',
      '#1e40af',
      '#e9d5ff',
      '#a855f7',
      '#6b21a8',
    ])

    const iconSettings = computed(() => {
      return {
        height: size.value,
        width: size.value,
        color: color.value,
        // eslint-disable-next-line @typescript-eslint/naming-convention
        'stroke-width': strokeWidth.value
      }
    })

    const search = computed({
      get() {
        const { search } = route.query

        return `${search || ''}`
      },
      set(search: string) {
        const query = {
          ...route.query,
          search
        }

        if (!query.search) {
          delete query.search
        }

        router.replace({ query })
      }
    })

    const type = computed({
      get() {
        const { type } = route.query

        return `${type || 'All'}`
      },
      set(type: string) {
        const query = {
          ...route.query,
          type
        }

        if (!query.type || type === 'all') {
          delete query.type
        }

        router.replace({ query })
      }
    })

    const filtered = computed(() => {
      const search = `${route.query.search || ''}`
      let arr = icons.value

      if (type.value !== 'All') {
        arr = arr.filter((icon) => {
          return icon.type === type.value.toLowerCase()
        })
      }

      search
        .split(' ')
        .forEach((word) => {
          arr = arr.filter((item) => {
            return [
              item.name.includes(`${word}`),
              item.tags.some((v) => v.includes(`${word}`)),
            ].some((v) => v)
          })
        })

      if (arr.length > 300 && !search) {
        arr = arr.slice(0, 300)
      }

      return arr
    })

    const popularTags = computed(() => {
      return Object.keys(tags.value)
        .map((tag) => tags.value[tag].length > 15 && { tag, icons: tags.value[tag].length })
        .filter((tag) => tag)
    })

    function getIcon(name: string) {
      const icon = icons.value.find((item) => item.name === name)

      if (!icon) {
        return
      }

      if (copyType.value) {
        icon.copyToClipboard(iconSettings.value)

        notify({
          title: `Copied '${name}' as SVG`,
        })
      } else {
        icon.downloadSvg(iconSettings.value)

        notify({
          title: `Downloaded '${name}' as SVG`,
        })
      }
    }

    return {
      inverseDarkMode,
      getIcon,
      type,
      types,
      search,
      colors,
      copyType,
      filtered,
      popularTags,
      iconSettings,
      size,
      color,
      version: PACKAGE.version,
      iconsCount: iconsJson.length
    }
  }
})
</script>
