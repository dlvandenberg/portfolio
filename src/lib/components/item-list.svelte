<script lang="ts">
	import { page } from '$app/stores';
	import { formatDate } from '$lib/date';

	export let title: string;
	export let subtitle: string = '';
	export let items: {
		title: string;
		dateAdded: Date;
		description: string;
		slug: string;
	}[];
</script>

{#if items && items.length > 0}
	<div class="items g-container -animate-fade-in">
		<h1 class="items__title" data-testid="item-list-title">{title}</h1>
		{#if subtitle}
			<h3 class="items__subtitle" data-testid="item-list-subtitle">{subtitle}</h3>
		{/if}
		<div class="items__list">
			{#each items as item}
				<div class="item">
					<div class="item__header">
						<h2 class="item__title" data-testid="item-title">{item.title}</h2>
						<h3 class="item__date" data-testid="item-date">@ {formatDate(item.dateAdded)}</h3>
					</div>
					<div class="item__description" data-testid="item-description">{item.description}</div>
					<a href={$page.url + '/' + item.slug} class="item__more" data-testid="read-more-link"
						>read more</a>
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
			@include dollar-title;
		}

		&__subtitle {
			@include dollar-subtitle;
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

		&__header {
			display: flex;
			flex-direction: row;
			flex-wrap: wrap;
			gap: $item-gap;
			align-items: center;
			margin-bottom: 0.5rem;
		}

		&__title {
			font-weight: 100;
			font-size: large;
			text-transform: uppercase;
			color: $color-sand-100;

			&::before {
				content: '_';
				margin-right: 0.5rem;
				color: $color-yellow;
			}
		}

		&__date {
			font-weight: 100;
			color: $color-blue;
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
