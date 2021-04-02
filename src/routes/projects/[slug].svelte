<script context="module">
	/**
	 * @type {import('@sveltejs/kit).Load}
	 */
	export async function load({ page, fetch }) {
		const url = `/api/projects/${page.params.slug}.json`;
		const res = await fetch(url);

		if (res.ok) {
			return {
				props: {
					...(await res.json())
				}
			};
		}

		return {
			status: res.status,
			error: new Error(`Could not load ${url}`)
		};
	}
</script>

<script>
	import { page } from '$app/stores';
	import { description, url } from '$lib/constants';
	import { formatDescription } from '$lib/helpers';

	export let title;
	export let content;
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={formatDescription(description)} />
	<link rel="canonical" href="{url}{$page.path}" />
</svelte:head>

<div class="grid-x grid-margin-x">
	<h6 class="cell subheader">
		Hey! Thanks for visiting. This is an older project that I worked on while in school. If you want
		to see what I've been up to recently, <a href="/">visit my new homepage.</a>
	</h6>
</div>

<header class="grid-x grid-margin-x">
	<div class="cell">
		<h2>{title}</h2>
	</div>
</header>

<article class="grid-x grid-margin-x">
	<div class="cell">{@html content}</div>
</article>
