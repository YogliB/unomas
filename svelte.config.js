import preprocess from 'svelte-preprocess';
import windicss from 'svelte-windicss-preprocess';
const { windi } = windicss;

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		preprocess({
			defaults: {
				script: 'typescript',
				style: 'scss',
			},
		}),
		windi({}),
	],

	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
	},
};

export default config;
