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
		// groq`*[_type == "page" && slug.current == "${slug}" && parentpage == true]`
	);
}

export async function getPageMenu(slug: string) {
	// console.log("getPageMenu", slug);
	
	return await client.fetch(
		groq`*[_type == "page" && slug.current == "${slug}" && parentpage == true]{childpage[]-> {slug, title} }`
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
