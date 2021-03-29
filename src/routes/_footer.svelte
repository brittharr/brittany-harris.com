<script>
	import { onMount } from 'svelte';
	import { library, dom } from '@fortawesome/fontawesome-svg-core';
	import { faFileAlt } from '@fortawesome/free-regular-svg-icons';
	import { faGithub, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

	library.add(faFileAlt);
	library.add(faGithub);
	library.add(faTwitter);
	library.add(faInstagram);
	library.add(faLinkedin);

	const twitter_username = 'brittharr';
	const github_username = 'brittharr';
	const instagram_username = 'brittharr_';
	const linkedin_username = 'brittharr';

	onMount(() => {
		dom.watch();
	});
</script>

<footer class="row">
	<div class="medium-centered columns">
		<ul class="social-media-list">
			<li>
				<a href="/assets/cv/brittanyharris-resume.pdf" target="_blank">
					<i class="far fa-file-alt" title="Resume" /></a
				>
			</li>

			{#if github_username}
				<li>
					<a href="https://github.com/{github_username}" target="_blank" rel="noopener">
						<i class="fab fa-github" title="Github" /></a
					>
				</li>
			{/if}

			{#if twitter_username}
				<li>
					<a href="https://twitter.com/{twitter_username}" target="_blank" rel="noopener">
						<i class="fab fa-twitter" title="Twitter" /></a
					>
				</li>
			{/if}

			{#if linkedin_username}
				<li>
					<a href="https://linkedin.com/in/{linkedin_username}" target="_blank" rel="noopener">
						<i class="fab fa-linkedin" title="Linkedin" /></a
					>
				</li>
			{/if}

			{#if instagram_username}
				<li>
					<a href="https://instagram.com/{instagram_username}" target="_blank" rel="noopener">
						<i class="fab fa-instagram" title="Instagram" /></a
					>
				</li>
			{/if}
		</ul>
	</div>
</footer>

<style lang="scss">
	.social-media-list {
		color: $primary-color;
	}
</style>
