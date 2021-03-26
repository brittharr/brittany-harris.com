import { promises as fs } from 'fs';
import frontmatter from '@github-docs/frontmatter';
import marked from 'marked';

/**
 * @type {import('@sveltejs/kit').RequestHandler}
 */
export async function get({ params }) {
	const { type, slug } = params;

	const { data, content, errors } = await fs
		.readFile(`./_${type}/${slug}.md`, { encoding: 'utf-8' })
		.then(frontmatter)
		.catch((err) => {
			console.log('*', slug, err);
			return null;
		});

	if (errors.length) {
		console.log('!', slug, errors);
		return null;
	}

	return {
		body: {
			...data,
			content: marked(content)
		}
	};
}
