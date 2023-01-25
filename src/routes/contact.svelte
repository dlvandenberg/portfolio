<script lang="ts">
	import Section from '$lib/components/section.svelte';

	export let email: string;
</script>

<Section title="$ contact">
	<svelte:fragment slot="outline-col">
		<p class="info">
			I am not looking for any jobs at the moment, but if you wish to contact me with a question or
			to say hi, feel free to send me an email!
		</p>
		{#if email}
			<div class="button">
				<a class="button__email" href="mailto:{email}">contact me</a>
			</div>
		{/if}
	</svelte:fragment>
</Section>

<style lang="scss">
	.button {
		margin-top: 2rem;
		width: 100%;
		text-align: center;

		&__email {
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

	@media (min-width: $md-breakpoint) {
		.info {
			font-size: small;
			font-weight: 300;
			text-align: center;
		}

		.button {
			&__email {
				font-size: small;
			}
		}
	}
</style>
