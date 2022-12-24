<script>
	export let label = '';
	export let emoji = '';
	export let id = 0;
</script>

<button on:click data-id={id}>
	{label}
	{emoji}
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