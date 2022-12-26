<script lang="ts">
	import { slide } from 'svelte/transition';
	let menuOpen = false;
</script>

<header class="header" class:active={menuOpen}>
	<div class="brand">
		<a href="/" class="brand-link">devd.be</a>
	</div>
	<div class="nav-toggle" class:active={menuOpen} on:click={() => (menuOpen = !menuOpen)} />
	{#if menuOpen}
		<div class="nav-container" in:slide out:slide>
			<nav class="nav-menu">
				<a href="/" class="nav-menu-link active">home</a>
				<a href="/" class="nav-menu-link">projects</a>
				<a href="/" class="nav-menu-link">blog</a>
			</nav>
		</div>
	{/if}
</header>

<style lang="scss">
	.header {
		position: relative;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		height: 4rem;
		border-bottom: 1px solid $color-sand-100;
		z-index: 10;

		&.active {
			border-color: $color-coffee;
		}
	}

	.brand-link {
		font-size: xx-large;
		font-weight: 100;
		padding: 0 1rem;
		color: $color-white;
	}

	.nav-toggle {
		position: relative;
		width: 50px;
		height: 50px;
		cursor: pointer;
		display: flex;
		justify-content: center;
		align-items: center;
		transition: 0.2s;

		&.active::before {
			transform: translateY(0) rotate(45deg);
			box-shadow: 0 0 0 $color-white;
		}

		&::before {
			content: '';
			position: absolute;
			width: 28px;
			height: 2px;
			transition: 0.2s;
			background-color: $color-white;
			transform: translateY(-10px);
			box-shadow: 0 10px 0 $color-white;
		}

		&.active::after {
			transform: translateY(0) rotate(-45deg);
		}

		&::after {
			content: '';
			background-color: $color-white;
			position: absolute;
			width: 28px;
			height: 2px;
			transition: 0.2s;
			transform: translateY(10px);
		}
	}

	.nav-container {
		position: fixed;
		top: 4rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: calc(100vh - 4rem);
		width: 100vw;
		background-color: $color-coffee;
		border-bottom: 1px solid $color-sand-100;
	}

	.nav-menu {
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
		align-items: center;
		height: 40%;
	}

	.nav-menu-link {
		font-size: x-large;
		font-weight: 100;
		color: $color-white;

		&.active {
			color: $color-blue;
		}

		&:hover {
			color: $color-yellow;
		}

		&:active {
			color: $color-gold;
		}
	}
</style>
