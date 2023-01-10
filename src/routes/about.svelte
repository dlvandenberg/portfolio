<script lang="ts">
	import Section from '$lib/components/section.svelte';
	import type { PersonalInfo } from '$lib/model';
	import SvelteMarkdown from 'svelte-markdown';

	export let personalInfo: PersonalInfo;
</script>

{#if personalInfo}
	<div class="wrapper">
		<Section title="$ whoami">
			<div slot="outline-col">
				<!-- prettier-ignore -->
				<pre>
&#123;
  "firstName": <span class="value">"{personalInfo.firstName}"</span>,
  "lastName": <span class="value">"{personalInfo.lastName}"</span>,
  "dateOfBirth": <span class="value">"{personalInfo.dateOfBirth}"</span>,
  "gender": <span class="value">"{personalInfo.gender}"</span>,
  "nationality": <span class="value">"{personalInfo.nationality}"</span>,
  "email": <span class="value">"{personalInfo.email}"</span>,
  "married": <span class="value">{personalInfo.married}</span>,
  "kids": <span class="value">{personalInfo.kids}</span>,
&#125;
			</pre>
			</div>
			<div slot="col">
				<SvelteMarkdown source={personalInfo.description} />
			</div>
		</Section>
	</div>
{/if}

<style lang="scss">
	pre {
		font-size: smaller;
		font-weight: 300;
		font-family: $font-family;

		.value {
			color: $color-sand-100;
		}
	}

	.wrapper :global(.outline) {
		border-right-color: $color-sand-100;
		border-bottom-color: $color-coffee;
	}

	@media (min-width: $md-breakpoint) {
		.wrapper :global(.section-col) {
			max-width: 50%;
			font-size: small;
			font-weight: 300;
		}

		.wrapper :global(.outline) {
			border-right-color: $color-coffee;
			border-bottom-color: $color-sand-100;
		}
	}
</style>
