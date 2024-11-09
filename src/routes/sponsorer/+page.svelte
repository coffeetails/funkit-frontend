<script lang="ts">
	import TextAreaShadow from '$lib/components/TextAreaShadow.svelte';
</script>

<svelte:head>
	<title>Sponsorer</title>
</svelte:head>

<main id="main">
	<article>
		<h1>Våra sponsorer</h1>
		<figure class="school" >
			<a href="https://www.regionvarmland.se/folkhogskolor/kristinehamns-folkhogskola">
				<img src="/sponsors/kristinehamn_svart.png" alt=""/>
			</a>
		</figure>
		<figure class="dev">
			<a href="https://kaffekod.nu/">
				<img src="/sponsors/redpanda_netrunner_canva.png" alt="" />
			</a>
			<figcaption>
				Utvecklare och ansvarig för webbsidan. Om något beter sig oväntant, kontakta mig på kaffekod@protonmail.com
			</figcaption>
		</figure>
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
		gap: 1.5rem;

		display: flex;
	}

	h1 {
		width: 100%;
	}

	a {
		border: none;
	}

	.school {
		padding: 2rem 3rem;
	}
	.school img {
		width: 30rem;
	}
	.dev, .dev img {
		width: 20rem;
		border-radius: var(--small-border-radius);
		font-style: italic;
	}
	
	@media (max-width: 670px), (max-height: 585px) {
		main {
			border-radius: var(--border-radius);
		}
	}
 </style>