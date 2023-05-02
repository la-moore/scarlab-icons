<script lang="ts">
  import GhostTrash from '@scarlab-icons/svelte/ghost/trash.svelte'
  import OutlineTrash from '@scarlab-icons/svelte/outline/trash.svelte'
  import SolidTrash from '@scarlab-icons/svelte/solid/trash.svelte'
  import svelteLogo from './assets/svelte.svg'
  import viteLogo from '/vite.svg'
  import Counter from './lib/Counter.svelte'
</script>

<main>
  <div>
    <GhostTrash width="300" height="300" color="white" />
    <OutlineTrash width="300" height="300" color="white" />
    <SolidTrash width="300" height="300" color="white" />
  </div>
</main>

<style>
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  }
  .read-the-docs {
    color: #888;
  }
</style>
