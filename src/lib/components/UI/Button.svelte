<script>
	export let label = 'Label';
	export let icon = '';
</script>

<button on:click>
	<span>
		{label}
	</span>
	{#if icon.length > 0}
		<img src={icon} alt="Icon" />
	{/if}
</button>

<style>
	button {
		all: unset;
		position: relative;
		background-color: white;
		border: 2px solid black;
		padding: 1rem;
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 0.5rem;
	}
	button::after {
		content: '';
		position: absolute;
		display: block;
		width: 100%;
		height: 100%;
		top: 0.5rem;
		left: 0.5rem;
		background-color: #f4b71f;
		z-index: -1;
	}
	span {
		font-weight: 700;
	}
	img {
		height: 1rem;
	}
</style>