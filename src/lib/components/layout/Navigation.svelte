<script lang="ts">
	import { getPageHome, getPageMenu } from '$lib/utils/sanity';
	import { page } from '$app/stores'; 
    import Header from './Header.svelte';
    import MenuLink from '../MenuLink.svelte';
    import { browser } from '$app/environment';
	
	let currentPath = "";
	let currentMenu = "";
	let displayMobileMenu = false;
	const specialItems = [
		{slug: "uppdateringar", title: "Uppdateringar"},
		{slug: "sponsorer", title: "Sponsorer"}
	];

	$: reloadMenu = async () => {
		if(!browser) {
			return;
		}
		
		let previousHome = window.localStorage.getItem('home');
		
		let currentHome = await getPageHome(getPathMenu($page.url.pathname));
		window.localStorage.setItem('home', currentHome.title);
		
		// console.log("previousHome", previousHome);
		// console.log("currentHome", currentHome.title);
		// console.log("reload menu ", currentHome.title != previousHome);
		
		if(currentHome.title == previousHome) {
			// console.log("Reload menu: false");
			return false;
		} else if(currentHome.title != previousHome) {
			currentMenu = getPathMenu($page.url.pathname);
			// console.log("Reload menu: true");
			return true;
		} else {
			console.log("woah, that's weird");
		}
	}

	$: reloadMenu();
	$: console.log("reloadMenu", reloadMenu());
	
	$: currentPath = getPathName($page.url.pathname);
	

	function getPathName(path: string) {
		if(!path || path == "/") {
			return "/";
		} 
		return path.substring(1);
	}

	function getPathMenu(path: string) {
		let isSpecial = false;

		specialItems.forEach(specialPath => {
			if(path == "/"+specialPath.slug) {
				isSpecial = true;
			}
		});
		
		if(browser && !isSpecial) {
			window.localStorage.setItem('path', path);
		} else if(browser && isSpecial) {
			let previousPath = window.localStorage.getItem('path');
			if(previousPath) {
				return previousPath.substring(1);
			}
		} else if(!path || path == "/") {
			return "/";
		} 

		return path.substring(1);
	}


	function neatLinebreak(string:string) {
		const regExTitle = /(?:\d(?:\d*)|[A-ZÅÄÖØÆ](?:[A-ZÅÄÖØÆ]*))/g;
		let newString = string.replace(regExTitle, `&#8203;$&`);
		return newString;
	}

</script>

<Header bind:displayMobileMenu bind:currentPath />
  
<div class={displayMobileMenu?'openBackdrop':''}></div>
<nav class={displayMobileMenu?'openNav':''}>

	<h1><a href="/">Fun&#8203;Kit</a></h1>

	<a href="#main" class="a11yLink">Skippa menyn</a>

	{#await getPageMenu(currentMenu)}
		<p>loading menu</p>	

	{:then values} 
	<ul>
		{#await getPageHome(currentMenu)}
			<MenuLink bind:displayMobileMenu={displayMobileMenu} currentPath={currentPath} slug="/" title="Hem" linkMenuJump={false} />
		{:then value} 
			{#if value.slug != "/"}
				<MenuLink bind:displayMobileMenu={displayMobileMenu} currentPath={currentPath} slug={value.slug} title={value.title} linkMenuJump={false} />
			{:else}
				<MenuLink bind:displayMobileMenu={displayMobileMenu} currentPath={currentPath} slug={value.slug} title="Hem" linkMenuJump={false} />
			{/if}
		{/await}

		{#each values as linkData}
			<MenuLink bind:displayMobileMenu={displayMobileMenu} currentPath={currentPath} slug={linkData.slug} title={linkData.title} linkMenuJump={false} />
		{/each}

		<!-- special paths -->
		<MenuLink bind:displayMobileMenu={displayMobileMenu} currentPath={currentPath} slug={specialItems[0].slug} title={specialItems[0].title} linkMenuJump={true} />
		<MenuLink bind:displayMobileMenu={displayMobileMenu} currentPath={currentPath} slug={specialItems[1].slug} title={specialItems[1].title} linkMenuJump={false} />

		{#await getPageHome(currentMenu)}
			<span></span>
		{:then value} 
			{#if value.slug != "/"}
				<MenuLink bind:displayMobileMenu={displayMobileMenu} currentPath={currentPath} slug="/" title="Till startsidan" linkMenuJump={false} />
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
		width: 14rem;
		
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

    /* nav >:nth-child(2) {
        padding: 1rem 1rem;
        text-align: center;
    } */
	
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
	
	@media (max-width: 670px), (max-height: 400px) {

		nav {
			display: none;
			position: fixed;
			top: 5.5rem;
			bottom: 0.5rem;
			left: 1rem;
			right: 1rem;
			width: auto;
			/* height: 80dvh; */
			/* min-height: 80dvh; */
			max-width: 100vw;
			z-index: 15;
			background-color: #fafafa;
			border-radius: var(--border-radius);
			
		}

		nav >:nth-child(1) {
			display: none;
		}
		
		ul {
			flex: 1 1 auto;

			margin-bottom: 1rem;
			flex-wrap: wrap;	
			/* height: 100%; */
		}
		ul * {
			flex: 1 1 auto;
		}


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