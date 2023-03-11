<script lang="ts">
	import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
	import { default as Highlight, HighlightSvelte } from 'svelte-highlight';
	import { bash, javascript, json, typescript } from 'svelte-highlight/languages';
	export let lang: string;
	export let text: string;

	type LanguageType = {
		label: string;
		language: any;
	};

	const getLanguageFromString = (lang: string): LanguageType => {
		console.log('lang', lang);
		let language: LanguageType;
		switch (lang) {
			case 'typescript':
			case 'ts':
				language = { label: 'TypeScript', language: typescript };
				break;

			case 'javascript':
				language = { label: 'JavaScript', language: javascript };
				break;

			case 'bash':
				language = { label: 'Bash', language: bash };
				break;

			default:
				language = { label: 'JSON', language: json };
				break;
		}

		return language;
	};

	const copyCode = (e: KeyboardEvent | MouseEvent): void => {
		if (e instanceof KeyboardEvent && e.key !== 'space') {
			return;
		}

		navigator.clipboard.writeText(text);
		console.log('Copied to clipboard!', text);
	};

	$: language = getLanguageFromString(lang);
</script>

<div class="code-block">
	<div class="code-block__header">
		<div class="code-block__label">{language.label}</div>
		<div class="code-block__action" on:click={copyCode} on:keyup={copyCode}>
			<FontAwesomeIcon icon={['far', 'clone']} />
		</div>
	</div>
	<div class="code-block__code">
		{#if lang === 'svelte'}
			<HighlightSvelte code={text} />
		{:else}
			<Highlight code={text} language={language.language} />
		{/if}
	</div>
</div>

<style lang="scss">
	.code-block {
		display: flex;
		flex-direction: column;

		&__header {
			display: flex;
			flex-direction: row;
			justify-content: flex-end;
			z-index: 1;
			width: 100%;
			background-color: lighten($color-coffee, 5%);
			border-bottom: 1px solid $color-sand-100;
			align-items: center;
		}

		&__label {
			padding: 0.2rem 0.4rem;

			&::before {
				content: '>_';
				margin-right: 0.5rem;
				color: $color-yellow;
			}
		}

		&__action {
			border-left: 1px solid $color-sand-100;
			padding: 0.4rem;
			cursor: pointer;

			&:hover {
				color: $color-yellow;
				background-color: lighten($color-coffee, 2%);
			}
		}

		&__code {
			margin-top: -1rem;
		}
	}
</style>
