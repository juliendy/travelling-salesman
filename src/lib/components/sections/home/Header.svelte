<script>
	import Section from '$lib/components/sections/home/Section.svelte';
	
	import Button from '$lib/components/UI/Button.svelte';
	import iconMouse from '$lib/images/icons/icon-mouse.svg';
</script>

<Section>
	<h1>The Travelling Salesman</h1>
	<h2>
		A fun little 3d-gfx project created with
		<a href="https://svelte.dev/" target="_blank" rel="noreferrer noopener">Svelte</a>
		/ <a href="https://kit.svelte.dev/" target="_blank" rel="noreferrer noopener">SvelteKit</a>,
		plus the <a href="https://threlte.xyz/" target="_blank" rel="noreferrer noopener">Threlte</a> /
		<a href="https://threejs.org/" target="_blank" rel="noreferrer noopener">Three.js</a> WebGL libraries.
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