<script lang="ts">
	export let title: string;
	export let subtitle = '';
</script>

<section class="section-container">
	<h1 class="section-title">{title}</h1>
	{#if subtitle}
		<h3 class="section-subtitle">{subtitle}</h3>
	{/if}
	<div class="section-content">
		{#if $$slots['outline-col']}
			<div class="section-col outline">
				<slot name="outline-col" />
			</div>
		{/if}
		{#if $$slots.col}
			<div class="section-col">
				<slot name="col" />
			</div>
		{/if}
	</div>
</section>

<style lang="scss">
	.section-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-bottom: 5rem;
		width: 100%;
	}

	.section-title {
		font-size: x-large;
		font-weight: 100;
		padding-bottom: 0.5rem;
		color: $color-sand-100;

		&::first-letter {
			color: $color-sand-500;
		}
	}

	.section-subtitle {
		font-size: small;
		font-weight: 100;
		padding-bottom: 0.5rem;
		color: $color-sand-500;
	}

	.section-content {
		display: flex;
		flex-wrap: wrap;
		flex-direction: row;
		width: 100%;
	}

	.section-col {
		width: 100%;
		background-color: $color-sand-500;
		border: 1px solid $color-sand-100;
		padding: 1rem;

		&.outline {
			background-color: $color-coffee;
		}
	}
</style>
