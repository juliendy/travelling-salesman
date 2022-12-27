<script>
	import iconTwitter from '$lib/images/icons/icon-twitter.svg';
	import iconInstagram from '$lib/images/icons/icon-instagram.svg';
</script>

<footer>
	<a href="https://twitter.com/eggsandbread" target="_blank" rel="noreferrer noopener">
		<img src={iconTwitter} alt="Twitter" />
	</a>
	<a
		href="https://www.instagram.com/pratertell/"
		target="_blank"
		rel="noreferrer noopener"
	>
		<img src={iconInstagram} alt="Instagram" />
	</a>
</footer>

<style>
	footer {
		position: fixed;
		bottom: 0;
		right: 0;
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: flex-end;
		align-items: center;
		gap: 0.5rem;
		padding: 1rem;
		z-index: 100;
	}
	@media (min-width: 480px) {}
</style>
