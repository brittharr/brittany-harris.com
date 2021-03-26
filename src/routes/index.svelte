<script context="module">
	/**
	 * @type {import('@sveltejs/kit).Load}
	 */
	export async function load({ fetch }) {
		const [graphics, work] = await Promise.all([
			fetch(`/api/graphics.json`),
			fetch(`/api/work.json`)
		]);

		if (graphics.ok && work.ok) {
			return {
				props: {
					...(await graphics.json()),
					...(await work.json())
				}
			};
		}

		return {
			status: Math.min(graphics.status, work.status),
			error: new Error(`Could not load`)
		};
	}
</script>

<script>
	import { onMount } from 'svelte';
	import { description, title, url } from '$lib/constants';
	import { formatDescription } from '$lib/helpers';
	import GraphicsList from './_graphics-list.svelte';

	export let graphics;
	export let work;
	$: display_graphics = graphics.filter((d) => d.display === '1');
	$: evergreens = display_graphics.filter((d) => d.category === 'evergreen');
	$: events = display_graphics.filter((d) => d.category === 'event');
	$: stories = display_graphics.filter((d) => d.category === 'story');

	onMount(() => {
		document.body.classList.add('--home');

		return () => {
			document.body.classList.remove('--home');
		};
	});
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={formatDescription(description)} />
	<link rel="canonical" href={url} />
</svelte:head>

<div class="row" style="margin-bottom: 1rem;">
	<div class="medium-2 medium-offset-1 columns medium-text-right column-label">
		<h6 style="line-height: 1;">Bloomberg Graphics</h6>
	</div>
	<div class="medium-8 columns end">
		<p>
			My work at Bloomberg is varied and covers everything from publishing infrastructure and
			templating to breaking news graphics. I've munged data and created flexible interactive charts
			for data-driven evergreens: <GraphicsList graphics={evergreens} />. I've worked on
			high-pressure, high-volume reporting dashboards for events with real-time results, most
			recently the <GraphicsList graphics={events} />. I also get to help my fantastic data
			journalist and reporter colleagues create standalone stories such as <GraphicsList
				graphics={stories}
			/>.
		</p>
		<p>
			<a href="https://www.bloomberg.com/authors/AS07h2XMulM/brittany-harris"
				>See what I've been working on recently</a
			>.
		</p>
	</div>
</div>
<div class="row" style="margin-bottom: 1rem;">
	<div class="medium-2 medium-offset-1 columns medium-text-right column-label">
		<h6 style="line-height: 1;">Prior Consulting Work</h6>
	</div>
	<div class="medium-8 columns end">
		<div class="row small-up-2 large-up-3">
			{#each work as page}
				<div class="column" style="margin-bottom: 1rem;">
					<a class="post-link" href={page.url} title={page.title}
						><img src={page['thumbnail-url']} alt={page.title} /></a
					>
				</div>
			{/each}
		</div>
	</div>
</div>
