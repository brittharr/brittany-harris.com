module.exports = {
	root: true,
	extends: ['eslint:recommended', 'prettier'],
	plugins: ['svelte3'],
	overrides: [{ files: ['*.svelte'], processor: 'svelte3/svelte3' }],
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 2018
	},
	env: {
		browser: true,
		node: true,
		es6: true
	},
	// See: https://github.com/sveltejs/eslint-plugin-svelte3#svelte3ignore-styles
	settings: {
		'svelte3/ignore-styles': (d) => d.type || d.lang
	}
};
