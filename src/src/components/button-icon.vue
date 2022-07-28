<template>
  <div class="cursor-pointer inline-flex items-center justify-center border border-transparent focus:outline-none">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'BaseButtonIcon'
})
</script>
