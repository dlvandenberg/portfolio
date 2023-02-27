<script lang="ts">
	import { page } from '$app/stores';
</script>

<div class="error">
	<h1 class="error__title">throwError()</h1>
	<h2 class="error__subtitle">Oopsie-poopsie! I got a {$page.status} with the message:</h2>
	<p class="error__message">{$page.error?.message}</p>
</div>

<style lang="scss">
	.error {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		align-items: center;

		&__title {
			@include dollar-title;
		}

		&__subtitle {
			@include dollar-subtitle;
		}

		&__message {
			@include border-box;
		}
	}
</style>
