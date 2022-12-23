<script>
	import Section from '$lib/components/sections/home/Section.svelte';
	import { sales } from '$lib/stores/store';
</script>

<Section>
	<h1>Finish 🏁</h1>
	<h2>Congratulations, your total sales: <span class="bold">$ {$sales}</span></h2>
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
	.bold {
		font-weight: 700;
	}
</style>