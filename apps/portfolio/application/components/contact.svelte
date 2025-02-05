<script lang="ts">
	import Section from '$lib/components/section.svelte';

	interface Props {
		email: string;
	}

	let { email }: Props = $props();
</script>

<Section title="contact">
	{#snippet outlineCol()}
		<p data-testid="contact-info" class="info">
			I am not looking for any jobs at the moment, but if you wish to contact me with a question or
			to say hi, feel free to send me an email!
		</p>
		{#if email}
			<div class="button">
				<a data-testid="email-button" class="button__email" href="mailto:{email}">contact me</a>
			</div>
		{/if}
	{/snippet}
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
