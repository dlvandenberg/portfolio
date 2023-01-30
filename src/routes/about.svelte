<script lang="ts">
	import Section from '$lib/components/section.svelte';
	import { formatDate } from '$lib/date';
	import type { PersonalInfo } from '$lib/model';
	import SvelteMarkdown from 'svelte-markdown';

	export let personalInfo: PersonalInfo;

	$: formattedDate = personalInfo ? formatDate(personalInfo.dateOfBirth) : '';
</script>

{#if personalInfo}
	<div data-testid="personal-info" class="wrapper">
		<Section title="$ whoami">
			<div slot="outline-col">
				<!-- prettier-ignore -->
				<pre class="json">
&#123;
  "firstName": <span class="json__value">"{personalInfo.firstName}"</span>,
  "lastName": <span class="json__value">"{personalInfo.lastName}"</span>,
  "dateOfBirth": <span class="json__value">"{formattedDate}"</span>,
  "gender": <span class="json__value">"{personalInfo.gender}"</span>,
  "nationality": <span class="json__value">"{personalInfo.nationality}"</span>,
  "email": <span class="json__value">"{personalInfo.email}"</span>,
  "married": <span class="json__value">{personalInfo.married}</span>,
  "kids": <span class="json__value">{personalInfo.kids}</span>,
&#125;
			</pre>
			</div>
			<div slot="col" class="md-wrapper">
				<SvelteMarkdown source={personalInfo.content} />
			</div>
		</Section>
	</div>
{/if}

<style lang="scss">
	.json {
		font-size: smaller;
		font-weight: 300;
		font-family: $font-family;

		&__value {
			color: $color-sand-100;
		}
	}

	.wrapper :global(.-outline) {
		border-right-color: $color-sand-100;
		border-bottom-color: $color-coffee;
	}

	@media (min-width: $md-breakpoint) {
		.wrapper :global(.section__column) {
			max-width: 50%;
			font-size: small;
			font-weight: 300;
		}

		.wrapper :global(.-outline) {
			border-right-color: $color-coffee;
			border-bottom-color: $color-sand-100;
		}

		.json {
			font-size: unset;
		}
	}
</style>
