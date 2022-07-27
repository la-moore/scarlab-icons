<template>
  <div
    v-visibility="(value) => isVisible = value"
    class="group p-1 rounded-xl"
    :class="[
      isVisible && 'hover:bg-gradient-to-br from-orange-600 to-orange-400'
    ]"
  >
    <div class="h-36 relative">
      <transition
        enter-active-class="transition ease-in-out"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition ease-in-out"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div
          v-if="isVisible"
          class="h-full bg-gray-200 text-gray-700 rounded-lg flex flex-col items-center justify-center dark:bg-gray-800 dark:text-white"
        >
          <div class="text-gray-500 dark:text-gray-300 flex-1 flex items-center">
            <slot />
          </div>

          <div class="pb-2 w-full">
            <div
              v-if="title"
              class="text-center text-xs px-2"
            >
              {{ title }}
            </div>

            <nav class="flex space-x-1 mt-2 px-2 opacity-0 group-hover:opacity-100">
              <BaseButton
                class="w-full"
                look="text-gray-600 bg-gray-200 hover:bg-gray-300 dark:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
                size="xs"
                @click="$emit('show')"
              >
                <EyeIcon class="w-4 h-4" />
              </BaseButton>

              <BaseButton
                class="w-full"
                look="text-gray-600 bg-gray-200 hover:bg-gray-300 dark:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
                size="xs"
                @click="$emit('copy')"
              >
                <DuplicateIcon class="w-4 h-4" />
              </BaseButton>

              <BaseButton
                class="w-full"
                look="text-gray-600 bg-gray-200 hover:bg-gray-300 dark:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
                size="xs"
                @click="$emit('download')"
              >
                <DocumentDownloadIcon class="w-4 h-4" />
              </BaseButton>
            </nav>
          </div>
        </div>
      </transition>
      <div
        v-if="!isVisible"
        class="opacity-0 absolute"
      >
        {{ title }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useDarkMode } from '/~/state/dark-mode'
import { EyeIcon, DuplicateIcon, DocumentDownloadIcon } from '@scarlab-icons/vue/dist/solid'

export default defineComponent({
  name: 'IconTile',
  components: {
    EyeIcon,
    DuplicateIcon,
    DocumentDownloadIcon
  },
  props: {
    title: {
      type: String,
      default: '',
    }
  },
  emits: ['show', 'copy', 'download'],
  setup() {
    const isVisible = ref(false)
    const { darkMode } = useDarkMode()

    return {
      isVisible,
      darkMode
    }
  }
})
</script>
