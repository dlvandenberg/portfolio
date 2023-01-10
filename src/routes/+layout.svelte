<script lang="ts">
	export const prerender = true;

	import '../app.scss';
	import Footer from './footer.svelte';
	import Header from './header.svelte';
</script>

<Header />

<div id="content">
	<slot />
</div>

<Footer />

<style lang="scss">
	#content {
		background-image: radial-gradient(rgb(163, 144, 0, 0.2) 1px, #342e37 1px);
		background-position: 0 0;
		background-size: 1em 1em;
		min-height: calc(100vh - $header-height - $footer-height);
		width: 100vw;
		padding: 2rem;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>
