<script lang="ts">
	import '../app.css';
</script>

<style>
	header {
		display: flex;
		grid-area: logo;
		background: #323846;
		width: 100%;
		height: 64px;
		overflow: hidden;
		transition: 0.4s;
	}
	img {
		max-width: 100%;
		display: block;
		height: auto;
		border: 0;
	}
	.logo {
		position: relative;
		height: 79px;
		margin-top: -5px;
		filter: brightness(0) saturate(100%) invert(87%) sepia(10%) saturate(214%) hue-rotate(185deg)
			brightness(96%) contrast(90%);
	}
	.card {
		position: relative;
		height: 72px;
		top: -8px;
		left: -16px;
		filter: brightness(0) saturate(100%) invert(87%) sepia(10%) saturate(214%) hue-rotate(185deg)
			brightness(96%) contrast(90%);
	}
	.text {
		position: relative;
		max-width: 100px;
		font-size: 15px;
		right: 6px;
		bottom: -10px;
	}
	.logo-text {
		text-align: right;
	}
	.card-text {
		right: -4px;
	}
	.line {
		border-left: 2px solid white;
		margin: 8px;
		filter: brightness(0) saturate(100%) invert(87%) sepia(10%) saturate(214%) hue-rotate(185deg)
			brightness(96%) contrast(90%);
	}
	main {
		grid-area: main;
		display: flex;
		height: 100%;
		overflow-y: auto;
		overflow-x: hidden;
		border-top: 2px dashed #2c3445;
		transition: 0.4s;
	}
	footer {
		grid-area: footer;
	}
</style>

<header>

	<img class="logo" src="images/ICC_Logo.svg" alt="logo" title="ICC logo" />
	<p class="logo-text text">Personnel Management</p>
	<div class="line" />
	<p class="card-text text">Background Check</p>
	<img
		class="card"
		src="images/icons/backgroundcheck.svg"
		alt="id card"
		title="Background Check ID Card" />
</header>
<main>
	<slot />
</main>
<footer>© 2022 - Stichting Eos Dynamic.</footer>
