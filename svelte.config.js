import adapter from '@sveltejs/adapter-static';
// const dev = process.argv.includes('dev');
export default {
	kit: {
		adapter: adapter({
			pages: 'courses',
			precompress: false,
			strict: true,
		}),
		paths: {
			base: '/courses',
			// relative: false,
			// assets: '/courses',
		}
	}
};