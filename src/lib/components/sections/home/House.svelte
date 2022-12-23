<script>
	import Section from '$lib/components/sections/home/Section.svelte';

	import { positionSalesman } from '$lib/stores/store';

	export let houseId = 0;
	export let description = '';
    
	const clickHandler = () => {
		positionSalesman.set(8);
	};
	const clickHandlerBack = () => {
		positionSalesman.set(0);
	};
</script>

<Section>
	<h1>House {houseId}</h1>
	<h2>{description}</h2>
	<button on:click={clickHandler}>BACK</button>
	<button on:click={clickHandlerBack}>FORTH</button>
</Section>

<style>
	h1,
	h2 {
		color: white;
		text-align: left;
		margin: 0;
		padding: 0;
		line-height: 1;
	}
	h1 {
		font-family: var(--font-serif);
		width: 100%;
	}
</style>