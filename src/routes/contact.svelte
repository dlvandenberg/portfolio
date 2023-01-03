<script lang="ts">
	import Section from '$lib/components/section.svelte';
	import type { ContactInfo } from '$lib/model/contact-info';
	import { marked } from 'marked';

	export let contactInfo: ContactInfo;
</script>

{#if contactInfo}
	<Section title="$ contact">
		<div slot="outline-col">
			<div class="info">
				{@html marked(contactInfo.info)}
			</div>
			<div class="button">
				<a class="call-to-action" href="mailto:{contactInfo.email}">contact me</a>
			</div>
		</div>
	</Section>
{/if}

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

	@media (min-width: $md-breakpoint) {
		.info {
			font-size: small;
			font-weight: 300;
			text-align: center;
		}

		a.call-to-action {
			font-size: small;
		}
	}
</style>
