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
	<header class="row">
		<div class="medium-11 medium-centered columns">
			<h2>{status} {getReasonPhrase(status)}</h2>
		</div>
	</header>

	<article class="row">
		<div class="medium-11 medium-centered columns">
			{@html message}
		</div>
	</article>
</div>
