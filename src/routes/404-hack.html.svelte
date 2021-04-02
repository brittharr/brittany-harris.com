<!-- This route is special so that 404.html page gets created for serving static pages -->
<script>
	import { getReasonPhrase } from 'http-status-codes';

	let status = 404;
	let message =
		'Uh Oh! Did you want to look at some cool <a href="/work/bny-reports">automated reports</a> instead of this blank page?';
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
