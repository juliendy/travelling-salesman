<script>
	import Nav from '$lib/components/UI/Nav.svelte';
	import iconBurger from '$lib/images/icons/icon-burger.svg';

	let showMenu = false;
	const handleClick = () => (showMenu = !showMenu);
</script>

<header>
	<button on:click={handleClick}><img src={iconBurger} alt="Burger" /></button>
	<Nav {showMenu} on:click={handleClick} />
</header>

<style>
	header {
		position: fixed;
		top: 0;
		right: 0;
		display: flex;
		justify-content: flex-end;
		z-index: 999;
		padding: 1rem;
	}
	button {
		all: unset
	}
</style>
