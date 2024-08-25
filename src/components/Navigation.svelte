<script lang="ts">
	import { getBaseHome, getPageHome, getPageMenu } from '$lib/utils/sanity';
	import { page } from '$app/stores'; 
    import Header from './Header.svelte';
	
	let currentPath = "";
	$: currentPath = getPathName($page.url.pathname);
	let displayMobileMenu = false;

	function getPathName(path: string) {
		if(!path || path == "/") {
			return "/";
		} 
		return path.substring(1);
	}
	
	function neatLinebreak(string:string) {
		const regExTitle = /(?:\d(?:\d*)|[A-ZÅÄÖØÆ](?:[A-ZÅÄÖØÆ]*))/g;
		let newString = string.replace(regExTitle, `&#8203;$&`);
		// console.log("newString", newString);
		return newString;
	}

</script>

<!-- FIXME: IMPORTANT: Add a "skip to content" link for A11Y - 1day -->
<!-- TODO: IMPORTANT: Add a "back to funkit" link for sub-menues - 1day -->
<!-- TOTO: IMORTANT: Add dynamic "home" button -->

<Header bind:displayMobileMenu />

<nav class={displayMobileMenu?'open':''}>
	
	{#await getPageHome(currentPath)}
	<h1><a href="/">Fun&#8203;Kit</a></h1>
	{:then value}
		<h1><a href={value.slug != "/" ? "/"+value.slug : "/"}>{@html neatLinebreak(value.title)}</a></h1>
	{/await}

	<h3>Meny</h3>
	
	{#await getPageMenu(currentPath)}
		<p>loading menu</p>		
	{:then values} 
	<ul>
		
		{#await getPageHome(currentPath)}
			<li><a href={`/`} on:click={() => displayMobileMenu = false}>Hem</a></li>
		{:then value} 
			<!-- {JSON.stringify(value)} -->
			<!-- {value.slug != "/" ? "/"+value.slug : "/"} -->
			<li><a href={value.slug != "/" ? "/"+value.slug : "/"} on:click={() => displayMobileMenu = false}>Hem</a></li>
		{/await}

			{#each values as linkData}
				<li><a href={`/${linkData.slug}`} on:click={() => displayMobileMenu = false}>{linkData.title}</a></li>
			{/each}
			<li><a href={`/sponsorer`} on:click={() => displayMobileMenu = false}>Sponsorer</a></li>

			{#if currentPath != "/"}
				<li><a href={`/`} on:click={() => displayMobileMenu = false}>Till startsidan</a></li>
			{/if}
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
        padding: 1rem 0.5rem;
        font-size: 2.5rem;
        text-align: left;
		line-height: 2.75rem;
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
		/* word-wrap: break-word; */
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