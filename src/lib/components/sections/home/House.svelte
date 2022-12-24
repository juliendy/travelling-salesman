<script>
	import Section from '$lib/components/sections/home/Section.svelte';
	import AnswerButton from '$lib/components/UI/AnswerButton.svelte';


	export let houseId = '00';
	export let description = '';
    
	export let answers =[{ answer: '', icon: '' }]
</script>

<Section>
	<h1>House {houseId}</h1>
	<h2>{description}</h2>
	<div>
		{#each answers as a, i}
			<AnswerButton on:click label={a.answer} emoji={a.icon} id={i} />
		{/each}
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