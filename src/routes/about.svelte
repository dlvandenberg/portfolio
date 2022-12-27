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
		pets: [
			{
				type: 'Dog',
				race: 'Pomsky',
			},
		],
	};
</script>

<div class="wrapper">
	<Section title="$ whoami">
		<div slot="outline-col">
			<p>{JSON.stringify(person, null, 2)}</p>
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
