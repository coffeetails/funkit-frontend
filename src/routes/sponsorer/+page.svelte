<script lang="ts">
    import TextAreaShadow from '../../components/TextAreaShadow.svelte';
    import { getSponsors } from '$lib/utils/sanity';
</script>

<main id="main">
	<article>
		<h1>Våra sponsorer</h1>
		{#await getSponsors()}
			loading
		{:then sponsors} 
			{#each sponsors as sponsor}
				<section>
					{#if sponsor.link}
						<h4><a href={sponsor.link}>{sponsor.name}</a></h4>
						<a href={sponsor.link} class="imageLink"><img src={sponsor.imageSrc} alt={sponsor.imageAlt} /></a>
					{:else}
						<h4>{sponsor.name}</h4>
						<img src={sponsor.imageSrc} alt={sponsor.imageAlt} />
					{/if}
					<p>{sponsor.details?sponsor.details:" "}</p>
				</section>
			{/each}		
		{/await}
	</article>
	<TextAreaShadow />
</main>

<style>
	h1 {
		width: 100%;
		/* margin: 0 auto; */
		/* grid-column: 1 / 5; */
	}

	section {
		flex: 1 1 auto;

		border: var(--border-style);
		border-radius: var(--border-radius);
		box-shadow: 0.25rem 0.25rem 0.5rem #5e5e5e;
		text-align: center;
		padding: 0.5rem 1rem;
	}
	img {
		max-height: 10rem;
	}
	p {
		text-align: left;
	}
	.imageLink {
		border: none;
	}
	a {
		font-size: 1.50rem;
		font-family: "Lemon", serif;
		padding: 0.25rem 0;
	}

	main {
		border-radius: var(--small-border-radius);
		border-bottom-right-radius: var(--border-radius);
		border-top-right-radius: var(--border-radius);
	}

	article {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		/* justify-content: space-between; */
		/* justify-content: center;
		align-content: stretch;
		align-items: stretch; */
		gap: 1.5rem;
	}

	@media (max-width: 670px) {
		main {
			border-radius: var(--border-radius);
		}
	}
 </style>