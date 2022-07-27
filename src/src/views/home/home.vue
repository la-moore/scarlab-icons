<template>
  <div class="p-3 space-y-3">
    <div class="bg-gray-200 rounded-xl p-3 dark:bg-gray-800">
      <div>npm install scarlab-icons</div>
      <div>npm install @scarlab-icons/icons</div>
      <div>npm install @scarlab-icons/vue</div>
      <div>npm install @scarlab-icons/react</div>
    </div>

    <div class="grid gap-1 grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-8">
      <template
        v-for="(icon, idx) in filtered.slice(0, 100)"
        :key="idx"
      >
        <div
          class="cursor-pointer group rounded-xl h-36 hover:bg-gray-700 flex flex-col items-center py-3"
          @click="() => selectIcon(icon)"
        >
          <div class="text-gray-500 dark:text-gray-300 flex-1 flex items-center justify-center">
            <div v-html="icon.toSvg({ width: size, height: size, color, 'stroke-width': strokeWidth })" />
          </div>
          <div class="text-center text-xs py-3">
            {{ icon.name }}
          </div>
        </div>
      </template>
    </div>
  </div>

  <icon-overlay
    :is-open="isOpen"
    :icon-name="selected?.name"
    :icon-type="selected?.type"
    @search="onSearch"
    @select="selectIcon"
    @show="(icon) => selectIcon(icon, 500)"
    @close="onClose"
  />
</template>

<script lang="ts">
import { useRoute, useRouter } from 'vue-router'
import { defineComponent, ref, computed, onMounted } from 'vue'
import { useSettings } from '/~/state/settings'
import { useIcons } from '/~/state/icons'
import IconTile from '/~/components/icon-tile.vue'
// import CodeBlock from '/~/components/code-block.vue'
import IconOverlay from '/~/components/icon-overlay.vue'

export default defineComponent({
  name: 'IconsGrid',
  components: {
    IconTile,
    // CodeBlock,
    IconOverlay
  },
  setup() {
    const { size, strokeWidth, color } = useSettings()
    const { icons } = useIcons()
    const route = useRoute()
    const router = useRouter()

    const isOpen = ref(false)
    const selected = ref(undefined)
    const overlay = ref(undefined)

    const filtered = computed(() => {
      const search = `${route.query.search || ''}`
      let arr = icons.value

      search
        .split(' ')
        .forEach((word) => {
          arr = arr.filter((item) => {
            return [
              item.type.includes(`${word}`),
              item.name.includes(`${word}`),
              item.tags.some((v) => v.includes(`${word}`)),
            ].some((v) => v)
          })
        })

      return arr
    })

    function selectIcon(icon, timeout = 0) {
      isOpen.value = false

      setTimeout(() => {
        selected.value = icon
        isOpen.value = true
        router.replace({ query: route.query, hash: `#${icon.type}/${icon.name}` })
      }, timeout)
    }

    function onClose() {
      isOpen.value = false
      router.replace({ query: route.query, hash: '' })
    }

    function onSearch(search) {
      isOpen.value = false

      router.replace({
        query: search ? { search } : {}
      })
    }

    onMounted(() => {
      const hash = route.hash.replace('#', '')
      const [iconType, iconName] = hash.split('/')
      const icon = icons.value.find(({ name, type }) => name === iconName && type === iconType)

      if (icon) {
        setTimeout(() => {
          selectIcon(icon)
        }, 400)
      }
    })

    return {
      size,
      isOpen,
      strokeWidth,
      color,
      overlay,
      selected,
      filtered,
      selectIcon,
      onSearch,
      onClose,
    }
  }
})
</script>
