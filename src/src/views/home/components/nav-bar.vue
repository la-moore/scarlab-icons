<template>
  <div class="flex px-12 h-14 items-center">
    <div class="flex items-end">
      <div class="flex items-center">
        <div
          class="h-5 w-5 text-orange-500"
          v-html="logoSm"
        />

        <div class="px-3 text-lg font-bold leading-4">
          Scarlab Icons
        </div>
      </div>

      <div class="text-xs">
        v{{ version }}
      </div>
    </div>

    <div class="flex-1" />

    <div class="flex items-center">
      <a
        href="https://github.com/la-moore/scarlab-icons"
        target="_blank"
      >
        <BaseButtonIcon class="h-10 w-10 text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300 dark:text-white dark:bg-gray-800 dark:hover:bg-gray-700">
          <GithubIcon />
        </BaseButtonIcon>
      </a>

      <BaseButtonIcon
        class="h-10 w-10 text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300 dark:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
        @click="inverseDarkMode"
      >
        <SunIcon />
      </BaseButtonIcon>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { GithubIcon, SunIcon } from '@scarlab-icons/vue/outline'
import { useDarkMode } from '/~/state/dark-mode'
import BaseButtonIcon from '/~/components/button-icon.vue'
import logoSm from '/~/assets/logo.svg?raw'
import PACKAGE from '@scarlab-icons/icons/package.json'

export default defineComponent({
  name: 'NavBar',
  components: {
    GithubIcon,
    SunIcon,
    BaseButtonIcon
  },
  setup() {
    const { inverseDarkMode } = useDarkMode()

    return {
      logoSm,
      inverseDarkMode,
      version: PACKAGE.version
    }
  }
})
</script>
