<script lang="ts">
	import Section from '$lib/components/section.svelte';
	import type { PersonalInfo } from '$lib/model/personal-info';
	import { marked } from 'marked';

	async function load(): Promise<PersonalInfo> {
		const response = await fetch('/api/personal-info/', { method: 'GET' });
		return await response.json();
	}
</script>

{#await load() then person}
	<div class="wrapper">
		<Section title="$ whoami">
			<div slot="outline-col">
				<!-- prettier-ignore -->
				<pre>
&#123;
  "firstName": <span class="value">"{person.firstName}"</span>,
  "lastName": <span class="value">"{person.lastName}"</span>,
  "dateOfBirth": <span class="value">"{person.dateOfBirth}"</span>,
  "gender": <span class="value">"{person.gender}"</span>,
  "nationality": <span class="value">"{person.nationality}"</span>,
  "email": <span class="value">"{person.email}"</span>,
  "married": <span class="value">{person.married}</span>,
  "kids": <span class="value">{person.kids}</span>,
&#125;
			</pre>
			</div>
			<div slot="col">
				{@html marked(person.description)}
			</div>
		</Section>
	</div>
{/await}

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
