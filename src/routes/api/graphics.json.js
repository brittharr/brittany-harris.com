import { promises as fs } from 'fs';
import { csvParse } from 'd3-dsv';

/**
 * @type {import('@sveltejs/kit').RequestHandler}
 */
export async function get() {
	const graphics = await fs.readFile(`./_data/graphics.csv`, { encoding: 'utf-8' }).then(csvParse);

	return {
		body: {
			graphics
		}
	};
}
