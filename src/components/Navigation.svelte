<script lang="ts">
	import { getPageMenu } from '$lib/utils/sanity';
	import { page } from '$app/stores'; 
	
	console.log("Nav page info", $page);
	// Note to self: 
	// $page.route.id might be a good way to see if I'm
	// currently at a top level page or a sub page, since
	// there will be multple levels of pages due to 
	// events having their own menu.
	
</script>

<!-- TODO: Add a "skip menu" link for A11Y -->
<!-- TODO: Add a "back to funkit" link for sub-menues  -->

<nav>
	<h1><a href="/">Fun&#8203;Kit</a></h1>
	<h3>Meny</h3>

	<!-- {#await getPageMenu($page.url.pathname)} -->
	{#await getPageMenu("/")}
		<p>loading menu</p>		
	{:then values} 
		<ul>
			<li><a href={`/`}>Hem</a></li>
			{#each values[0].childpage as page}
			<li><a href={`/${page.slug.current}`}>{page.title}</a></li>
			{/each}
		</ul>
	{:catch error}
		<p>Something went wrong: {error.message}</p>
	{/await}

</nav>

<style>
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
    
    h1 {
        padding: 1rem 0rem;
        font-size: 3rem;
        text-align: center;
    }
	h1 a {
		font-family: "Lemon", serif;
		border: none;
	}
	h1 a:hover {
		border: none;
		background-color: transparent;
		color: var(--black);
	}

    h3 {
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
        /* display: none; */
        position: absolute;
        top: 4.5rem;
        bottom: 0.5rem;
        left: 0.5rem;
        right: 0.5rem;
        width: auto;
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
}
</style>