<script lang="ts">
	import Skills from '$lib/components/skills.svelte';
	import TabSection from '$lib/components/tab-section.svelte';
	import type { Work } from '$lib/model/work';
	import SvelteMarkdown from 'svelte-markdown';

	export let workExperience: Work[] | undefined;

	$: experienceMap = new Map(workExperience ? workExperience.map((exp) => [exp.name, exp]) : []);
</script>

{#if experienceMap && experienceMap.size > 0}
	<TabSection tabData={experienceMap}>
		<svelte:fragment let:activeTab>
			<div class="job">
				<div class="job__data">
					<h1 class="job__title">{activeTab.jobTitle}</h1>
					<h3 class="job__company">@ {activeTab.company}</h3>
				</div>
				<p class="job__period">{activeTab.dateFrom} - {activeTab.dateTo ?? 'Present'}</p>
			</div>
			<div class="job__description">
				<h3 class="job__subtitle">_ description</h3>
				<div class="md-wrapper">
					<SvelteMarkdown source={activeTab.content} />
				</div>
			</div>
			{#if activeTab.tags && activeTab.tags.length >= 1}
				<div class="job__tags">
					<h3 class="job__subtitle">_ tags</h3>
					<Skills skills={activeTab.tags} />
				</div>
			{/if}
		</svelte:fragment>
	</TabSection>
{/if}

<style lang="scss">
	.job {
		display: flex;
		flex-direction: column;
		margin-bottom: 3rem;

		&__data {
			display: flex;
			flex-direction: row;
			flex-wrap: wrap;
			margin-bottom: 0.5rem;
		}

		&__title {
			font-size: large;
			font-weight: 100;
			color: $color-sand-100;
		}

		&__company {
			font-size: medium;
			color: $color-blue;
			font-weight: 100;
			margin-left: 0.5rem;
		}

		&__period {
			color: $color-sand-500;
			font-size: small;
		}

		&__description {
			margin-bottom: 2rem;
		}

		&__subtitle {
			font-weight: 100;
			font-size: medium;
			color: $color-sand-100;
			margin-bottom: 0.5rem;

			&::first-letter {
				color: $color-yellow;
			}
		}
	}

	@media (min-width: $md-breakpoint) {
		.job__description div {
			font-weight: 100;
			font-size: small;
		}
	}
</style>
