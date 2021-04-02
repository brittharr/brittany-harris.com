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
	import { description, title, url } from '$lib/constants';
	import { formatDescription } from '$lib/helpers';
	import GraphicsList from './_graphics-list.svelte';

	export let graphics;
	export let work;
	$: display_graphics = graphics.filter((d) => d.display === '1');
	$: evergreens = display_graphics.filter((d) => d.category === 'evergreen');
	$: events = display_graphics.filter((d) => d.category === 'event');
	$: stories = display_graphics.filter((d) => d.category === 'story');
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={formatDescription(description)} />
	<link rel="canonical" href={url} />
</svelte:head>

<div class="grid-x grid-margin-x">
	<div class="medium-2 medium-offset-1 cell medium-text-right column-label">
		<h2 class="h6">Bloomberg Graphics</h2>
	</div>
	<div class="cell medium-8">
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
<div class="grid-x grid-margin-x">
	<div class="medium-2 medium-offset-1 cell medium-text-right column-label">
		<h2 class="h6">Prior Consulting Work</h2>
	</div>
	<div class="cell medium-8">
		<div class="grid-x grid-margin-x small-up-2 medium-up-3">
			{#each work as page}
				<div class="cell">
					<a class="post-link" href={page.url} title={page.title}
						><img src={page['thumbnail-url']} alt={page.title} /></a
					>
				</div>
			{/each}
		</div>
	</div>
</div>

<style lang="scss">
	.h6 {
		line-height: 1;
	}

	.column-label {
		text-transform: uppercase;
	}

	.grid-x {
		@include margin(1, null, null, null);
	}

	.post-link > img {
		margin-bottom: 0.9375rem * 2;
	}
</style>
