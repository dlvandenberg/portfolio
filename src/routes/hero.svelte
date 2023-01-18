<script lang="ts">
	import { onMount } from 'svelte';

	const portraitUrl = new URL('/portrait.svg', import.meta.url).href;

	let mounted = false;

	onMount(() => {
		mounted = true;
	});
</script>

<div class="hero">
	{#if mounted}
		<div class="hero-avatar animate" style="background-image: url('{portraitUrl}')" />
	{/if}
	<div class="hero-titles">
		<h1 class="title animate">Dennis van den Berg</h1>
		<h3 class="subtitle animate">Full Stack Developer</h3>
	</div>
</div>

<style lang="scss">
	.hero {
		display: flex;
		flex-direction: column;
		align-items: center;
		height: calc(100vh - $header-height);
		justify-content: center;
		margin-bottom: 5rem;
	}

	.animate {
		animation-duration: 0.5s;
		animation-name: animate-fade-in;
		animation-delay: 0.2s;
		animation-fill-mode: backwards;
	}

	@keyframes animate-fade-in {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}

	.hero-avatar {
		background-color: $color-coffee;
		background-position: 50% 50%;
		background-size: 80% 80%;
		background-repeat: no-repeat;
		border: 1px solid $color-sand-100;
		width: 15rem;
		height: 15rem;
		border-radius: 50% 50%;
		margin: 2rem;
		transition: $transition-duration ease-in-out;

		&:hover {
			transform: scale(1.3);
			border-color: $color-yellow;
		}
	}

	.hero-titles {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
		height: 6rem;
	}

	.title {
		font-size: x-large;
		color: $color-sand-100;
		font-weight: 100;
	}

	.subtitle {
		font-size: large;
		font-weight: 100;
		color: $color-sand-500;
	}
</style>
