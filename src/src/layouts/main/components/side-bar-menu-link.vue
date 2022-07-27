<template>
  <div
    class="group cursor-pointer flex items-center px-3 py-2 text-sm font-medium transition"
    :class="[
      isActive ? 'bg-gradient-to-r from-orange-600 to-orange-400 text-white' : 'text-gray-400 hover:text-gray-200 border-transparent'
    ]"
    @click="$router.replace({ query: search ? { search } : {}})"
  >
<!--    <BaseIcon-->
<!--      v-if="icon"-->
<!--      :name="icon"-->
<!--      class="mr-3 flex-shrink-0"-->
<!--    />-->
    <div class="flex-1">
      {{ label }}
    </div>
    <div class="opacity-50">
      {{ badge }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'SideBarMenuLink',
  props: {
    search: {
      type: String,
      default: undefined
    },
    icon: {
      type: String,
      default: undefined
    },
    label: {
      type: String,
      default: undefined
    },
    badge: {
      type: [String, Number],
      default: undefined
    },
  },
  computed: {
    isActive() {
      const { search = '' } = this.$route.query

      return this.search === search
    }
  }
})
</script>
