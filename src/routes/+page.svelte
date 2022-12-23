<script>
	import Travel from '$lib/components/Travel/Travel.svelte';
	import Header from '$lib/components/sections/home/Header.svelte';
</script>

<svelte:head>
	<title>The Travelling Salesman</title>
	<meta
		name="description"
		content="A fun little GFX project created with Svelte/SvelteKit, plus the Threlte/Three.js WebGL libraries."
	/>
</svelte:head>

<div class="page-wrapper">
	<Header />
	<div class="canvas-wrapper">
		<Travel />
	</div>
</div>

<style>
	.page-wrapper {
		position: relative;
		display: flex;
	}

	.canvas-wrapper {
		position: fixed;
		height: 100vh;
		width: 100vw;
		top: 0;
	}
</style>
