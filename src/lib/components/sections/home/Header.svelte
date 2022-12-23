<script>
	import Section from '$lib/components/sections/home/Section.svelte';
	
	import Button from '$lib/components/UI/Button.svelte';
	import iconMouse from '$lib/images/icons/icon-mouse.svg';
</script>

<Section>
	<h1>The Travelling Salesman</h1>
	<h2>
		A fun little GFX project created with Svelte/SvelteKit, plus the Threlte/Three.js WebGL
		libraries.
	</h2>
	<Button label="Start the game" on:click icon={iconMouse} />
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