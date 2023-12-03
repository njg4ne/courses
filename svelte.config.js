import adapter from '@sveltejs/adapter-static';
// const dev = process.argv.includes('dev');
export default {
	kit: {
		adapter: adapter({
			pages: 'docs',
			precompress: false,
			strict: true,
		}),
		paths: {
			base: '/courses',
			relative: false,
		}
	}
};