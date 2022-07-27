<template>
  <TransitionRoot as="template" :show="isVisible">
    <Dialog as="div" class="relative z-50" @close="isVisible = false">
      <TransitionChild as="template" enter="ease-in-out duration-500" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in-out duration-500" leave-from="opacity-100" leave-to="opacity-0">
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-hidden">
        <div class="absolute inset-0 overflow-hidden">
          <div class="pointer-events-none fixed inset-y-0 left-0 flex max-w-full pr-10">
            <TransitionChild
              as="template"
              enter="transform transition ease-in-out duration-500 sm:duration-700"
              enter-from="-translate-x-full"
              enter-to="translate-x-0"
              leave="transform transition ease-in-out duration-500 sm:duration-700"
              leave-from="translate-x-0"
              leave-to="-translate-x-full"
            >
              <DialogPanel class="pointer-events-auto w-screen max-w-md">
                <div class="flex h-full flex-col overflow-y-scroll border-gray-200 dark:bg-gray-800 shadow-xl">
                  <SideBarHeader />

                  <div class="relative mt-6 flex-1">
                    <SideBarMenu />
                  </div>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>

  <!-- Static sidebar for desktop -->
  <div class="hidden md:flex md:w-72 md:flex-col md:fixed md:inset-y-0">
    <div class="flex flex-col flex-grow border-r border-gray-200 bg-gray-100 overflow-y-auto dark:border-gray-700 dark:bg-gray-800">
      <SideBarHeader />

      <div class="flex-grow flex flex-col">
        <SideBarMenu />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useMenu } from '/~/state/menu'
import { useSettings } from '/~/state/settings'
import { XAltIcon } from '@scarlab-icons/vue/outline'
import { Dialog, DialogPanel, TransitionChild, TransitionRoot } from '@headlessui/vue'
import SideBarMenu from './side-bar-menu.vue'
import SideBarHeader from './side-bar-header.vue'
import BaseButtonIcon from '/~/components/button/button-icon.vue'

export default defineComponent({
  name: 'SideBar',
  components: {
    Dialog, DialogPanel, TransitionChild, TransitionRoot,
    BaseButtonIcon,
    XAltIcon,
    SideBarMenu,
    SideBarHeader
  },
  setup() {
    const { isVisible, closeMenu } = useMenu()
    const { size, strokeWidth, color } = useSettings()

    return {
      closeMenu,
      isVisible,
      size,
      strokeWidth,
      color
    }
  }
})
</script>
