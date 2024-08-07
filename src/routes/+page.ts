import { getPage } from '$lib/utils/sanity';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load = (async ({ params }) => {
	const page = await getPage("/");

	if (page) {
		console.log("page load", page);
		return {
			page
		};
	}

	throw error(404, 'Not found');
}) satisfies PageLoad;
