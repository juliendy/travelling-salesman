<script>
	import Nav from '$lib/components/UI/Nav.svelte';
	import Sales from './Sales.svelte';
	
	import iconBurger from '$lib/images/icons/icon-burger.svg';

	let showMenu = false;
	const handleClick = () => (showMenu = !showMenu);
</script>

<header>
	<Sales />
	<h2><strong>Under Construction</strong></h2>
	<button on:click={handleClick}><img src={iconBurger} alt="Burger" /></button>
	<Nav {showMenu} on:click={handleClick} />
</header>

<style>
	header {
		position: fixed;
		top: 0;
		right: 0;
		display: flex;
		width: calc(100% - 2rem);
		justify-content: space-between;
		align-items: center;
		z-index: 999;
		padding: 1rem;
		background-color: #739368dd;
	}
	button {
		all: unset
	}
</style>
