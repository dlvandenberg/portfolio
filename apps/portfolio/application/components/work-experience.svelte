<script lang="ts">
	import { Markdown, Skills, TabSection } from '$lib/components';
	import { formatDate } from '$lib/date';
	import type { Work } from '../../domain/model';

	export let workExperience: Work[] | undefined;

	$: experienceMap = new Map(workExperience ? workExperience.map((exp) => [exp.name, exp]) : []);
</script>

{#if experienceMap && experienceMap.size > 0}
	<TabSection tabData={experienceMap}>
		<svelte:fragment let:activeTab>
			<div data-testid="job" class="job">
				<div class="job__data">
					<h1 data-testid="job-title" class="job__title">{activeTab.jobTitle}</h1>
					<h3 data-testid="job-company" class="job__company">@ {activeTab.company}</h3>
				</div>
				<p data-testid="job-period" class="job__period">
					{formatDate(activeTab.dateFrom)} - {formatDate(activeTab.dateTo) ?? 'Present'}
				</p>
			</div>
			<div class="job__description">
				<h3 class="job__subtitle">_ description</h3>
				<div data-testid="job-description" class="md-wrapper">
					<Markdown source={activeTab.content} />
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
