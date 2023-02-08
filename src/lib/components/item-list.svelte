<script lang="ts">
	import { page } from '$app/stores';
	import type { CodeSnippet } from '$lib/model/code-snippet';

	export let title: string = '$ code_snippets()';
	export let items: CodeSnippet[];
</script>

{#if items && items.length > 0}
	<div class="items g-container">
		<h1 class="items__title">{title}</h1>
		<div class="items__list">
			{#each items as item}
				<div class="item">
					<h2 class="item__title">_ {item.title}</h2>
					<div class="item__description">{item.description}</div>
					<a href={$page.url + '/' + item.slug} class="item__more">read more</a>
				</div>
			{/each}
		</div>
	</div>
{/if}

<style lang="scss">
	$item-gap: 1rem;

	.items {
		display: flex;
		flex-direction: column;
		align-items: center;

		&__title {
			font-weight: 100;
			font-size: x-large;
			color: $color-sand-100;
			margin-bottom: 0.5rem;

			&::first-letter {
				color: $color-sand-500;
			}
		}

		&__list {
			margin-bottom: 3rem;
			display: flex;
			flex-direction: row;
			flex-wrap: wrap;
			align-items: stretch;
			justify-content: center;
			gap: $item-gap;
		}
	}

	.item {
		border: 1px solid $color-sand-100;
		padding: 1rem;
		margin-bottom: 1rem;
		background-color: $color-coffee;
		position: relative;
		transition: transform $transition-duration ease-in-out;
		display: flex;
		flex-direction: column;

		&:hover {
			transform: translateY(-0.5rem);
		}

		&__title {
			font-weight: 100;
			font-size: large;
			text-transform: uppercase;
			margin-bottom: 0.5rem;
			color: $color-sand-100;

			&::first-letter {
				color: $color-yellow;
			}
		}

		&__description {
			margin-bottom: 1rem;
			flex-grow: 1;
		}

		&__more {
			border: 1px solid $color-sand-100;
			padding: 0.5rem 1rem;
			color: $color-sand-100;
			font-size: small;
			font-weight: 100;
			align-self: center;

			&:hover {
				background-color: $color-yellow;
				color: $color-coffee;
			}
		}
	}

	@media (min-width: $md-breakpoint) {
		.item {
			width: calc(($md-breakpoint - 2 * $item-gap) / 3);

			&__description {
				font-size: small;
				font-weight: 300;
			}
		}
	}
</style>
