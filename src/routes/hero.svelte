<script lang="ts">
	import { onMount } from 'svelte';
	import { slide } from 'svelte/transition';

	const portraitUrl = new URL('/portrait.svg', import.meta.url).href;

	let visible = false;

	onMount(() => {
		visible = true;
	});
</script>

{#if visible}
	<div class="hero">
		<div
			class="hero-avatar"
			in:slide={{ duration: 1000 }}
			style="background-image: url('{portraitUrl}')" />
		<div class="hero-titles">
			<h1 class="title" in:slide={{ delay: 300, duration: 1000 }}>Dennis van den Berg</h1>
			<h3 class="subtitle" in:slide={{ delay: 500, duration: 1000 }}>Full Stack Developer</h3>
		</div>
	</div>
{/if}

<style lang="scss">
	.hero {
		display: flex;
		flex-direction: column;
		align-items: center;
		height: calc(100vh - $header-height);
		justify-content: center;
		margin-bottom: 5rem;
	}

	.hero-avatar {
		background-color: $color-coffee;
		background-image: url('/portrait.svg');
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
