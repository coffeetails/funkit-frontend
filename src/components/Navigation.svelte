<script lang="ts">
	import { getBaseHome, getPageHome, getPageMenu } from '$lib/utils/sanity';
	import { page } from '$app/stores'; 
    import Header from './Header.svelte';
	
	let currentPath = "";
	
	$: currentPath = getPathName($page.url.pathname);
	let displayMobileMenu = false;
	console.log("currentPath: ", currentPath);
	

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


<Header bind:displayMobileMenu bind:currentPath />
  

<div class={displayMobileMenu?'openBackdrop':''}>
</div>
<nav class={displayMobileMenu?'openNav':''}>
	
	{#await getPageHome(currentPath)}
	<h1><a href="/">Fun&#8203;Kit</a></h1>
	{:then value}
		<h1><a href={value.slug != "/" ? "/"+value.slug : "/"}>{@html neatLinebreak(value.title)}</a></h1>
	{/await}

	<h3>Meny</h3>
	<a href="#main" class="a11yLink">Skippa menyn</a>

	{#await getPageMenu(currentPath)}
		<p>loading menu</p>		
	{:then values} 
	<ul>
		
		{#await getPageHome(currentPath)}
		<li><a href={`/`} on:click={() => displayMobileMenu = false}>Hem</a></li>
		{:then value} 
			<li class:active={currentPath == value.slug}>
				<a href={value.slug != "/" ? "/"+value.slug : "/"} on:click={() => displayMobileMenu = false}>Hem</a>
			</li>
		{/await}

			{#each values as linkData}
				<li class:active={currentPath == linkData.slug}>
					<a href={`/${linkData.slug}`} on:click={() => displayMobileMenu = false} >{@html neatLinebreak(linkData.title)}</a>
				</li>
			{/each}

			<li class:active={currentPath == "sponsorer"} style="margin-top: 75%;">
				<a href={`/sponsorer`} on:click={() => displayMobileMenu = false} >Sponsorer</a>
			</li>

			{#await getPageHome(currentPath)}
				<span></span>
			{:then value} 
				{#if value.slug != "/"}
					<li><a href={`/`} on:click={() => displayMobileMenu = false}>Till startsidan</a></li>
				{/if}
			{/await}

		</ul>
	{:catch error}
		<p>Something went wrong: {error.message}</p>
	{/await}

</nav>
<!-- </div> -->

<style>

	/* TODO: add the cool "bubble" to indicate what page you're on - 1week */

	div {
		position: absolute;
		top: 0;
		left: 0;
	}

	nav {
		/* grid-row: -1/span -2; */
		/* height: 100%; */
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
	
	li {
		flex-grow: 1;
	}
    ul, li {
		position: relative;
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

	.active:before {
		content: "🌸";
		position: absolute;
		left: -2rem;
		height: 1.5rem;
		width: 1.5rem;
		text-align: center;
		background-color: #fafafa;
		border-radius: 2rem;
		border: var(--border-style)
	}

@media (max-width: 670px) {

    nav {
        display: none;
		/* opacity: 0; */
        position: absolute;
        /* position: sticky; */
        top: 5.5rem;
        bottom: 0.5rem;
        left: 0.5rem;
        right: 0.5rem;
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

	li {
		margin: 0.5rem 1rem;
	}

	.openNav {
		display: block;
	}
	:global(body):has(.openNav) {
		overflow: hidden;
	}
	.openBackdrop { 
		z-index: 10;
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
    	/* height: 200%; */
    	/* height: inherit; */
		/* height: 200%;
		max-height: 500dvh; */
		background-color: #131a24d6;
		background-image: url(background.svg);
		/* overflow: hidden; */
	}
}
</style>