<script lang="ts">
    import { getLatestNews } from "$lib/utils/sanity";
    import { PortableText } from "@portabletext/svelte";
    import TextAreaShadow from "./TextAreaShadow.svelte";
	
	let link = "#";
	let newsTitle = "VänCon på G!";

</script>

<aside>
	<section>
		{#await getLatestNews()}
			Hämtar senaste nyheten...
		{:then value} 
			<h5><a href={value.slug}>Senaste nyheten: {value.title}</a></h5>
			<PortableText value={value.content[0]} />
			<span class="continueRead"><a href={'nyheter/'+value.slug}>... fortsätt läsa.</a></span>
		{/await}
	</section>
	<img src="https://picsum.photos/100" alt="mascot" />
</aside>

<style>
	aside {
		/* position: relative; */
		max-height: 10rem;
		/* height: 8rem; */
		overflow: hidden;
		margin: 0.25rem;
		border: var(--border-style);
		border-radius: var(--small-border-radius);
		border-top-right-radius: var(--border-radius);
		padding: 0.5rem 0.5rem 0.5rem 2rem;
		background-color: #fafafa;

		display: flex;
	}
	section  {
		position: relative;
	}
    .continueRead {
		position: absolute;
		bottom: 0rem;
		/* left: 0; */
		right: 0;
		/* padding: 0.25rem; */
		/* border: 1px solid yellow; */
		background-color: #fafafa;
		box-shadow: -1rem 0.25rem 0.5rem 0.25rem #fafafa;
	}
    img {
		max-height: 9rem;
		height: 100%;
        margin-left: auto;
        border-radius: var(--border-radius);
		z-index: 2;
    }


	@media (min-width: 671px) and (max-width: 900px) {
		aside {
			align-items: center;
		}
		p, .continueRead {
			display: none;
		}
		img {
			max-height: 3rem;
		}
	}
	
	@media (max-width: 670px) {
		aside {
			border-top-left-radius: var(--border-radius);
		}
		p {
			display: none;
		}
		img {
			display: none;
		}
	}
</style>