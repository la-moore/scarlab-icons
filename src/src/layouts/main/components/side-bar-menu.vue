<template>
  <div class="divide-y">
    <nav class="flex-1 py-2 space-y-1">
      <template
        v-for="(link, idx) in menu"
        :key="idx"
      >
        <SideBarMenuLink
          :search="link.search"
          :icon="link.icon"
          :label="link.label"
        />
      </template>

      <div class="border-t border-gray-200 dark:border-gray-700" />

      <template
        v-for="(icons, idx) in tags"
        :key="idx"
      >
        <SideBarMenuLink
          v-if="icons.length > 4"
          :search="idx"
          :label="idx"
          :badge="icons.length"
        />
      </template>
    </nav>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useMenu } from '/~/state/menu'
import { useTags } from '/~/state/tags'
import SideBarMenuLink from './side-bar-menu-link.vue'

export default defineComponent({
  name: 'SideBarMenu',
  components: {
    SideBarMenuLink
  },
  setup() {
    const { menu } = useMenu()
    const { tags } = useTags()

    return {
      menu,
      tags
    }
  },
})
</script>
