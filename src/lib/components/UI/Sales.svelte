<script>
	import iconRestart from '$lib/images/icons/icon-restart.svg';
	export let sales = 0;
</script>

<div>
	<div class="sales">👱🏽‍♂️ Sales: {sales} 💰</div>
	<div class="restart">
		<button on:click>
			<img src={iconRestart} alt="Restart" />
			<span>Restart</span>
		</button>
	</div>
</div>

<style>
	div {
		position: relative;
	}
	.sales {
		font-family: 'IBM Plex Mono', monospace;
		font-weight: 700;
		text-transform: uppercase;
	}
	.restart {
		position: absolute;
		top: 2rem;
	}
	.restart > button {
		all: unset;
		background-color: black;
		color: white;
		display: flex;
		align-items: center;
		gap: 0.5rem;
		padding: 0.5rem 1rem;
		font-weight: 500;
		text-transform: uppercase;
	}
</style>