<script context="module">
	/**
	 * @type {import('@sveltejs/kit).Load}
	 */
	export async function load({ params, fetch }) {
		const url = `/api/work/${params.slug}.json`;
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
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { url, description as defaultDesc } from '$lib/constants';
	import { formatDescription } from '$lib/helpers';
	import { library, dom } from '@fortawesome/fontawesome-svg-core';
	import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

	library.add(faChevronRight);
	library.add(faChevronLeft);

	export let displaytitle;
	export let title;
	export let description = defaultDesc;
	export let technology;
	export let content;
	$: previousWorkUrl = $$props['previous-work-url'];
	$: previousWorkTitle = $$props['previous-work-title'];
	$: nextWorkUrl = $$props['next-work-url'];
	$: nextWorkTitle = $$props['next-work-title'];

	onMount(() => {
		dom.watch();
	});
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={formatDescription(description)} />
	<link rel="canonical" href="{url}{$page.url.pathname}" />
</svelte:head>

<header class="grid-x grid-margin-x">
	<div class="cell">
		<h2>{displaytitle ? displaytitle : title}</h2>
		{#if technology}<h6 class="subheader"><strong>Technology: </strong>{technology}</h6>{/if}
	</div>
</header>

<article class="grid-x grid-margin-x">
	<div class="cell">{@html content}</div>
</article>

<div class="grid-x grid-margin-x navigation">
	<div class="cell small-auto medium-4 medium-offset-1">
		{#if previousWorkUrl}
			<a class="prev" href={previousWorkUrl}><i class="fa fa-chevron-left" /> {previousWorkTitle}</a
			>
		{:else}
			&nbsp;
		{/if}
	</div>
	<div class="cell small-auto medium-4 medium-offset-1 text-right">
		{#if nextWorkUrl}
			<a class="next" href={nextWorkUrl}>{nextWorkTitle} <i class="fa fa-chevron-right" /></a>
		{/if}
	</div>
</div>

<style lang="scss">
	.navigation {
		@include margin(2, null, null, null);
	}
</style>
