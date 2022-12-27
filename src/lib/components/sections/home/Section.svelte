<section>
	<slot />
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		align-items: flex-start;
		gap: 2rem;
		z-index: 100;
		height: calc(80vh - 2rem);
		padding: var(--container-margin);
		/* pointer-events: none; */
	}
</style>