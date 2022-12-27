<script lang="ts">
	import { blur } from 'svelte/transition';

	interface WithName {
		name: string;
	}
	type T = $$Generic<WithName>;

	export let tabData: T[] = [];

	let activeTabTitle: string;

	activeTabTitle = tabData[0]?.name ?? '';
	$: tabTitles = tabData.map((tab) => tab.name);
	$: activeTab = tabData.filter((tab) => tab.name === activeTabTitle)[0];
</script>

<div class="tabs-container">
	<div class="tabs-title">
		<h1>$ exp --work</h1>
	</div>
	<div class="tabs-wrapper">
		<div class="tabs-list">
			{#each tabTitles as title}
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<div
					class="tabs-list-item"
					class:active={activeTabTitle === title}
					on:click={() => (activeTabTitle = title)}>
					{title}
				</div>
			{/each}
		</div>
		<div class="tabs-viewport">
			{#key activeTab}
				<div class="tab-content" transition:blur>
					<slot {activeTab} />
				</div>
			{/key}
		</div>
	</div>
</div>

<style lang="scss">
	.tabs-wrapper {
		display: flex;
		flex-direction: column;
		width: 100%;
	}

	.tabs-list {
		display: flex;
		flex-direction: row;
		overflow-x: scroll;
		scroll-snap-type: x mandatory;
	}

	.tabs-list-item {
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

		&.active {
			background-color: $color-sand-100;
			color: $color-coffee;
		}

		&.active:active {
			background-color: $color-sand-500;
		}

		&.active:hover {
			background-color: $color-sand-300;
		}
	}

	.tabs-viewport {
		border: 1px solid $color-sand-100;
	}

	.tab-content {
		background-color: $color-coffee;
		display: flex;
		flex-direction: column;
		padding: 1rem;
	}

	.tabs-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding-bottom: 5rem;
		width: 100%;
	}

	.tabs-title h1 {
		font-weight: 100;
		font-size: x-large;
		padding-bottom: 0.5rem;
		color: $color-sand-100;

		&::first-letter {
			color: $color-sand-500;
		}
	}
</style>
