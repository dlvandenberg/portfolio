<script lang="ts">
	import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
	import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
</script>

<footer class="footer">
	<div class="footer__socials">
		<div class="footer__item">
			<a
				data-testid="footer-linkedin-link"
				class="footer__item__link"
				href="https://www.linkedin.com/in/dlvandenberg/">
				<FontAwesomeIcon icon={faLinkedin} />
			</a>
		</div>
		<div class="footer__item">
			<a
				data-testid="footer-github-link"
				class="footer__item__link"
				href="https://github.com/dlvandenberg">
				<FontAwesomeIcon icon={faGithub} />
			</a>
		</div>
	</div>
	<div class="footer__message">
		<p>Designed and built by me (2022-{new Date().getFullYear()})</p>
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

		&__socials {
			display: flex;
			flex-direction: row;
		}

		&__item__link {
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

		&__item:last-child {
			.footer__item__link {
				margin-right: 0;
			}
		}

		&__message {
			display: flex;
			flex-direction: column;
			align-items: center;

			p {
				font-size: x-small;
				font-weight: 100;
				color: $color-sand-100;
			}
		}
	}

	@media (min-width: $md-breakpoint) {
		.footer__item__link {
			font-size: 1.5rem;
		}
	}
</style>
