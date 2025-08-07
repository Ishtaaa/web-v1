<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import Header from '$lib/assets/Header.svelte';

	let { children } = $props();
</script>
<main>
    {@render children?.()}
</main>
<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>
