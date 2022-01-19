<script>
	import { dev } from '$app/env';
	import { getReasonPhrase } from 'http-status-codes';

	export let status;
	export let error;

	$: message = dev
		? `<pre>${error.stack}</pre>`
		: 'Uh Oh! Did you want to look at some cool <a href="/work/bny-reports">automated reports</a> instead of this blank page?';
</script>

<div class="page">
	<header class="grid-x grid-margin-x">
		<div class="cell">
			<h2>{status} {getReasonPhrase(status)}</h2>
		</div>
	</header>

	<article class="grid-x grid-margin-x">
		<div class="cell">
			{@html message}
		</div>
	</article>
</div>
