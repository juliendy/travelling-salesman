<script>
	import { page } from '$app/stores';

	import iconCross from '$lib/images/icons/icon-menu-cross.svg';
	import iconTwitter from '$lib/images/icons/icon-twitter.svg';
	import iconInstagram from '$lib/images/icons/icon-instagram.svg';

	export let showMenu = false;
</script>

<div class="nav-wrapper" class:showMenu>
	<section class="buttons">
		<div class="social-links">
			<a href="https://twitter.com/pratertell" target="_blank" rel="noreferrer noopener">
				<img src={iconTwitter} alt="Twitter" />
			</a>
			<a
				href="https://www.instagram.com/pratertell/"
				target="_blank"
				rel="noreferrer noopener"
			>
				<img src={iconInstagram} alt="Instagram" />
			</a>
		</div>
		<button on:click>
			<img src={iconCross} alt="Cross" />
		</button>
	</section>
	<nav>
		<h1>The Travelling Salesman</h1>
		<ul>
			<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
				<a href="/">Home</a>
			</li>
			<li aria-current={$page.url.pathname === '/about' ? 'page' : undefined}>
				<a href="/about">About</a>
			</li>
			<li>
				<a href="https://github.com">Github</a>
			</li>
		</ul>
	</nav>
	<!-- created by -->
	<section>
		<h1>Created by:</h1>
		<ul>
			<li>juliendy</li>
			<li>2022</li>
		</ul>
	</section>
</div>

<style>
	.nav-wrapper {
		position: absolute;
		top: -30rem;
		right: -1rem;
		display: flex;
		flex-direction: column;
		gap: 2rem;
		padding: 2rem;
		width: calc(100vw - 4rem);
		background-color: white;
		transition: top 200ms ease-in-out;
	}
	.showMenu {
		top: -1rem;
	}

	/* social media and close button */
	.buttons {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}
	.social-links {
		display: inline-flex;
		gap: 0.5rem;
	}
	.social-links > img {
		height: 1.25rem;
	}
	button {
		all: unset;
	}

	/* nav */
	nav {
		display: flex;
		flex-direction: column;
		justify-content: center;
		/* --background: rgba(255, 255, 255, 0.7); */
	}

	h1 {
		font-size: 1rem;
		text-align: left;
		font-weight: 700;
	}

	nav > h1 {
		border-bottom: 0.25rem solid var(--color-orange);
	}
	ul {
		padding: 0;
		margin: 0;
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		list-style: none;
	}
	li {
		position: relative;
		height: 100%;
	}

	a {
		color: black;
	}

	@media only screen and (min-width: 400px) {
		.nav-wrapper {
			width: 15rem;
		}
	}
</style>
