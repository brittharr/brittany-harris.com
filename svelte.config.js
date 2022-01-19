import sveltePreprocess from 'svelte-preprocess';
import staticAdaptor from '@sveltejs/adapter-static';
import fs from 'fs';

const pkg = JSON.parse(fs.readFileSync('./package.json'));

const entries = [
	'*',
	'/404-hack.html',
	fs.readdirSync('_projects').map((filename) => `/projects/${filename.replace('.md', '')}`),
	fs.readdirSync('_work').map((filename) => `/work/${filename.replace('.md', '')}`)
].flat();

/** @type {import('@sveltejs/kit').Config} */
export default {
	preprocess: sveltePreprocess({
		scss: {
			includePaths: ['src/css', 'node_modules/foundation-sites/scss'],
			prependData: `
@import 'settings.colors';
@import 'settings.global';
@import 'settings/settings';
@import 'prototype/prototype';
`
		}
	}),
	kit: {
		adapter: staticAdaptor(),

		prerender: {
			crawl: true,
			entries
		},

		target: '#svelte',

		vite: {
			ssr: {
				noExternal: Object.keys(pkg.dependencies || {})
			}
		}
	}
};
