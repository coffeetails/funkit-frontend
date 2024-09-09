<script lang="ts">
    import SponsorCard from '$lib/components/SponsorCard.svelte';
import TextAreaShadow from '$lib/components/TextAreaShadow.svelte';
    import { getSponsors } from '$lib/utils/sanity';
</script>

<svelte:head>
	<title>Sponsorer</title>
</svelte:head>

<main id="main">
	<article>
		<h1>Våra sponsorer</h1>
		{#await getSponsors()}
			loading
		{:then sponsors} 
			<SponsorCard cardData={sponsors} />
		{/await}
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
		gap: 1.5rem;
	}

	h1 {
		width: 100%;
	}
	
	@media (max-width: 670px) {
		main {
			border-radius: var(--border-radius);
		}
	}
 </style>