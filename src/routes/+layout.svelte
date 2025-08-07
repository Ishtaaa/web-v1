<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import Header from '$lib/assets/Header.svelte';

	let { children } = $props();
</script>
<svelte:head>
  <link rel="icon" type="image/svg+xml" href={favicon} />
</svelte:head>

<!-- Full-page vertical layout -->
<div class="flex min-h-screen flex-col">
  <!-- Top navigation -->
  <Header />

  <!-- Page content fills the space between header and footer -->
  <main class="flex-1 pt-0">
    <slot />
  </main>

  <footer class="text-sm text-darkgreen-500 bg-beige-500 p-10"> © Ishta Mahadew 2025 </footer>
</div>
