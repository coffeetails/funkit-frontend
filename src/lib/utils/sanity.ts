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

// Make sure this matches whats in the studio
// TODO: Check types
export interface Post {
	_type: 'event';
	name?: string;
	slug: Slug;
	eventType?: string;
	date?: Date; 
	doorsOpen?: number;
	venue: Reference;
	headline?: string;
	image?: ImageAsset;
	details?: Array<BlockComponentProps>
	tickets?: string;
}
