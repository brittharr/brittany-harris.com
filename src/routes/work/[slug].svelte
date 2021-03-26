<script context="module">
	/**
	 * @type {import('@sveltejs/kit).Load}
	 */
	export async function load({ page, fetch }) {
		const url = `/api/work/${page.params.slug}.json`;
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
	import { url, description as defaultDesc } from '$lib/constants';
	import { formatDescription } from '$lib/helpers';

	export let displaytitle;
	export let title;
	export let description = defaultDesc;
	export let technology;
	export let content;
	$: previousWorkUrl = $$props['previous-work-url'];
	$: previousWorkTitle = $$props['previous-work-title'];
	$: nextWorkUrl = $$props['next-work-url'];
	$: nextWorkTitle = $$props['next-work-title'];
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={formatDescription(description)} />
	<link rel="canonical" href="{url}{$page.path}" />
</svelte:head>

<div class="page">
	<header class="row">
		<div class="medium-11 medium-centered columns">
			<h2>{displaytitle ? displaytitle : title}</h2>
			{#if technology}<h6 class="subheader"><strong>Technology: </strong>{technology}</h6>{/if}
		</div>
	</header>

	<article class="row">
		<div class="medium-11 medium-centered columns">{@html content}</div>
	</article>

	<div class="row" style="margin-top: 2rem;">
		<div class="small-6 medium-5 medium-offset-1 columns">
			{#if previousWorkUrl}
				<a class="prev" href={previousWorkUrl}
					><i class="fa fa-chevron-left" /> {previousWorkTitle}</a
				>
			{:else}
				&nbsp;
			{/if}
		</div>
		<div class="small-6 medium-5 columns end" style="text-align: right;">
			{#if nextWorkUrl}
				<a class="next" href={nextWorkUrl}>{nextWorkTitle} <i class="fa fa-chevron-right" /></a>
			{/if}
		</div>
	</div>
</div>
