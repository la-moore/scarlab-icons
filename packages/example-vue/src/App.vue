<script setup lang="ts">
import { GhostTrash, OutlineTrash, SolidTrash } from '@scarlab-icons/vue'
</script>

<template>
  <GhostTrash width="300" height="300" color="white" />
  <OutlineTrash width="300" height="300" color="white" />
  <SolidTrash width="300" height="300" color="white" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
