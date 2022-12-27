<script>
	import Nav from '$lib/components/UI/Nav.svelte';
	import Sales from './Sales.svelte';

	import iconBurger from '$lib/images/icons/icon-burger.svg';

	let showMenu = false;
	const handleClick = () => (showMenu = !showMenu);

	// import stores
	import {
		start,
		sales,
		positionSalesman,
		currentHouse,
		finish,
		targetCamera
	} from '$lib/stores/store';

	const restartHandle = () => {
		start.set(false);
		finish.set(false);
		sales.set(0);
		positionSalesman.set(-14);
		currentHouse.set(0);
		targetCamera.set(0);
	};
</script>

<header>
	{#if $start}
		<Sales on:click={restartHandle} sales={$sales} />
	{:else}
		<div class="empty-placeholder" />
	{/if}
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
		all: unset;
	}
</style>
