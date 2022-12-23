<script>
	import Travel from '$lib/components/Travel/Travel.svelte';

	import Header from '$lib/components/sections/home/Header.svelte';
	import House from '$lib/components/sections/home/House.svelte';

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
		<House houseId={1} description="Seems like and old lady lives here. What will you try to sell?" />
	<div class="canvas-wrapper">
		<Travel />
	</div>
</div>

<style>
	.page-wrapper {
		position: relative;
		display: flex;
		flex-direction: column;
	}

	.canvas-wrapper {
		position: fixed;
		height: 100vh;
		width: 100vw;
		top: 0;
	}
</style>
