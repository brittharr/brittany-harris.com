import { promises as fs } from 'fs';
import path from 'path';
import frontmatter from '@github-docs/frontmatter';

/**
 * @type {import('@sveltejs/kit').RequestHandler}
 */
export async function get() {
	const work = await fs.readdir(`./_work`).then((files) => {
		return Promise.all(
			files.map(async (filename) => {
				const { data } = await fs
					.readFile(path.join('./_work', filename), { encoding: 'utf-8' })
					.then(frontmatter);

				return {
					...data,
					url: `/work/${path.basename(filename, '.md')}`
				};
			})
		);
	});

	return {
		body: {
			work
		}
	};
}
