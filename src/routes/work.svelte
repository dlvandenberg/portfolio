<script lang="ts">
	import type { Work } from '$lib/model/work';
	import Skills from '$lib/skills.svelte';
	import TabSection from '$lib/tab-section.svelte';

	const workExperience: Work[] = [
		{
			name: 'Nedap',
			job: 'Nedap Security Management',
			jobTitle: 'Frontend Developer',
			dateFrom: 'July 2022',
			dateTo: 'Present',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dictum neque non rutrum accumsan. Nullam id neque ac mi interdum accumsan. Nulla eget orci lectus. Duis quis consectetur elit. Nulla vitae feugiat nibh. Praesent imperdiet metus vitae egestas varius. Etiam a fermentum dolor, et molestie dolor. Fusce placerat suscipit quam, in condimentum nulla pulvinar eget.',
			tags: [
				{
					name: 'Angular',
					colorCode: '#DD1B16',
				},
				{
					name: 'TypeScript',
					colorCode: '#007ACC',
				},
				{
					name: 'JavaScript',
					colorCode: '#F0DB4F',
				},
				{
					name: 'Java',
					colorCode: '#F89820',
				},
				{
					name: 'HTML',
					colorCode: '#E44D26',
				},
				{
					name: 'CSS',
					colorCode: '#2965F1',
				},
				{
					name: 'Docker',
					colorCode: '#0DB7ED',
				},
			],
		},
		{
			name: 'Carthago-ICT',
			job: 'Carthago ICT',
			jobTitle: 'Full Stack Developer',
			dateFrom: 'September 2013',
			dateTo: 'July 2022',
			description:
				'Curabitur in ligula lacus. Sed congue, nunc vitae molestie commodo, tellus mauris finibus odio, vulputate accumsan enim mauris eget lectus. Aenean eget convallis tellus. Aenean nec rutrum ante. Nulla vitae tortor ut erat dictum imperdiet. Nullam auctor mi eu vestibulum posuere.',
			tags: [
				{
					name: 'Angular',
					colorCode: '#DD1B16',
				},
				{
					name: 'TypeScript',
					colorCode: '#007ACC',
				},
				{
					name: 'JavaScript',
					colorCode: '#F0DB4F',
				},
				{
					name: 'Java',
					colorCode: '#F89820',
				},
				{
					name: 'Docker',
					colorCode: '#0DB7ED',
				},
			],
		},
		{
			name: 'Thales',
			job: 'Thales',
			jobTitle: 'Full Stack Developer',
			dateFrom: 'November 2020',
			dateTo: 'July 2022',
			description:
				'Sed venenatis tellus diam, at commodo ligula tincidunt vel. Cras vitae condimentum nisl, facilisis egestas lectus. Integer egestas imperdiet risus in aliquet. Proin ligula purus, aliquet sed eleifend vulputate, rutrum quis diam. Aliquam vitae finibus nulla, non dignissim arcu.',
			tags: [
				{
					name: 'Angular',
					colorCode: '#DD1B16',
				},
				{
					name: 'TypeScript',
					colorCode: '#007ACC',
				},
				{
					name: 'Java',
					colorCode: '#F89820',
				},
				{
					name: 'Docker',
					colorCode: '#0DB7ED',
				},
			],
		},
		{
			name: 'Belastingdienst',
			job: 'Belastingdienst',
			jobTitle: 'Full Stack Developer',
			dateFrom: 'September 2018',
			dateTo: 'November 2020',
			description:
				'Sed venenatis tellus diam, at commodo ligula tincidunt vel. Cras vitae condimentum nisl, facilisis egestas lectus. Integer egestas imperdiet risus in aliquet. Proin ligula purus, aliquet sed eleifend vulputate, rutrum quis diam. Aliquam vitae finibus nulla, non dignissim arcu.',
			tags: [
				{
					name: 'Angular',
					colorCode: '#DD1B16',
				},
				{
					name: 'Java',
					colorCode: '#F89820',
				},
			],
		},
	];
</script>

<TabSection tabData={workExperience}>
	<svelte:fragment let:activeTab>
		<div class="job">
			<div class="job-data">
				<h1 class="job-title">{activeTab.jobTitle}</h1>
				<h3 class="job-location">@ {activeTab.job}</h3>
			</div>
			<div class="job-period">
				<p>{activeTab.dateFrom} - {activeTab.dateTo}</p>
			</div>
		</div>
		<div class="job-description">
			<h3>_ description</h3>
			<p>{activeTab.description}</p>
		</div>
		<div class="job-tags">
			<h3>_ tags</h3>
			<Skills skills={activeTab.tags} />
		</div>
	</svelte:fragment>
</TabSection>

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
</style>
