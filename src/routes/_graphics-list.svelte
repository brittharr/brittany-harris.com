<script>
	export let graphics = [];

	const trailingComma = (addComma) => (addComma ? ', ' : '');
</script>

{#each graphics as { slug, hed }, i}
	{#if i === graphics.length - 1} and {/if}
	<a class="post-link" href="https://www.bloomberg.com/{slug}">{hed}</a>{trailingComma(
		i < graphics.length - 1
	)}
{/each}
