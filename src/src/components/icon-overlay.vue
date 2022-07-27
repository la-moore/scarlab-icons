<template>
  <TransitionRoot as="template" :show="isOpen">
    <Dialog as="div" class="relative z-50" @close="$emit('close')">
      <TransitionChild as="template" enter="ease-in-out duration-500" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in-out duration-500" leave-from="opacity-100" leave-to="opacity-0">
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-hidden">
        <div class="absolute inset-0 overflow-hidden">
          <div class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
            <TransitionChild as="template" enter="transform transition ease-in-out duration-500" enter-from="translate-x-full" enter-to="translate-x-0" leave="transform transition ease-in-out duration-500" leave-from="translate-x-0" leave-to="translate-x-full">
              <DialogPanel class="pointer-events-auto w-screen max-w-md">
                <div class="flex h-full flex-col overflow-y-auto border-gray-200 dark:bg-gray-800 py-6 shadow-xl">
                  <div class="px-4 sm:px-6">
                    <div class="flex items-center justify-between">
                      <div class="dark:text-gray-100">
                        {{ icon?.name }}
                      </div>

                      <div class="ml-3 flex h-7 items-center">
                        <BaseButtonIcon
                          class="ml-auto text-gray-700 rounded-md bg-white hover:bg-gray-200 dark:text-white dark:bg-gray-800 dark:hover:bg-gray-900"
                          @click="$emit('close')"
                        >
                          <XAltIcon />
                        </BaseButtonIcon>
                      </div>
                    </div>
                  </div>
                  <div class="relative mt-6 flex-1 px-6 space-y-3">
                    <div class="relative bg-gray-200 dark:bg-gray-900 -mx-6">
                      <div class="absolute inset-0 flex justify-center items-center">
                        <svg
                          class="border border-current text-gray-800 border-gray-300 dark:border-gray-800"
                          height="90"
                          viewBox="0 0 166 166"
                          fill="none"
                          stroke="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9.13025 28.3862H157.186C157.527 28.3862 157.853 28.5214 158.094 28.7622C158.335 29.0029 158.47 29.3294 158.47 29.6699V136.647C158.47 136.987 158.335 137.314 158.094 137.555C157.853 137.795 157.527 137.931 157.186 137.931H9.13025C8.78979 137.931 8.46327 137.795 8.22252 137.555C7.98178 137.314 7.84653 136.987 7.84653 136.647V29.6699C7.84653 29.3294 7.98178 29.0029 8.22252 28.7622C8.46327 28.5214 8.78979 28.3862 9.13025 28.3862V28.3862Z"
                            stroke-width="2"
                          />
                          <path
                            d="M136.647 7.84659H29.6699C28.9609 7.84659 28.3861 8.42133 28.3861 9.13031V157.187C28.3861 157.895 28.9609 158.47 29.6699 158.47H136.647C137.356 158.47 137.931 157.895 137.931 157.187V9.13031C137.931 8.42133 137.356 7.84659 136.647 7.84659Z"
                            stroke-width="2"
                          />
                          <path
                            d="M146.917 18.1164H19.4001C18.6911 18.1164 18.1163 18.6911 18.1163 19.4001V146.917C18.1163 147.626 18.6911 148.2 19.4001 148.2H146.917C147.626 148.2 148.2 147.626 148.2 146.917V19.4001C148.2 18.6911 147.626 18.1164 146.917 18.1164Z"
                            stroke-width="2"
                          />
                          <path
                            d="M83.1583 158.47C124.752 158.47 158.47 124.752 158.47 83.1584C158.47 41.5648 124.752 7.84659 83.1583 7.84659C41.5648 7.84659 7.84653 41.5648 7.84653 83.1584C7.84653 124.752 41.5648 158.47 83.1583 158.47Z"
                            stroke-width="2"
                          />
                          <path
                            d="M83.1584 117.391C102.065 117.391 117.391 102.065 117.391 83.1584C117.391 64.2522 102.065 48.9258 83.1584 48.9258C64.2522 48.9258 48.9257 64.2522 48.9257 83.1584C48.9257 102.065 64.2522 117.391 83.1584 117.391Z"
                            stroke-width="2"
                          />
                          <path
                            d="M1.17972 165.184L165.167 1.16695"
                            stroke-width="2"
                            stroke-linecap="square"
                          />
                          <path
                            d="M165.094 165.09L1.15839 1.17978"
                            stroke-width="2"
                            stroke-linecap="square"
                          />
                          <path
                            d="M59.1955 1.00006V165.317"
                            stroke-width="2"
                            stroke-linecap="square"
                          />
                          <path
                            d="M83.1584 1.00006V165.317"
                            stroke-width="2"
                            stroke-linecap="square"
                          />
                          <path
                            d="M107.155 1.00006V165.317"
                            stroke-width="2"
                            stroke-linecap="square"
                          />
                          <path
                            d="M165.201 59.1956H1"
                            stroke-width="0.0855816"
                            stroke-linecap="square"
                          />
                          <path
                            d="M165.201 83.1584H1"
                            stroke-width="0.0855816"
                            stroke-linecap="square"
                          />
                          <path
                            d="M165.201 107.121H1"
                            stroke-width="2"
                            stroke-linecap="square"
                          />
                        </svg>
                      </div>
                      <div class="flex justify-center items-center h-40 space-x-3 text-gray-700 dark:text-gray-200">
                        <div
                          class="relative"
                          :style="{ height: `${size}px`, width: `${size}px` }"
                        >
                          <div
                            :key="[size, strokeWidth].join('-')"
                            v-html="icon.toSvg({ width: '100%', height: '100%', 'stroke-width': strokeWidth })"
                          />
                        </div>
                      </div>
                    </div>

                    <nav class="flex space-x-3">
                      <div
                        class="cursor-pointer w-full inline-flex justify-center items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded text-gray-200 bg-gray-700 hover:bg-gray-600"
                        @click="() => icon.copyToClipboard(iconSettings)"
                      >
                        Copy
                      </div>
                      <div
                        class="cursor-pointer w-full inline-flex justify-center items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded text-gray-200 bg-gray-700 hover:bg-gray-600"
                        @click="() => icon.downloadSvg(iconSettings)"
                      >
                        Download
                      </div>
                    </nav>

                    <div class="space-y-3">
                      <div class="flex items-center justify-between">
                        <dt class="text-sm font-medium text-gray-500 dark:text-gray-400">
                          Name:
                        </dt>
                        <dd class="mt-1 text-sm text-gray-700 dark:text-white">
                          <div class="px-2 text-xs font-medium">
                            {{ pascalize(icon?.name) }}
                          </div>
                        </dd>
                      </div>
                      <div v-if="sameIcons.length > 0">
                        <dt class="text-sm font-medium text-gray-500 dark:text-gray-400">
                          Type:
                        </dt>
                        <dd class="mt-1 text-sm text-gray-700 dark:text-white">
                          <nav class="flex space-x-2">
                            <template
                              v-for="(item, idx) in sameIcons"
                              :key="idx"
                            >
                              <div
                                class="cursor-pointer w-full inline-flex justify-center items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded"
                                :class="[
                                  icon?.type === item.type ? 'text-white bg-orange-500 hover:bg-orange-600' : 'text-gray-200 bg-gray-700 hover:bg-gray-600'
                                ]"
                                @click="$emit('select', item)"
                              >
                                {{ item.type }}
                              </div>
                            </template>
                          </nav>
                        </dd>
                      </div>
                      <div class="">
                        <dt class="text-sm font-medium text-gray-500 dark:text-gray-400">
                          Size:
                        </dt>
                        <dd class="mt-1 text-sm text-gray-700 dark:text-white">
                          <nav class="grid gap-2 grid-cols-4 md:grid-cols-8">
                            <template
                              v-for="(item, idx) in [96, 72, 56, 44, 32, 24, 16, 12]"
                              :key="idx"
                            >
                              <div
                                class="cursor-pointer w-full inline-flex justify-center items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded"
                                :class="[
                                  size === item ? 'text-white bg-orange-500 hover:bg-orange-600' : 'text-gray-200 bg-gray-700 hover:bg-gray-600'
                                ]"
                                @click="size = item"
                              >
                                {{ item }}
                              </div>
                            </template>
                          </nav>
                        </dd>
                      </div>
                      <div v-if="icon?.tags.length > 0">
                        <dt class="text-sm font-medium text-gray-500 dark:text-gray-400">
                          Tags:
                        </dt>
                        <dd class="mt-1 text-sm text-gray-900 dark:text-gray-200 -mx-1">
                          <template
                            v-for="(tag, idx) in icon?.tags"
                            :key="idx"
                          >
                            <div class="p-1 inline-block">
                              <div
                                class="cursor-pointer text-gray-200 bg-gray-700 hover:bg-gray-600 inline-flex justify-center items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded"
                                @click="$emit('search', tag)"
                              >
                                {{ tag }}
                              </div>
                            </div>
                          </template>
                        </dd>
                      </div>
                      <div v-if="relatedIcons.length > 0">
                        <dt class="text-sm font-medium text-gray-500 dark:text-gray-400">
                          Related Icons:
                        </dt>
                        <dd class="mt-1 text-sm text-gray-900 dark:text-gray-200">
                          <div class="grid grid-cols-4 gap-3">
                            <template
                              v-for="(item, idx) in relatedIcons"
                              :key="idx"
                            >
                              <div
                                class="bg-gray-200 dark:bg-gray-900 cursor-pointer rounded-xl flex items-center justify-center py-8"
                                @click="$emit('show', item)"
                              >
                                <div
                                  :key="[size, strokeWidth].join('-')"
                                  v-html="item.toSvg({ width: 24, height: 24 })"
                                />
                              </div>
                            </template>
                          </div>
                        </dd>
                      </div>
                      <!--                      <div v-if="icon?.type === 'outline'">-->
                      <!--                        <dt class="text-sm font-medium text-gray-500 dark:text-gray-400">-->
                      <!--                          Stroke Width:-->
                      <!--                        </dt>-->
                      <!--                        <dd class="mt-1 text-sm text-gray-700 dark:text-white">-->
                      <!--                          <nav class="flex space-x-3">-->
                      <!--                            <template-->
                      <!--                              v-for="(item, idx) in [1, 2, 3]"-->
                      <!--                              :key="idx"-->
                      <!--                            >-->
                      <!--                              <div-->
                      <!--                                class="cursor-pointer w-full inline-flex justify-center items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded"-->
                      <!--                                :class="[-->
                      <!--                                  strokeWidth === item ? 'text-white bg-orange-500 hover:bg-orange-600' : 'text-gray-200 bg-gray-700 hover:bg-gray-600'-->
                      <!--                                ]"-->
                      <!--                                @click="strokeWidth = item"-->
                      <!--                              >-->
                      <!--                                {{ item }}-->
                      <!--                              </div>-->
                      <!--                            </template>-->
                      <!--                          </nav>-->
                      <!--                        </dd>-->
                      <!--                      </div>-->
                    </div>
                  </div>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import { pascalize } from '/~/utils'
