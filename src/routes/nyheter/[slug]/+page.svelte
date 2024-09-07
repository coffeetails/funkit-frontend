<script lang="ts">
    import { PortableText } from '@portabletext/svelte';
    import { formatDate } from '$lib/utils';
    import { urlFor } from '$lib/utils/image';
    import TextAreaShadow from '../../../components/TextAreaShadow.svelte';
    import type { PageData } from './$types';
    
	function parseDate(rawDate: string | number | Date) {
		let date = new Date(rawDate);
		let displayDate = `${date.getFullYear()}-${('0' + date.getMonth()).slice(-2)}-${('0' + date.getDate()).slice(-2)} kl${('0' + date.getHours()).slice(-2)}:${('0' + date.getMinutes()).slice(-2)}`;
		return displayDate;
	}

    export let data: PageData;
	console.log("page data",data);
</script>

<main id="main">
	<article>
		<h1 class="pageTitle">{data.page[0].title}</h1>
		<PortableText value={data.page[0].content} />
		
		<div class="articleInfo">
			<div class="publishInfo">
				<p>Publicerad: {@html parseDate(data.page[0].created)}</p>
				<p>Uppdaterad: {@html parseDate(data.page[0].updated)}</p>
			</div>
			<p>share buttons?</p>
		</div>
	</article>
	<TextAreaShadow />
</main>

<style>
	main {
		border-radius: var(--small-border-radius);
		border-bottom-right-radius: var(--border-radius);
		border-top-right-radius: var(--border-radius);
	}

	/* CONTINUE HERE PLZ */
	.articleInfo {
		/* position: absolute;
		bottom: 0;
		left: 0;
		right: 0; */
		margin-top: 5rem;
		padding: 0.25rem;
		border-top: 1px solid #0a0a0a;
		background-color: #fafafa;

		display: flex;
		flex-direction: row;
		justify-content: space-around;
	}

	.publishInfo > * {
		padding: 0;
	}

	@media (max-width: 670px) {
		main {
			border-radius: var(--border-radius);
		}
	}
 </style>