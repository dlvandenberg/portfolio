<script lang="ts">
	import SlidingHeader from '$lib/components/sliding-header.svelte';
	import { onMount } from 'svelte';
	import { slide } from 'svelte/transition';
	const brandUrl = new URL('/brand.svg', import.meta.url).href;

	let mounted = false;
	let menuOpen = false;
	let y: number;

	onMount(() => {
		mounted = true;
	});

	const toggleMenu = (e?: KeyboardEvent | MouseEvent): void => {
		if (e instanceof KeyboardEvent && !isEnterOrSpacePressed(e)) {
			return;
		}
		menuOpen = !menuOpen;
		handleScrollForMenuToggle();
	};

	const isEnterOrSpacePressed = (e: KeyboardEvent): boolean => {
		return e.key === 'Enter' || e.key === 'Space';
	};

	const handleScrollForMenuToggle = (): void => {
		if (menuOpen) {
			document.body.style.position = 'fixed';
			document.body.style.top = `-${y}px`;
		} else {
			const scrollY = document.body.style.top;
			document.body.style.position = '';
			document.body.style.top = '';
			window.scrollTo(0, parseInt(scrollY || '0') * -1);
		}
	};
</script>

<SlidingHeader activeClass="active" isActive={menuOpen}>
	<div class="wrapper" class:active={menuOpen}>
		<div class="brand">
			<a href="/" class="brand-link">
				{#if mounted}
					<div class="brand-logo" style="background-image: url('{brandUrl}')" />
				{/if}
				<p>vdberg</p>
			</a>
		</div>
		<div
			class="nav-toggle"
			class:active={menuOpen}
			on:click={toggleMenu}
			on:keyup={(e) => toggleMenu(e)} />
	</div>
	<nav class="nav-collapse" class:show={menuOpen} transition:slide>
		<ul class="nav-menu">
			<li class="nav-menu-item">
				<a class="active" href="/">about</a>
			</li>
			<!-- <li class="nav-menu-item">
				<a href="/">projects</a>
			</li>
			<li class="nav-menu-item">
				<a href="/">blog</a>
			</li> -->
		</ul>
	</nav>
</SlidingHeader>
<svelte:window bind:scrollY={y} />

<style lang="scss">
	.brand-logo {
		width: 30px;
		height: 30px;
		display: inline-block;
		background-image: url('/brand.svg');
		background-position: 50% 50%;
		background-size: 60%;
		background-repeat: no-repeat;
		margin-right: 0.7rem;
	}

	.brand-link {
		font-size: xx-large;
		font-weight: 100;
		padding: 0 1rem;
		color: $color-white;
		display: inline-flex;
		align-items: center;

		p {
			display: none;
		}
	}

	.wrapper {
		position: relative;
		top: 0;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		height: $header-height;
		padding: 0.5rem;
		z-index: 9;
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
		z-index: 9;

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

	.nav-collapse {
		visibility: hidden;
		display: flex;
		flex-direction: column;
		transform: translateY(-100%);
		transition: $transition-duration ease-in-out;
		z-index: 8;

		&.show {
			visibility: visible;
			transform: translateY(0%);
		}
	}

	.nav-menu {
		display: flex;
		flex-direction: column;
		height: calc(100vh - $header-height);
		width: 100vw;
		background-color: $color-coffee;
		border-bottom: 1px solid $color-sand-100;
		justify-content: center;
		align-items: center;
		gap: 2rem;
	}

	.nav-menu-item a {
		font-size: large;
		font-weight: 100;
		color: $color-white;

		text-align: center;
		width: 100%;

		&.active {
			color: $color-sand-100;
		}

		&:hover {
			color: $color-yellow;
		}

		&:active {
			color: $color-gold;
		}
	}

	@media (min-width: $md-breakpoint) {
		.brand-link {
			p {
				display: inline;
			}

			&:hover p {
				color: $color-yellow;
			}
		}

		.nav-collapse {
			visibility: visible;
			transform: translateY(0%);
			flex-direction: row;
		}

		.nav-toggle {
			display: none;
		}

		.nav-menu {
			flex-direction: row;
			justify-content: right;
			align-items: center;
			height: $header-height;
			gap: 1rem;
			width: 100%;
			border: none;
			background: transparent;
		}

		.nav-menu-item a {
			padding-right: 1rem;
		}
	}
</style>
