import type { PortableTextBlock } from '@portabletext/types';
import { createClient, type QueryParams } from '@sanity/client';
import type { ImageAsset, Reference, Slug } from '@sanity/types';
import groq from 'groq';
import { PUBLIC_SANITY_DATASET, PUBLIC_SANITY_PROJECT_ID } from '$env/static/public';
import type { BlockComponentProps } from '@portabletext/svelte';

if (!PUBLIC_SANITY_PROJECT_ID || !PUBLIC_SANITY_DATASET) {
	throw new Error('Did you forget to run sanity init --env?');
}


export const client = createClient({
	projectId: PUBLIC_SANITY_PROJECT_ID,
	dataset: PUBLIC_SANITY_DATASET,
	useCdn: false, // `false` if you want to ensure fresh data
	apiVersion: '2024-01-01' // date of setup
});


export async function getPage(slug: string) {
	// console.log("getPage", slug);
	
	return await client.fetch(
		groq`*[_type == "page" && slug.current == "${slug}"]`
		// groq`*[_type == "page" && slug.current == "${slug}" && isParentPage == true]`
	);
}

export async function getPageMenu(currentPageSlug: string) {
	// // // // // //\\ \\ \\ \\ \\ \\
	// TODO: Add "home" to the menu \\
	// TODO: Add "back to start"	\\
	// // // // // //\\ \\ \\ \\ \\ \\

	console.log("currentPageSlug:", currentPageSlug);
	
	// CURRENT PAGE MENU
	let currentPageMenu = await client.fetch(
		groq`*[_type == "page" && parentPage->slug.current == "${currentPageSlug}"]{title, slug}`
	);
	console.log("currentPageMenu:", currentPageMenu);
	if(currentPageMenu.length > 0) {
		return currentPageMenu;
	}

	// CHECK PARENT PAGE
	let fetchParentPageSlug = await client.fetch(
		groq`*[_type == "page" && slug.current == "${currentPageSlug}"]{parentPage->{slug}}`
	)
	const parentPageSlug = fetchParentPageSlug[0].parentPage?.slug.current;
	console.log("parentPageSlug:", parentPageSlug);

	// PARENT PAGE MENU
	if (parentPageSlug) {
		let parentPageMenu = await client.fetch(
			groq`*[_type == "page" && parentPage->slug.current == "${parentPageSlug}"]{title, slug}`
		);
		console.log("parentPageMenu:", parentPageMenu);
		if(parentPageMenu.length > 0) {
			return parentPageMenu;
		}
	}

	return await client.fetch(
		groq`*[_type == "page" && parentPage->slug.current == "/"]{title, slug}`
	);
}

export async function getSponsors() {
	return await client.fetch(
		groq`*[_type == "sponsor"]{
			name,
  			"imageSrc": image.asset->url,
            "imageAlt":image.alt,
			details,
			link}`
	);
}

export async function getPosts() {
	return await client.fetch(
		groq`*[_type == "event" && defined(slug.current)]|order(date desc)`
		// groq`*[_type == "event" && defined(slug.current)] | order(_createdAt desc)`
	);
}

export async function getPost(slug: string) {
	return await client.fetch(groq`*[_type == "event" && slug.current == $slug][0]`, {
		slug
	});
}
