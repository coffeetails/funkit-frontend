<script lang="ts">
	import TextAreaShadow from '$lib/components/TextAreaShadow.svelte';
  import { urlFor } from '$lib/utils/image';
    import type { PageData } from './$types';

    export let data: PageData;
	console.log("data", data.sponsors);

</script>

<svelte:head>
	<title>Sponsorer</title>
</svelte:head>

<main id="main">
	<article>
		<h1>Våra sponsorer</h1>
		{#each data.sponsors as sponsor}
			<figure class="sponsor">
				<a href={sponsor.link}>
					<img src={urlFor(sponsor.image.asset).width(400).url()} alt={sponsor.image.alt ? sponsor.image.alt : ""}/>
				</a>
				{#if sponsor.details}
					<figcaption> {sponsor.details} </figcaption>
				{/if}
			</figure>
		{/each}
	</article>
	<TextAreaShadow />
</main>

<style>

	main {
		border-radius: var(--small-border-radius);
		border-bottom-right-radius: var(--border-radius);
		border-top-right-radius: var(--border-radius);
	}

	article {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: space-around;
		gap: 3rem;
	}

	h1 {
		width: 100%;
	}

	a {
		border: none;
	}


	.sponsor {
		width: 40%;
		min-width: 300px;
		border-radius: var(--small-border-radius);
		font-style: italic;
	}
	.sponsor img {
		max-width: 100%;
		max-height: 50%;
	}
	
	@media (max-width: 670px), (max-height: 585px) {
		main {
			border-radius: var(--border-radius);
		}
	}
	@media (max-width: 962px) {
		main {
			border-radius: var(--border-radius);
		}
		.sponsor img {
			max-width: 100%;
			max-height: 100%;
		}
	}
 </style>