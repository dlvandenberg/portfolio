<script lang="ts">
	interface Props {
		title: string;
		subtitle?: string;
		headerActions?: any;
		outlineCol?: any;
		col?: any;
	}

	let { title, subtitle = '', headerActions, outlineCol, col }: Props = $props();
</script>

<section class="section g-container">
	<div class="section__header">
		{#if headerActions}
			<div class="section__actions">
				{@render headerActions()}
			</div>
		{/if}
		<div class="section__titles">
			<h1 class="section__title">{title}</h1>
			{#if subtitle}
				<h3 data-testid="section-subtitle" class="section__subtitle">{subtitle}</h3>
			{/if}
		</div>
	</div>
	<div class="section__content">
		{#if outlineCol}
			<div data-testid="section-column-outline" class="section__column -outline">
				{@render outlineCol()}
			</div>
		{/if}
		{#if col}
			<div data-testid="section-column" class="section__column">
				{@render col()}
			</div>
		{/if}
	</div>
</section>

<style lang="scss">
	@use '$styles/mixins' as *;
	@use '$styles/variables' as *;

	.section {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-bottom: 5rem;
		width: 100%;
		position: relative;

		&__header {
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
			width: 100%;
		}

		&__actions {
			flex-grow: 0;
			align-items: flex-start;
			position: absolute;
		}

		&__titles {
			display: flex;
			flex-direction: column;
			align-items: center;
			flex-grow: 1;
		}

		&__title {
			@include dollar-title;
		}

		&__subtitle {
			@include dollar-subtitle;
		}

		&__content {
			display: flex;
			flex-wrap: wrap;
			flex-direction: row;
			width: 100%;
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
