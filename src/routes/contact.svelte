<script lang="ts">
	import Section from '$lib/section.svelte';

	const email = 'dennis@devd.be';
</script>

<Section title="$ contact">
	<div slot="outline-col">
		<p>
			Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo, repellat voluptatum adipisci
			sit qui tempora doloribus illo ullam eveniet odio id blanditiis aut modi dicta aspernatur
			laudantium nostrum temporibus nemo.
		</p>
		<div class="button">
			<a class="call-to-action" href="mailto:{email}">contact me</a>
		</div>
	</div>
</Section>

<style lang="scss">
	.button {
		margin-top: 2rem;
		width: 100%;
		text-align: center;

		a {
			border: 1px solid $color-sand-100;
			background-color: $color-blue;
			color: $color-coffee;
			padding: 0.3rem 1rem;

			&:hover {
				background-color: $color-yellow;
			}

			&:active {
				background-color: $color-gold;
			}
		}
	}
</style>
