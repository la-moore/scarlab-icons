<template>
  <div class="relative group">
    <VueCodeHighlight :language="language">
      <code :class="`language-${language}`">
        <slot />
      </code>
    </VueCodeHighlight>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import VueCodeHighlight from 'vue-code-highlight/src/CodeHighlight.vue'

export default defineComponent({
  name: 'CodeBlock',
  components: {
    VueCodeHighlight
  },
  props: {
    language: {
      type: String,
      default: 'html'
    }
  }
})
</script>
