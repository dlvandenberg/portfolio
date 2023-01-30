<script lang="ts">
	export let title: string;
	export let subtitle = '';
</script>

<section class="section g-container">
	<h1 class="section__title">{title}</h1>
	{#if subtitle}
		<h3 data-testid="section-subtitle" class="section__subtitle">{subtitle}</h3>
	{/if}
	<div class="section__content">
		{#if $$slots['outline-col']}
			<div data-testid="section-column-outline" class="section__column -outline">
				<slot name="outline-col" />
			</div>
		{/if}
		{#if $$slots.col}
			<div data-testid="section-column" class="section__column">
				<slot name="col" />
			</div>
		{/if}
	</div>
</section>

<style lang="scss">
	.section {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-bottom: 5rem;
		width: 100%;

		&__title {
			font-size: x-large;
			font-weight: 100;
			padding-bottom: 0.5rem;
			color: $color-sand-100;

			&::first-letter {
				color: $color-sand-500;
			}
		}

		&__subtitle {
			font-size: small;
			font-weight: 100;
			padding-bottom: 0.5rem;
			color: $color-sand-500;
		}

		&__content {
			display: flex;
			flex-wrap: wrap;
			flex-direction: row;
		}

		&__column {
			width: 100%;
			background-color: $color-sand-500;
			border: 1px solid $color-sand-100;
			padding: 1rem;

			&.-outline {
				background-color: $color-coffee;
			}
		}
	}
</style>
