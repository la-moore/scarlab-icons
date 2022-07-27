<template>
  <div class="flex px-3 items-center h-20 border-b border-gray-200 sticky top-0 bg-white z-20 dark:border-gray-700 dark:bg-gray-900">
    <BaseButtonIcon
      class="text-gray-700 rounded-md bg-white hover:bg-gray-200 dark:text-white dark:bg-gray-900 dark:hover:bg-gray-800 md:hidden"
      @click="openMenu"
    >
      <JustifyFillIcon />
    </BaseButtonIcon>

    <div class="w-full flex-1 h-10 px-3 flex md:ml-0">
      <div class="relative w-full text-gray-400 focus-within:text-gray-600">
        <div class="absolute inset-y-0 left-0 flex items-center pointer-events-none">
          <SearchAltIcon class="h-5 w-5" />
        </div>

        <input
          v-model="search"
          class="block bg-transparent w-full h-full pl-8 pr-3 py-2 border-transparent text-gray-200 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-0 focus:border-transparent"
          placeholder="Search"
          type="search"
          name="search"
        >
      </div>
    </div>

    <nav class="flex items-center">
      <a href="https://github.com/la-moore/scarlab-icons" target="_blank">
        <BaseButtonIcon class="text-gray-700 rounded-md bg-white hover:bg-gray-200 dark:text-white dark:bg-gray-900 dark:hover:bg-gray-800">
          <GithubIcon />
        </BaseButtonIcon>
      </a>

      <BaseButtonIcon
        class="text-gray-700 rounded-md bg-white hover:bg-gray-200 dark:text-white dark:bg-gray-900 dark:hover:bg-gray-800"
        @click="inverseDarkMode"
      >
        <SunIcon />
      </BaseButtonIcon>
    </nav>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useMenu } from '/~/state/menu'
import { useDarkMode } from '/~/state/dark-mode'
import { GithubIcon, SearchAltIcon, JustifyFillIcon, SunIcon } from '@scarlab-icons/vue/outline'
import BaseButtonIcon from '/~/components/button/button-icon.vue'

export default defineComponent({
  name: 'MainHeader',
  components: {
    BaseButtonIcon,
    SunIcon,
    GithubIcon,
    SearchAltIcon,
    JustifyFillIcon,
  },
  setup() {
    const { openMenu } = useMenu()
    const { inverseDarkMode } = useDarkMode()
    const router = useRouter()
    const route = useRoute()

    const search = computed({
      get() {
        const { search } = route.query

        return `${search || ''}`
      },
      set(search: string) {
        router.replace({
          query: search ? { search } : {}
        })
      }
    })

    return {
      inverseDarkMode,
      openMenu,
      search,
      router
    }
  }
})
</script>
