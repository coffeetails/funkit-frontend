import { getPage, getSponsors } from '$lib/utils/sanity';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';


export const load = (async ({ params }) => {
    console.log("params", params);
    
    const page = await getPage(params.topslug);

    const sponsors = await getSponsors();
    

    if (page) {
        // console.log("page load", page); 
        return {
            page,sponsors
        };
    }

    throw error(404, 'Page not found');
}) satisfies PageLoad;