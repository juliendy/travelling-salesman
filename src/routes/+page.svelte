<script>
	import Travel from '$lib/components/Travel/Travel.svelte';

	import Header from '$lib/components/sections/home/Header.svelte';
	import House from '$lib/components/sections/home/House.svelte';
	import Finish from '$lib/components/sections/home/Finish.svelte';
	3;

	// stores
	import { positionSalesman, targetCamera } from '$lib/stores/store';
	import { start, finish } from '$lib/stores/store';
	import { houses, currentHouse, sales } from '$lib/stores/store';

	const nextHouse = (e) => {
		// update sales
		const answerId = e.target.dataset.id;
		sales.update((v) => v + $houses[$currentHouse].answers[answerId].amount);
		// update house and position
		if ($currentHouse < $houses.length - 1) {
			currentHouse.update((v) => v + 1);
			positionSalesman.set($houses[$currentHouse].salesManPosition);
			targetCamera.set($houses[$currentHouse].cameraPosition);
		} else if ($currentHouse === $houses.length - 1) {
			positionSalesman.set(0);
			targetCamera.set(0);
			finish.set(true);
		}
	};
	const startHandler = () => {
		positionSalesman.set($houses[$currentHouse].salesManPosition);
		targetCamera.set($houses[$currentHouse].cameraPosition);
		start.set(true);
		camY.set(30)
	};
</script>

<svelte:head>
	<title>The Travelling Salesman</title>
	<meta
		name="description"
		content="A fun little GFX project created with Svelte/SvelteKit, plus the Threlte/Three.js WebGL libraries."
	/>
</svelte:head>

<div class="page-wrapper">
	{#if !$start}
		<Header on:click={startHandler} />
	{:else if $finish}
		<Finish />
	{:else}
		<House
			houseId={$houses[$currentHouse].id}
			description={$houses[$currentHouse].question}
			answers={$houses[$currentHouse].answers}
			on:click={nextHouse}
		/>
	{/if}
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
