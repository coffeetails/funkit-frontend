<script lang="ts">
    import TextAreaShadow from '../../components/TextAreaShadow.svelte';
    import { getNews } from '$lib/utils/sanity';
    import { PortableText } from '@portabletext/svelte';

	

	function parseDate(rawDate: string | number | Date) {
		let date = new Date(rawDate);
		let displayDate = `${date.getFullYear()}-${('0' + date.getMonth()).slice(-2)}-${('0' + date.getDate()).slice(-2)} kl${('0' + date.getHours()).slice(-2)}:${('0' + date.getMinutes()).slice(-2)}`;
		return displayDate;
	}

</script>

<main id="main">
	<div class="mainContentWrapper">
		<h1>Nyheter</h1>
		{#await getNews()}
			loading
		{:then allNews} 
			{#each allNews as news}
				<section>
					
					<h3>{news.title}</h3>
					<PortableText value={news.content} />
					<div class="sectionInfo">
						<p>{@html parseDate(news.created)}</p>
						<a href={"nyheter/"+news.slug}>Läs hela</a>
						<p>share buttons?</p>
					</div>
				</section>
			{/each}		
		{/await}
	</div>
	<TextAreaShadow />
</main>

<style>
	.sectionInfo {
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		padding: 0.25rem;
		border-top: 1px solid #0a0a0a;
		background-color: #fafafa;

		display: flex;
		flex-direction: row;
		justify-content: space-around;
	}

	h1 {
		width: 100%;
	}
	
	section {
		flex: 1 1 auto;
		
		position: relative;
		border: var(--border-style);
		border-radius: var(--border-radius);
		box-shadow: 0.25rem 0.25rem 0.5rem #5e5e5e;
		padding: 0.5rem 1rem;
		margin: 1.5rem 0;
		
		max-height: 15rem;
		min-height: 10rem;
		height: 15rem;
		overflow: hidden;
	}
	section h3 {
		text-align: center;
	}

	main {
		border-radius: var(--small-border-radius);
		border-bottom-right-radius: var(--border-radius);
		border-top-right-radius: var(--border-radius);
	}

	@media (max-width: 670px) {
		main {
			border-radius: var(--border-radius);
		}
	}
 </style>