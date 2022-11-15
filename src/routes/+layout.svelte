<script lang="ts">
	import { page } from '$app/stores';

	import '../app.css';
</script>

<header>
	<img class="logo" src="images/ICC_Logo.svg" alt="logo" title="ICC logo" />
	<p class="logo-text text">Personnel Management</p>
	<div class="line" />
	<p class="card-text text">Background Check</p>
	<img
		class="card"
		src="images/icons/backgroundcheck.svg"
		alt="id card"
		title="Background Check ID Card"
	/>
	<nav>
		<a
			class="nav-hover-effect"
			class:active={$page.url.pathname === '/backgroundform'}
			href="/backgroundform"
		>
			Background Form
		</a>
		<a
			class="nav-hover-effect"
			class:active={$page.url.pathname === '/backgroundsearch'}
			href="/backgroundsearch"
		>
			SL Tool: Background Search
		</a>
		<a
			class="nav-hover-effect"
			class:active={$page.url.pathname === '/backgroundlist'}
			href="/backgroundlist"
		>
			SL Tool: Background Filled List
		</a>
	</nav>
</header>
<main>
	<slot />
</main>
<footer>
	<p class="footertext">© 2022 - Stichting Eos Dynamic.</p>
</footer>

<style>
	header {
		display: flex;
		grid-area: logo;
		background: var(--background-color-z2);
		width: 100%;
		height: 6.4rem;
		overflow: hidden;
	}
	img {
		max-width: 100%;
		display: block;
		height: auto;
		border: 0;
	}
	.logo {
		position: relative;
		height: 7.9rem;
		margin-top: -0.5rem;
		filter: var(--filter-make-white);
	}
	.card {
		position: relative;
		height: 7.2rem;
		top: -0.8rem;
		left: -1.6rem;
		filter: var(--filter-make-white);
	}
	.text {
		position: relative;
		max-width: 10rem;
		font-size: 1.5rem;
		right: 0.6rem;
		bottom: -1rem;
	}
	.logo-text {
		text-align: right;
	}
	.card-text {
		right: -0.4rem;
	}
	.line {
		border-left: 0.2rem solid var(--white-text-color);
		margin: 0.8rem;
	}
	main {
		grid-area: main;
		box-sizing: border-box;
		background: var(--background-color-z1);
		display: flex;
		height: 100%;
		overflow-y: auto;
		overflow-x: hidden;
		border-top: 0.2rem dashed var(--background-color-z0);
	}
	footer {
		grid-area: footer;
		background: var(--background-color-z2);
		width: 100%;
		font-size: 14px;
	}
	.footertext {
		margin: 0.8rem;
		color: var(--faded-text-color);
	}

	nav {
		font-size: 20px;
	}
	a {
		color: var(--white-text-color);
		text-decoration: none;
	}
	.nav-hover-effect {
		background: linear-gradient(var(--white-text-color) 0 0) no-repeat
			calc(200% - var(--i, 0) * 100%) 100% / 200% calc(100% * var(--i, 0) + 0.2rem);
		transition: 0.3s calc(var(--i, 0) * 0.3s),
			background-position 0.3s calc(0.3s - calc(var(--i, 0) * 0.3s));
	}
	.nav-hover-effect:hover {
		--i: 1;
		color: var(--background-color-z2);
	}
	.active {
		box-shadow: inset 0 -0.2rem 0 0 var(--white-text-color);
	}
</style>
