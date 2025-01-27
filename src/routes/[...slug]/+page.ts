import { getPage, getSocialmedia } from '$lib/utils/sanity';
import { error, redirect } from '@sveltejs/kit';
import type { PageLoad } from './$types';


export const load = (async ({ params }) => {

    const page = await getPage(params.slug);

    console.log("page", page);
    
    const data = await getSocialmedia();
    
    let i = 1;
    for(let social of data.socialmedialinks) {
        if(social.title.toLowerCase() == params.slug) {
            redirect(302, social.link);
        } else if(i == data.socialmedialinks.length) {
            return { page }
        }
        i++;
    }
    
    throw error(404, 'Page not found');
}) satisfies PageLoad;