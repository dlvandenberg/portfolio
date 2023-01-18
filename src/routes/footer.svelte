<script lang="ts">
	import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
	import Fa from 'svelte-fa/src/fa.svelte';
</script>

<footer class="footer">
	<div class="footer-socials">
		<div class="social-item">
			<a href="https://www.linkedin.com/in/dlvandenberg/">
				<Fa icon={faLinkedin} />
			</a>
		</div>
		<div class="social-item">
			<a href="https://github.com/dlvandenberg">
				<Fa icon={faGithub} />
			</a>
		</div>
	</div>
	<div class="footer-message">
		<p>Designed and built by me (2022)</p>
		<p>with <a href="https://kit.svelte.dev" target="_blank" rel="noreferrer">SvelteKit</a></p>
	</div>
</footer>

<style lang="scss">
	.footer {
		border-top: 1px solid $color-sand-100;
		display: flex;
		flex-direction: column;
		align-items: center;
		height: 4rem;
		padding: 0.5rem;
	}

	.footer-socials {
		display: flex;
		flex-direction: row;

		.social-item a {
			color: $color-sand-100;
			margin-right: 0.5rem;
			font-size: 2rem;

			&:hover {
				color: $color-yellow;
			}

			&:active {
				color: $color-gold;
			}
		}

		.social-item:last-child a {
			margin-right: 0;
		}
	}

	.footer-message {
		display: flex;
		flex-direction: column;
		align-items: center;

		p {
			font-size: x-small;
			font-weight: 100;
			color: $color-sand-100;
		}
	}

	@media (min-width: $md-breakpoint) {
		.footer-socials .social-item a {
			font-size: 1.5rem;
		}
	}
</style>
