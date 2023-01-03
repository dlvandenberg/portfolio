<script lang="ts">
	import Skills from '$lib/components/skills.svelte';
	import TabSection from '$lib/components/tab-section.svelte';
	import type { Work } from '$lib/model/work';
	import { marked } from 'marked';

	export let workExperience: Work[];
</script>

{#if workExperience}
	<TabSection tabData={workExperience}>
		<svelte:fragment let:activeTab>
			<div class="job">
				<div class="job-data">
					<h1 class="job-title">{activeTab.jobTitle}</h1>
					<h3 class="job-location">@ {activeTab.job}</h3>
				</div>
				<div class="job-period">
					<p>{activeTab.dateFrom} - {activeTab.dateTo ?? 'Present'}</p>
				</div>
			</div>
			<div class="job-description">
				<h3>_ description</h3>
				<div>
					{@html marked(activeTab.description)}
				</div>
			</div>
			<div class="job-tags">
				<h3>_ tags</h3>
				<Skills skills={activeTab.skills} />
			</div>
		</svelte:fragment>
	</TabSection>
{/if}

<style lang="scss">
	.job {
		display: flex;
		flex-direction: column;
		margin-bottom: 3rem;
	}

	.job-data {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		margin-bottom: 0.5rem;
	}

	.job-title {
		font-size: large;
		font-weight: 100;
		color: $color-sand-100;
	}

	.job-location {
		font-size: medium;
		color: $color-blue;
		font-weight: 100;
		margin-left: 0.5rem;
	}

	.job-period p {
		color: $color-sand-500;
		font-size: small;
	}

	.job-description h3,
	.job-tags h3 {
		font-weight: 100;
		font-size: medium;
		color: $color-sand-100;
		margin-bottom: 0.5rem;

		&::first-letter {
			color: $color-yellow;
		}
	}

	.job-description {
		margin-bottom: 2rem;
	}

	@media (min-width: $md-breakpoint) {
		.job-description div {
			font-weight: 100;
			font-size: small;
		}
	}
</style>
