<script lang="ts">
	import { slide } from 'svelte/transition';
	interface WithName {
		name: string;
	}
	type T = $$Generic<WithName>;

	export let tabData: T[] | undefined;

	let activeTabTitle: string = tabData ? tabData[0]?.name : '';

	const selectTab = (title: string, e?: KeyboardEvent) => {
		if (e && !(e.key === 'Enter' || e.key === 'Space')) {
			return;
		}

		activeTabTitle = title;
	};

	$: tabTitles = tabData?.map((tab) => tab.name) ?? [];
	$: activeTab = tabData?.filter((tab) => tab.name === activeTabTitle)[0] ?? {};
</script>

{#if tabData && tabData.length > 0}
	<div class="tabs g-container">
		<h1 class="tabs__title">$ exp --work</h1>
		<div class="tabs__wrapper">
			<div class="tabs__list">
				{#each tabTitles as title}
					<div
						class="tabs__item"
						class:-active={activeTabTitle === title}
						on:click={() => selectTab(title)}
						on:keyup={(e) => selectTab(title, e)}>
						{title}
					</div>
				{/each}
			</div>
			<div class="tab">
				{#key activeTab}
					<div class="tab__content" transition:slide>
						<slot {activeTab} />
					</div>
				{/key}
			</div>
		</div>
	</div>
{/if}

<style lang="scss">
	.tabs {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding-bottom: 5rem;
		width: 100%;

		&__title {
			font-weight: 100;
			font-size: x-large;
			padding-bottom: 0.5rem;
			color: $color-sand-100;

			&::first-letter {
				color: $color-sand-500;
			}
		}

		&__wrapper {
			display: flex;
			flex-direction: column;
			width: 100%;
		}

		&__list {
			display: flex;
			flex-direction: row;
			overflow-x: scroll;
			scroll-snap-type: x mandatory;
		}

		&__item {
			padding: 0.5rem;
			white-space: nowrap;
			border: 1px solid $color-sand-100;
			background-color: $color-coffee;
			color: $color-sand-100;
			font-weight: 100;
			border-right: none;
			border-bottom: none;
			scroll-snap-align: start;
			cursor: pointer;

			&:last-child {
				border-right: 1px solid $color-sand-100;
			}

			&:hover {
				background-color: $color-yellow;
				color: $color-coffee;
			}

			&:active {
				background-color: $color-gold;
			}

			&.-active {
				background-color: $color-sand-100;
				color: $color-coffee;

				&:active {
					background-color: $color-sand-500;
				}

				&:hover {
					background-color: $color-sand-300;
				}
			}
		}

		.tab {
			border: 1px solid $color-sand-100;
			flex-grow: 1;

			&__content {
				background-color: $color-coffee;
				display: flex;
				flex-direction: column;
				padding: 1rem;
			}
		}
	}

	@media (min-width: $md-breakpoint) {
		.tabs {
			&__wrapper {
				flex-direction: row;
			}

			&__list {
				flex-direction: column;
				overflow-y: scroll;
				overflow-x: unset;
				scroll-snap-type: y mandatory;
				width: 25%;
				flex-shrink: 0;
			}

			&__item {
				display: inline-block;
				transition: $transition-duration ease-in-out;

				&:last-child {
					border-right-color: $color-coffee;
					border-bottom: 1px solid $color-sand-100;
				}
			}
		}
	}
</style>
