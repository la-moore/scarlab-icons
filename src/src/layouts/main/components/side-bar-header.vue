<template>
  <div class="flex-shrink-0 flex flex-col px-4 border-b border-gray-200 text-gray-400 h-20 dark:border-gray-700 dark:text-gray-400">
    <div class="flex items-center flex-1">
      <LogoSm class="h-7 w-7 text-orange-500" />

      <div class="px-3 font-bold leading-4 text-gray-800 dark:text-gray-200">
        Scarlab Icons
      </div>

      <BaseButtonIcon
        class="ml-auto md:hidden text-gray-700 rounded-md bg-white hover:bg-gray-200 dark:text-white dark:bg-gray-800 dark:hover:bg-gray-900"
        @click="closeMenu"
      >
        <XAltIcon />
      </BaseButtonIcon>
    </div>

    <div class="pb-2 flex justify-between">
      <div class="text-xs leading-4">
        v{{ version }}
      </div>

      <div class="text-xs leading-4">
        {{ iconsCount }} icons
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useMenu } from '/~/state/menu'
import LogoSm from '/~/components/logo-sm.vue'
import BaseButtonIcon from '/~/components/button/button-icon.vue'
import icons from '@scarlab-icons/icons/dist/icons.json'
import PACKAGE from '@scarlab-icons/icons/package.json'
import { XAltIcon } from '@scarlab-icons/vue/outline'

export default defineComponent({
  name: 'SideBarHeader',
  components: {
    XAltIcon,
    LogoSm,
    BaseButtonIcon
  },
  setup() {
    const { closeMenu } = useMenu()

    return {
      closeMenu,
      version: PACKAGE.version,
      iconsCount: icons.length
    }
  }
})
</script>
