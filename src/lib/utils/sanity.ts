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


export async function getSocialmedia() {
	return await client.fetch(
		groq`*[_type == "settings"] [0] {socialmedialinks}`
	);
}

export async function getMascot() {
	return await client.fetch(
		groq`*[_type == "settings"] [0] {thumbnailImage}`
	);
}

export async function getSponsors() {
	return await client.fetch(
		groq`*[_type == "sponsor"]`
	);
}

export async function getLatestUpdate() {
	return await client.fetch(
		groq`*[_type == "updates"] | order(_createdAt desc) [0] {title, content, "created": _createdAt, "updated": _updatedAt, "slug": slug.current}`
	);
}

export async function getUpdate(slug: string) {
	return await client.fetch(
		groq`*[_type == "updates" && slug.current == "${slug}"] {title, content, "created": _createdAt, "updated": _updatedAt, "slug": slug.current}`
	);
}

export async function getUpdates() {
	return await client.fetch(
		groq`*[_type == "updates"] | order(_createdAt desc) {title, content, "created": _createdAt, "updated": _updatedAt, "slug": slug.current}`
	);
}


export async function getPage(slug: string) {
	return await client.fetch(
		groq`*[_type == "page" && slug.current == "${slug}"] {
			title, slug, imagesTop, content, imagesBottom,
			parentPage->{title, slug},
			pageBuilder[]->{_type, title, image, alt, links, description}
		}`
	);
}


export async function getBaseHome() {
	return await client.fetch(
		groq`*[_type == "page" && slug.current == "/"]{title, slug}`
	);
}


export async function getPageHome(currentPageSlug: string) {

	// IF current page IS parentPage
	// DO show current as pageHome
	// IF current page HAS parentPage
	// DO show parentPage as pageHome
	// IF NEITHER show previous pageHome
	// FALLBACK to "/";
	
	// CURRENT PAGE HOME
	let currentPageHome = await client.fetch(
		groq`*[_type == "page" && parentPage->slug.current == "${currentPageSlug}"]{parentPage->{"title":title, "slug":slug.current}}`
	);
	
	if(currentPageHome.length > 0) {
		return currentPageHome[0].parentPage;
	}

	// PARENT PAGE HOME
	let parentPageHome = await client.fetch(
		groq`*[_type == "page" && slug.current == "${currentPageSlug}"]
			{"title":title,
			"slug":slug.current,
			parentPage->{ "title":title, "slug":slug.current }}`
	)
	
	if(parentPageHome[0]) {
		return parentPageHome[0].parentPage;
	}

	// FALLBACK TO HOME MENU
	let fallback = await client.fetch(
		groq`*[_type == "page" && slug.current == "/"]{"title":title, "slug":slug.current}`
	);
	// console.log("return fallback, '/' menu", fallback[0]);
	return fallback[0];
}


export async function getPageMenu(currentPageSlug: string) {
	// CURRENT PAGE MENU
	let currentPageMenu = await client.fetch(
		groq`*[_type == "page" && parentPage->slug.current == "${currentPageSlug}"]{"title": title, "slug": slug.current}`
	);
	
	if(currentPageMenu.length != 0) {
		return currentPageMenu;
	}

	// CHECK PARENT PAGE
	let fetchParentPageSlug = await client.fetch(
		groq`*[_type == "page" && slug.current == "${currentPageSlug}"]{parentPage->{slug}}`
	)

	// PARENT PAGE MENU
	if (fetchParentPageSlug[0]) {
		const parentPageSlug = fetchParentPageSlug[0].parentPage?.slug.current;

		let parentPageMenu = await client.fetch(
			groq`*[_type == "page" && parentPage->slug.current == "${parentPageSlug}"]{"title": title, "slug": slug.current}`
		);

		if(parentPageMenu.length > 0) {
			return parentPageMenu;
		}
	}

	// FALLBACK TO HOME MENU
	return await client.fetch(
		groq`*[_type == "page" && parentPage->slug.current == "/"]{"title": title, "slug": slug.current}`
	);
}
