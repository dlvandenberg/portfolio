<script lang="ts">
	export const prerender = true;

	import { svelteIcon, typeScriptIcon } from '$lib/svg/icons';
	import '../app.scss';
	import Footer from './footer.svelte';
	import Header from './header.svelte';

	import { svgToFaIconDefinition } from '$lib/svg';
	import { library } from '@fortawesome/fontawesome-svg-core';
	import {
		faAngular,
		faCss3Alt,
		faHtml5,
		faJava,
		faJsSquare,
		faSwift,
	} from '@fortawesome/free-brands-svg-icons';

	library.add(faAngular, faHtml5, faCss3Alt, faJava, faJsSquare, faSwift);

	const vdbSvelte = svgToFaIconDefinition(svelteIcon, 'vdb', 'svelte', 'e001');
	const vdbTypeScript = svgToFaIconDefinition(typeScriptIcon, 'vdb', 'typescript', 'e002');

	library.add(vdbSvelte, vdbTypeScript);
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
