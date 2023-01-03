<script lang="ts">
	import { slide } from 'svelte/transition';

	let menuOpen = false;
	let y: number;
	let lastY = 0;
	let offset = 40;
	let tolerance = 0;
	let headerClass = 'show';

	const updateClass = (y: number): string => {
		const dy = lastY - y;
		lastY = y;

		return deriveClass(y, dy);
	};

	const deriveClass = (y: number, dy: number): string => {
		if (isCurrentYWithinOffset(y) || isScrollingUp(dy) || isAfterMenuClose(dy)) {
			return 'show';
		}

		return 'hide';
	};

	const isAfterMenuClose = (dy: number): boolean => dy === tolerance;
	const isCurrentYWithinOffset = (y: number): boolean => y < offset;
	const isScrollingUp = (dy: number): boolean => dy > 0;

	const toggleMenu = (): void => {
		menuOpen = !menuOpen;

		if (menuOpen) {
			document.body.style.position = 'fixed';
			document.body.style.top = `-${lastY}px`;
		} else {
			const scrollY = document.body.style.top;
			document.body.style.position = '';
			document.body.style.top = '';
			tolerance = parseInt(scrollY || '0');
			console.log(`tolerance: ${tolerance}`);
			window.scrollTo(0, parseInt(scrollY || '0') * -1);
		}
	};

	$: headerClass = updateClass(y);
</script>

<header class={`header ${headerClass}`} class:active={menuOpen}>
	<div class="wrapper" class:active={menuOpen}>
		<div class="brand">
			<a href="/" class="brand-link">vdberg</a>
		</div>
		<div class="nav-toggle" class:active={menuOpen} on:click={toggleMenu} />
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
</header>

<svelte:window bind:scrollY={y} />

<style lang="scss">
	.header {
		position: fixed;
		top: 0;
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		height: $header-height;
		border-bottom: 1px solid $color-sand-100;
		background-color: $color-coffee;
		z-index: 10;
		transition: $transition-duration ease-in-out;

		&.show {
			transform: tranlateY(0%);
		}

		&.hide {
			transform: translateY(-100%);
		}

		&.active {
			border-bottom-color: $color-coffee;
		}
	}

	.brand-link {
		font-size: xx-large;
		font-weight: 100;
		padding: 0 1rem;
		color: $color-white;
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
		.header {
			flex-direction: row;
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
