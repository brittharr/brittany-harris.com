<script>
	const twitter_username = 'brittharr';
	const github_username = 'brittharr';
	const instagram_username = 'brittharr_';
	const linkedin_username = 'brittharr';
</script>

<footer class="row">
	<div class="medium-centered columns">
		<ul class="social-media-list">
			<li>
				<a
					href="/assets/cv/brittanyharris-resume.pdf"
					target="_blank"
					class="fa fa-file-text"
					title="Resume"
				/>
			</li>

			{#if github_username}
				<li>
					<a
						href="https://github.com/{github_username}"
						target="_blank"
						rel="noopener"
						class="fa fa-github fa-lg"
						title="Github"
					/>
				</li>
			{/if}

			{#if twitter_username}
				<li>
					<a
						href="https://twitter.com/{twitter_username}"
						target="_blank"
						rel="noopener"
						class="fa fa-twitter fa-lg"
						title="Twitter"
					/>
				</li>
			{/if}

			{#if linkedin_username}
				<li>
					<a
						href="https://linkedin.com/in/{linkedin_username}"
						target="_blank"
						rel="noopener"
						class="fa fa-linkedin-square fa-lg"
						title="Linkedin"
					/>
				</li>
			{/if}

			{#if instagram_username}
				<li>
					<a
						href="https://instagram.com/{instagram_username}"
						target="_blank"
						rel="noopener"
						class="fa fa-instagram fa-lg"
						title="Instagram"
					/>
				</li>
			{/if}
		</ul>
	</div>
</footer>
