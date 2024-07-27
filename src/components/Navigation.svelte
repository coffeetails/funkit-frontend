<script lang="ts">
	// import type { Post } from '$lib/utils/sanity';
	import { getPosts } from '$lib/utils/sanity';
	// import { postsReadOnly } from '../store';

	// let posts: Array<Post>;
	// postsReadOnly.subscribe(async (value) => console.log(value) );
	
	// export let posts: Array<Post>;
</script>

<!-- TODO: Add a "skip menu" link for A11Y -->

<nav>
	<h1>Fun&#8203;Kit</h1>
	<h3>Meny</h3>
	{#await getPosts()}
		<p>loading menu</p>		
	{:then values} 
		<ul>
			{#each values as post}
			<li><a href={`/post/${post.slug.current}`}>{post.name}</a></li>
			{/each}
		</ul>
	{:catch error}
		<p>Something went wrong: {error.message}</p>
		{console.log("error loading menu items: ", error)}
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
		width: 10rem;
	}
    
    nav >:nth-child(1) {
        padding: 1rem 0rem;
        font-size: 3rem;
        text-align: center;
    }
    nav >:nth-child(2) {
        padding: 1rem 1rem;
        text-align: center;
    }
    
    ul, li {
        list-style-type: none;
        /* margin: 0rem 0.5rem 0rem 0.5rem; */
        padding: 0.5rem 0;
        /* font-size: 1.15rem; */
	}

	a {
		display: inline-block;
		width: 100%;
		font-family: "Lemon", serif;
		font-weight: 400;
		font-style: normal;
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