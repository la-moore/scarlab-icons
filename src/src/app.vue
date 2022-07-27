<template>
  <RouterView />

  <notifications
    width="400px"
    position="bottom right"
  >
    <template #body="{ item }">
      <div class="bg-gray-900 py-3 pr-6 mx-3 mb-1 text-gray-200 rounded-md cursor-pointer">
        <div class="flex items-center">
          <div class="w-12 flex justify-center">
            <CheckAltIcon />
          </div>
          <p class="title">
            {{ item.title }}
          </p>
        </div>
      </div>
    </template>
  </notifications>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { CheckAltIcon } from '@scarlab-icons/vue/dist/outline'

export default defineComponent({
  name: 'App',
  components: {
    CheckAltIcon
  }
})
</script>
