<script>
	import Header from '$lib/components/UI/Header.svelte';
	import Footer from '$lib/components/UI/Footer.svelte';
	import './styles.css';
</script>

<div class="app">
	<Header />

	<main>
		<slot />
	</main>
	<Footer />
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		display: flex;
		width: 100%;
		box-sizing: border-box;
		flex: 1;
	}
</style>
