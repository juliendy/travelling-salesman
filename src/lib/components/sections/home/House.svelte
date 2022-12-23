<script>
	import Section from '$lib/components/sections/home/Section.svelte';
	import AnswerButton from '$lib/components/UI/AnswerButton.svelte';

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
	<div>
		<AnswerButton on:click={clickHandler} label="Woolen socks" emoji="🧦" />
		<AnswerButton on:click={clickHandlerBack} label="Toilet paper" emoji="🧻" />
	</div>
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

	div {
		display: inline-flex;
		gap: 0.5rem;
	}
</style>