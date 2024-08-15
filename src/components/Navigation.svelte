<script lang="ts">
	import { getPageMenu, getPageMenuWIP } from '$lib/utils/sanity';
	import { page } from '$app/stores'; 
    import Header from './Header.svelte';
	import { getPage } from '$lib/utils/sanity';

	let displayMobileMenu = false;

	// let dynamicMenu = async () => {
	async function dynamicMenu() {
		let pageDataNav = await getPageMenuWIP($page.params.slug);
		console.log("DynamicMenu: pageDataNav", pageDataNav);
		
		// NOTE: When on startpage pageDataNav is returned empty
		// if(pageDataNav.length == 0) {
		// 	console.log("return", pageDataNav.childpage);
		// 	return pageDataNav.childpage;
		// } 
		
		if(pageDataNav[0]) {
			console.log("DynamicMenu: Slug", pageDataNav[0].slug.current);
			console.log("DynamicMenu: isParentPage", pageDataNav[0].isParentPage);

			if(pageDataNav[0].isParentPage) {
				console.log("return", pageDataNav[0].childpage);
				
				return pageDataNav[0].childpage;
			}
		}
		
		if(pageDataNav.length > 1) {
			console.log("wait what, why is pageDataNav longer than expected?", pageDataNav);
			
		}
	}
	console.log(dynamicMenu());
	
	// console.log("$page",$page.params.slug);
	
	// Note to self: 
	// $page.route.id might be a good way to see if I'm
	// currently at a top level page or a sub page, since
	// there will be multple levels of pages due to 
	// events having their own menu.
	
</script>

<!-- FIXME: IMPORTANT: Add a "skip to content" link for A11Y - 1day -->
<!-- TODO: IMPORTANT: Add a "back to funkit" link for sub-menues - 1day -->

<Header bind:displayMobileMenu />

<nav class={displayMobileMenu?'open':''}>
	<h1><a href="/">Fun&#8203;Kit</a></h1>
	<h3>Meny</h3>

	<!-- {#await dynamicMenu()} -->
	<!-- {#await getPageMenu(dynamicMenu)} -->
	{#await getPageMenu("/")}
		<p>loading menu</p>		
	{:then values} 
		<ul>
			<li><a href={`/`} on:click={() => displayMobileMenu = false}>Hem</a></li>
			{#each values[0].childpage as page}
				<li><a href={`/${page.slug.current}`} on:click={() => displayMobileMenu = false}>{page.title}</a></li>
			{/each}
			<li><a href={`/sponsorer`} on:click={() => displayMobileMenu = false}>Sponsorer</a></li>

			<li><a href={`/`} on:click={() => displayMobileMenu = false}>Tillbaka</a></li>
		</ul>
	{:catch error}
		<p>Something went wrong: {error.message}</p>
	{/await}

</nav>

<style>

	/* FIXME: add wordbreak for sites with long name - 1day */
	/* TODO: add the cool "bubble" to indicate what page you're on - 1week */

	nav {
		margin: 0.25rem;
		border: var(--border-style);
		border-radius: var(--small-border-radius);
		border-top-left-radius: var(--border-radius);
		border-bottom-left-radius: var(--border-radius);
		padding: 0.5rem 1rem;
		background-color: #fafafa75;
		/* min-width: 10rem; */
		width: fit-content;
		max-width: 15rem;
	}
    
    nav >:nth-child(1) {
        padding: 1rem 0rem;
        font-size: 3rem;
        text-align: center;
    }
	nav >:nth-child(1) a {
		font-family: "Lemon", serif;
		border: none;
	}
	nav >:nth-child(1) a:hover {
		border: none;
		background-color: transparent;
		color: var(--black);
	}

    nav >:nth-child(2) {
        padding: 1rem 1rem;
        text-align: center;
    }
    
    ul, li {
        list-style-type: none;
		padding: 0.25rem 0;
		margin: 0;
	}

	li a {
		display: inline-block;
		width: 100%;
		font-family: "Lemon", serif;
		border-bottom-color: transparent;
	}
	li a:hover {
		border: 2px solid var(--black);
	}

@media (max-width: 670px) {

    nav {
        display: none;
		/* opacity: 0; */
        position: absolute;
        top: 5rem;
        bottom: 0.5rem;
        left: 0.5rem;
        right: 0.5rem;
        width: auto;
		max-width: 100vw;
        z-index: 5;
        background-color: #fafafa;
        border-radius: var(--border-radius);
	}

	nav >:nth-child(1) {
		display: none;
	}
	nav >:nth-child(2) {
		padding: 1rem 1rem;
		text-align: center;
		font-size: 2rem;
	}

	li {
		margin: 0.5rem 1rem;
	}

	.open {
		display: block;
	}
}
</style>