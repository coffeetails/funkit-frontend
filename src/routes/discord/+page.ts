import { getSocialmedia } from '$lib/utils/sanity';
import { error, redirect } from '@sveltejs/kit';
import type { PageLoad } from './$types';


export const load = (async ({ params }) => {

    console.log("params", params);
    
    const data = await getSocialmedia();
    console.log(data.socialmedialinks);
    
    for(let social of data.socialmedialinks) {
        if(social.title.toLowerCase() == "discord") {
            console.log(social);
            redirect(302, social.link);
        } else {
            console.log(social);
        }
    }
    
    throw error(404, 'Page not found');
}) satisfies PageLoad;