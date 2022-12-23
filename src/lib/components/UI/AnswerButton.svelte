<script>
	export let label = '';
	export let emoji = '';
</script>

<button on:click>
	<span>
		{label}
	</span>
	<span>
		{emoji}
	</span>
</button>

<style>
	button {
		all: unset;
		border-bottom: 2px solid black;
		background-color: #ffffff88;
		padding: 0.5rem 0.5rem;
		color: black;
		font-weight: 500;
	}
</style>