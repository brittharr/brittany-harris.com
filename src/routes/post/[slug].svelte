<script>
	import { page } from '$app/stores';
	import { url } from '$lib/constants';
	import { formatDescription } from '$lib/helpers';

	export let title;
	export let description;
	export let content;
	export let date;
	export let author;
	export let meta;

	const formatDate = (date) =>
		date.toLocaleDateString('en', { month: 'short', day: 'numeric', year: 'numeric' });

	$: postMeta = [formatDate(date), author, meta].filter((d) => d).join(' • ');
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={formatDescription(description)} />
	<link rel="canonical" href="{url}{$page.path}" />
</svelte:head>

<div class="post">
	<header class="post-header">
		<h1 class="post-title">{title}</h1>
		<p class="post-meta">{postMeta}</p>
	</header>

	<article class="post-content">
		{content}
	</article>
</div>
