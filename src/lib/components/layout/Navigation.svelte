<script lang="ts">
	import { getPageHome, getPageMenu } from '$lib/utils/sanity';
	import { page } from '$app/stores'; 
    import Header from './Header.svelte';
    import MenuLink from '../MenuLink.svelte';
	
	let currentPath = "";
	
	$: currentPath = getPathName($page.url.pathname);
	let displayMobileMenu = false;
	// console.log("currentPath: ", currentPath);
	
	
	function getPathName(path: string) {
		if(!path || path == "/") {
			// window.localStorage.setItem('currentPath', "/");
			return "/";
		} 
		// window.localStorage.setItem('currentPath', path.substring(1));
		return path.substring(1);
	}
	
	function neatLinebreak(string:string) {
		const regExTitle = /(?:\d(?:\d*)|[A-ZÅÄÖØÆ](?:[A-ZÅÄÖØÆ]*))/g;
		let newString = string.replace(regExTitle, `&#8203;$&`);
		console.log("neatLinebreak", newString);
		return newString;
	}

	// if currentPath != "Sponsorer", "Nyheter", "Annan-Specialsida" {
	// 		const setLocalstorage = (data: string) => window.localStorage.setItem('currentPath', currentPath);
	// }
</script>


<Header bind:displayMobileMenu bind:currentPath />
  
<div class={displayMobileMenu?'openBackdrop':''}></div>
<nav class={displayMobileMenu?'openNav':''}>
	
	{#await getPageHome(currentPath)}
	<h1><a href="/">Fun&#8203;Kit</a></h1>
	{:then value}
		<h1><a href={value.slug != "/" ? "/"+value.slug : "/"}>{@html neatLinebreak(value.title)}</a></h1>
	{/await}

	<!-- <h3>Meny</h3> -->
	<a href="#main" class="a11yLink">Skippa menyn</a>

	{#await getPageMenu(currentPath)}
		<p>loading menu</p>	

	{:then values} 
	<ul>
		{#await getPageHome(currentPath)}
			<MenuLink displayMobileMenu={displayMobileMenu} currentPath={currentPath} slug="/" title="Hem" linkMenuJump={false} />
		{:then value} 
			<MenuLink displayMobileMenu={displayMobileMenu} currentPath={currentPath} slug={value.slug} title="Hem" linkMenuJump={false} />
		{/await}

		{#each values as linkData}
			<MenuLink displayMobileMenu={displayMobileMenu} currentPath={currentPath} slug={linkData.slug} title={linkData.title} linkMenuJump={false} />
		{/each}

		<MenuLink displayMobileMenu={displayMobileMenu} currentPath={currentPath} slug="uppdateringar" title="Uppdateringar" linkMenuJump={true} />
		<MenuLink displayMobileMenu={displayMobileMenu} currentPath={currentPath} slug="sponsorer" title="Sponsorer" linkMenuJump={false} />

		{#await getPageHome(currentPath)}
			<span></span>
		{:then value} 
			{#if value.slug != "/"}
				<MenuLink displayMobileMenu={displayMobileMenu} currentPath={currentPath} slug="/" title="Till startsidan" linkMenuJump={false} />
			{/if}
		{/await}
	</ul>
	
	{:catch error}
		<p>Something went wrong: {error.message}</p>
	{/await}

</nav>

<style>

	/* TODO: add the cool "bubble" to indicate what page you're on - 1week */

	div {
		position: absolute;
		top: 0;
		left: 0;
	}

	nav {
		margin: 0.25rem;
		border: var(--border-style);
		border-radius: var(--small-border-radius);
		border-top-left-radius: var(--border-radius);
		border-bottom-left-radius: var(--border-radius);
		padding: 0.5rem 1rem;
		background-color: #fafafa75;
		width: fit-content;
		max-width: 15rem;
		
		display: flex;
		flex-direction: column;
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
	
	ul {
		display:flex;
		flex-direction: column;
		height: 100%;
	}
    ul, li {
		position: relative;
        list-style-type: none;
		padding: 0.25rem 0;
		margin: 0;
	}
	
@media (max-width: 670px) {

    nav {
        display: none;
        position: fixed;
        top: 5.5rem;
        bottom: 0.5rem;
        left: 1rem;
        right: 1rem;
        width: auto;
		min-height: 80dvh;
		max-width: 100vw;
        z-index: 15;
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

	ul {
		height: 100%;
	}
	/* li {
		margin: 0.5rem 1rem;
	} */

	.openNav {
		display: flex;
	}
	:global(body):has(.openNav) {
		overflow: hidden;
	}
	.openBackdrop { 
		z-index: 10;
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		background-color: #131a24d6;
		background-image: url(background.svg);
	}
}
</style>