import { useIcons } from '/~/state/icons'
import { XAltIcon } from '@scarlab-icons/vue/outline'
import BaseButtonIcon from '/~/components/button/button-icon.vue'
import { Dialog, DialogPanel, TransitionChild, TransitionRoot } from '@headlessui/vue'
// import CodeBlock from '/~/components/code-block.vue'

export default defineComponent({
  name: 'IconOverlay',
  components: {
    Dialog, DialogPanel, TransitionChild, TransitionRoot,
    BaseButtonIcon,
    XAltIcon,
    // CodeBlock
  },
  props: {
    isOpen: {
      type: Boolean,
      default: false,
    },
    iconName: {
      type: String,
      default: undefined,
    },
    iconType: {
      type: String,
      default: undefined,
    }
  },
  emits: ['close', 'show', 'search'],
  setup(props, ctx) {
    const { icons } = useIcons()

    const overlay = ref(undefined)
    const size = ref(96)
    const strokeWidth = ref(2)

    const icon = computed(() => {
      return icons.value
        .find((item) => {
          return item.name === props.iconName && item.type === props.iconType
        })
    })
    const relatedIcons = computed(() => {
      return icons.value
        .filter((item) => {
          return item.tags.some((v) => icon.value?.tags.includes(v))
        })
        .filter((item) => {
          return item.name !== icon.value?.name && item.type !== icon.value?.type
        })
    })
    const sameIcons = computed(() => {
      return icons.value
        .filter((item) => {
          return item.name === icon.value?.name
        })
    })
    const iconSettings = computed(() => {
      return {
        height: size.value,
        width: size.value,
        'stroke-width': strokeWidth.value
      }
    })

    function open() {
      overlay.value.target('open')
    }

    function close() {
      overlay.value.target('close')
    }

    function search(tag) {
      close()

      ctx.emit('search', tag)
    }

    return {
      size,
      icon,
      overlay,
      strokeWidth,
      relatedIcons,
      sameIcons,
      iconSettings,
      open,
      close,
      search,
      pascalize
    }
  }
})
</script>
