<script lang="ts">
	export let activeClass = 'active';
	export let isActive = false;

	let y: number;
	let lastY = 0;
	let offset = 40;

	const updateClass = (y: number): string => {
		const dy = lastY - y;
		lastY = y;

		return deriveClass(y, dy);
	};

	const deriveClass = (y: number, dy: number): string => {
		console.log(`deriveClass(y: ${y}, dy: ${dy});`);
		if (isCurrentYWithinOffset(y) || isScrollingUp(dy) || isAfterMenuClose(dy)) {
			return 'show';
		}

		return 'hide';
	};

	const isAfterMenuClose = (dy: number): boolean => Math.abs(dy) === lastY;
	const isCurrentYWithinOffset = (y: number): boolean => y < offset;
	const isScrollingUp = (dy: number): boolean => dy > 0;

	$: headerClass = updateClass(y);
</script>

<header class={`header ${headerClass} ${isActive ? activeClass : ''}`}>
	<slot />
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

	@media (min-width: $md-breakpoint) {
		.header {
			flex-direction: row;
		}
	}
</style>
