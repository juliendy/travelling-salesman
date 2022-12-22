<script>
	import Travel from '$lib/components/Travel/Travel.svelte';
</script>

<svelte:head>
	<title>Travelling Salesman</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<div>
	<section>
		<h1>A Travelling Salesman</h1>
		<h2>A Svelte, SvelteKit and Threlte (Threejs) demo project</h2>
	</section>

	<div class="canvas-wrapper">
		<Travel />
	</div>
</div>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
		position: absolute;
	}

	div {
		position: relative;
	}

	.canvas-wrapper {
		position: fixed;
		height: 100vh;
		width: 100vw;
		top: 0;
		left: 0;
	}

	h1 {
		width: 100%;
	}
</style>
