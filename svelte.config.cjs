const sveltePreprocess = require('svelte-preprocess');
const staticAdaptor = require('@sveltejs/adapter-static');
const pkg = require('./package.json');
const fs = require('fs');

const pages = [
	'*',
	'/404-hack.html',
	fs.readdirSync('_projects').map((filename) => `/projects/${filename.replace('.md', '')}`),
	fs.readdirSync('_work').map((filename) => `/work/${filename.replace('.md', '')}`)
].flat();

/** @type {import('@sveltejs/kit').Config} */
module.exports = {
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
			pages
		},

		target: '#svelte',

		vite: {
			ssr: {
				noExternal: Object.keys(pkg.dependencies || {})
			}
		}
	}
};
