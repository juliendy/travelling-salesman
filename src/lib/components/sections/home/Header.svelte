<script>
	import Button from '$lib/components/UI/Button.svelte';
	import iconMouse from '$lib/images/icons/icon-mouse.svg';
</script>

<section>
	<h1>The Travelling Salesman</h1>
	<h2>
		A fun little GFX project created with Svelte/SvelteKit, plus the Threlte/Three.js WebGL
		libraries.
	</h2>
	<Button label="Scroll down" icon={iconMouse} />
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-start;
		/* flex: 1; */
		gap: 2rem;
		/* position: absolute; */
		z-index: 100;
		padding: var(--container-margin);
		/* pointer-events: none; */
	}
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