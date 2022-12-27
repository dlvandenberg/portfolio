<script lang="ts">
	import Section from '$lib/section.svelte';

	let person = {
		firstName: 'Dennis',
		lastName: 'van den Berg',
		dateOfBirth: '14-10-1989',
		gender: 'Gender.MALE',
		nationality: 'Dutch',
		email: 'dennis@devd.be',
		married: true,
		offspring: 2,
		pets: ['Dog'],
	};
</script>

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
  "offspring": <span class="value">{person.offspring}</span>,
  "pets": <span class="value">{JSON.stringify(person.pets)}</span>
&#125;
			</pre>
		</div>
		<div slot="col">
			<p>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore numquam nobis, consectetur
				quasi dolorum necessitatibus eius asperiores repudiandae explicabo, praesentium
				exercitationem deleniti sapiente accusamus repellat eveniet, modi aperiam architecto?
				Voluptatum!
			</p>
		</div>
	</Section>
</div>

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
