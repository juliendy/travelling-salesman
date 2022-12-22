<script>
	import iconTwitter from '$lib/images/icons/icon-twitter.svg';
	import iconInstagram from '$lib/images/icons/icon-instagram.svg';
</script>

<footer>
	<img src={iconTwitter} alt="Twitter" />
	<img src={iconInstagram} alt="Instagram" />
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
