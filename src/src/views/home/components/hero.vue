<template>
  <div class="overflow-hidden shadow-xl">
    <div class="relative">
      <div class="relative px-6 bg-orange-600 overflow-hidden shadow-xl sm:px-12">
        <div
          aria-hidden="true"
          class="absolute inset-0 -mt-72 sm:-mt-32 md:mt-0"
        >
          <svg
            class="absolute inset-0 h-full w-full"
            preserveAspectRatio="xMidYMid slice"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 1463 360"
          >
            <path
              class="text-orange-500 text-opacity-40"
              fill="currentColor"
              d="M-82.673 72l1761.849 472.086-134.327 501.315-1761.85-472.086z"
            />
            <path
              class="text-orange-700 text-opacity-40"
              fill="currentColor"
              d="M-217.088 544.086L1544.761 72l134.327 501.316-1761.849 472.086z"
            />
          </svg>
        </div>

        <div class="relative grid lg:grid-cols-2">
          <div class="pt-10 lg:py-20 lg:px-6 my-auto">
            <div class="">
              <h2 class="text-3xl font-medium text-white tracking-tight sm:text-4xl">
                More than
                <b class="font-bold">
                  2800
                </b>
                custom icons available for you, organized and for free.
              </h2>
              <p class="mt-6 max-w-2xl text-lg text-orange-200">
                width • replace • round • outlined • filled • ghosted • circled • squared
              </p>
            </div>
            <div class="mt-12 flex space-x-3">
              <a
                href="https://github.com/la-moore/scarlab-icons"
                target="_blank"
              >
                <button
                  type="submit"
                  class="inline rounded-md border border-transparent px-5 py-3 bg-orange-500 text-base font-medium text-white shadow hover:bg-orange-400 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600 sm:px-10"
                >
                  Get started
                </button>
              </a>

              <a
                href="https://www.figma.com/community/file/1051907827478622063"
                target="_blank"
              >
                <button
                  type="submit"
                  class="inline rounded-md border border-transparent px-5 py-3 border-white text-base font-medium text-white hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600 sm:px-10"
                >
                  Open In Figma
                </button>
              </a>
            </div>
          </div>
          <div class="mt-auto pt-10 lg:pt-20 lg:order-first">
            <div class="w-full max-w-sm mx-auto">
              <div class="bg-white shadow-2xl text-gray-800 rounded-t-2xl overflow-hidden">
                <div class="flex">
                  <div class="w-20 self-stretch bg-gray-100 shrink-0 border-r flex flex-col items-center py-3">
                    <BaseButtonIcon class="h-12 w-12 text-gray-700 bg-gray-100 rounded-md bg-white hover:bg-gray-200">
                      <AppsIcon />
                    </BaseButtonIcon>
                    <BaseButtonIcon class="h-12 w-12 text-gray-700 bg-gray-100 rounded-md bg-white hover:bg-gray-200">
                      <ChatIcon />
                    </BaseButtonIcon>
                    <BaseButtonIcon class="h-12 w-12 text-gray-700 bg-gray-100 rounded-md bg-white hover:bg-gray-200">
                      <DatabaseIcon />
                    </BaseButtonIcon>

                    <BaseButtonIcon class="mt-auto h-12 w-12 text-gray-700 bg-gray-100 rounded-md bg-white hover:bg-gray-200">
                      <CogIcon />
                    </BaseButtonIcon>
                  </div>
                  <div class="flex-1 py-3 space-y-3 pb-24">
                    <div class="px-3">
                      <div class="relative">
                        <div class="w-12 flex justify-center items-center h-full absolute pointer-events-none">
                          <SearchIcon class="w-4 h-4 opacity-50" />
                        </div>

                        <input
                          type="text"
                          class="pl-12 px-3 appearance-none h-10 w-full bg-gray-100 border rounded-md focus:outline-0"
                          placeholder="Search..."
                        >
                      </div>
                    </div>
                    <div class="flex flex-col px-3 space-y-1">
                      <div
                        v-for="(item, idx) in menu"
                        :key="idx"
                        class="cursor-pointer px-3 inline-flex items-center mt-auto h-12 w-full text-gray-700 bg-white rounded-md"
                        :class="[
                          activeItem === idx ? 'bg-gray-100 hover:bg-gray-200' : 'bg-white hover:bg-gray-100'
                        ]"
                        @click="activeItem = idx"
                      >
                        <component :is="activeItem === idx ? item.icon[1] : item.icon[0]" />
                        <div class="ml-3 font-medium">
                          {{ item.label }}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { CogIcon, SearchIcon } from '@scarlab-icons/vue/outline'
import { DatabaseIcon, ChatIcon, AppsIcon } from '@scarlab-icons/vue/solid'
import {
  GhostHome, SolidHome,
  GhostChartBarSquare, SolidChartBarSquare,
  GhostInbox, SolidInbox,
  GhostCalendar, SolidCalendar,
  GhostFolder, SolidFolder,
  GhostUsers, SolidUsers
} from '@scarlab-icons/vue'
import BaseButtonIcon from '/~/components/button-icon.vue'

export default defineComponent({
  name: 'HomeHero',
  components: {
    CogIcon,
    AppsIcon,
    ChatIcon,
    SearchIcon,
    DatabaseIcon,
    BaseButtonIcon
  },
  setup() {
    const activeItem = ref(0)

    const menu = ref([
      {
        icon: [GhostHome, SolidHome],
        label: 'Dashboard',
      },
      {
        icon: [GhostUsers, SolidUsers],
        label: 'Team',
      },
      {
        icon: [GhostFolder, SolidFolder],
        label: 'Projects',
      },
      {
        icon: [GhostCalendar, SolidCalendar],
        label: 'Calendar',
      },
      {
        icon: [GhostInbox, SolidInbox],
        label: 'Documents',
      },
      {
        icon: [GhostChartBarSquare, SolidChartBarSquare],
        label: 'Reports',
      },
    ])

    return {
      menu,
      activeItem
    }
  }
})
</script>
