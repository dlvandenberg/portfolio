<script lang="ts">
	import { Markdown, Section } from '$lib/components';
	import { formatDate } from '$lib/date';
	import type { PersonalInfo } from '../../domain/model';

	interface Props {
		personalInfo: PersonalInfo;
	}

	let { personalInfo }: Props = $props();

	let formattedDate = $derived(personalInfo ? formatDate(personalInfo.dateOfBirth) : '');
</script>

{#if personalInfo}
	<div data-testid="personal-info" class="wrapper">
		<Section title="whoami">
			{#snippet outlineCol()}
				<div>
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
			{/snippet}
			{#snippet col()}
				<div class="md-wrapper">
					<Markdown source={personalInfo.content} />
				</div>
			{/snippet}
		</Section>
	</div>
{/if}

<style lang="scss">
	@use '$styles/variables' as *;

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
