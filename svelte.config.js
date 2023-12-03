import adapter from '@sveltejs/adapter-static';
// const dev = process.argv.includes('dev');

const DEPLOYMENT_BASE = "~njg4ne" || "courses"

export default {
	kit: {
		adapter: adapter({
			// pages: `${DEPLOYMENT_BASE}`,
			pages: "docs",
			precompress: false,
			strict: true,
		}),
		paths: {
			base: `/${DEPLOYMENT_BASE}`,
			// relative: false,
			// assets: '/courses',
		}
	}
};