<template>
  <div class="min-h-screen bg-white dark:bg-gray-900">
    <SideBar />

    <div class="md:pl-72 flex flex-col flex-1">
      <main class="flex-1 text-gray-700 dark:text-gray-200">
        <MainHeader />

        <RouterView />
      </main>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useMenu } from '/~/state/menu'
import SideBar from './components/side-bar.vue'
import MainHeader from './components/main-header.vue'

export default defineComponent({
  name: 'LayoutMain',
  components: {
    SideBar,
    MainHeader,
  },
  setup() {
    const { openMenu } = useMenu()

    return {
      openMenu,
    }
  }
})
</script>
