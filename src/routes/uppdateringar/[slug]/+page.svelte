<script lang="ts">
    import { PortableText } from '@portabletext/svelte';
    import { formatDate } from '$lib/utils';
    import { urlFor } from '$lib/utils/image';
    import TextAreaShadow from '../../../components/TextAreaShadow.svelte';
    import type { PageData } from './$types';
    import ShareMedia from '../../../components/ShareMedia.svelte';
    
	function parseDate(rawDate: string | number | Date) {
		let date = new Date(rawDate);
		let displayDate = `${date.getFullYear()}-${('0' + date.getMonth()).slice(-2)}-${('0' + date.getDate()).slice(-2)} kl${('0' + date.getHours()).slice(-2)}:${('0' + date.getMinutes()).slice(-2)}`;
		return displayDate;
	}

    export let data: PageData;
	console.log("page data",data);
</script>

<svelte:head>
	<title>{data.page[0].title}</title>
</svelte:head>

<main id="main">
	<div class="wrapper">
		<article>
			<h1 class="pageTitle">{data.page[0].title}</h1>
			<PortableText value={data.page[0].content} />
		</article>
		
		<TextAreaShadow />
	</div>

	<div class="articleInfo">
		<div class="publishInfo">
			<p>Publicerad: {@html parseDate(data.page[0].created)}</p>
			<p>Uppdaterad: {@html parseDate(data.page[0].updated)}</p>
		</div>

		<ShareMedia />
	</div>
</main>

<style>
	main {
		border-radius: var(--small-border-radius);
		border-bottom-right-radius: var(--border-radius);
		border-top-right-radius: var(--border-radius);
		display: flex;
		flex-direction: column;
	}
	
	.wrapper {
		position: inherit;
		width: 100%;
		max-height: inherit;
		height: inherit;
		overflow: hidden;
	}

	.articleInfo {
		padding: 0.25rem;
		border-top: 1px solid #0a0a0a;
		background-color: #fafafa;
		
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: space-around;
		align-items: center;
	}
	
	.publishInfo > * {
		font-size: 0.89rem;
		padding: 0;
	}

	@media (max-width: 670px) {
		main {
			border-radius: var(--border-radius);
		}
	}
 </style>