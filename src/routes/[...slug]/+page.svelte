<script lang="ts">
    import { PortableText } from '@portabletext/svelte';
    import { formatDate } from '$lib/utils';
    import { urlFor } from '$lib/utils/image';
    import TextAreaShadow from '$lib/components/TextAreaShadow.svelte';
    import type { PageData } from './$types';
    
    export let data: PageData;
	// console.log("page data",data.page[0]);
</script>

<svelte:head>
	<title>{data.page[0].title}</title>
</svelte:head>

<main id="main">
	<article>
		<h1 class="pageTitle">{data.page[0].title}</h1>
		<!-- FIXME: PortableText property missing -->
		<PortableText value={data.page[0].content} />
	</article>
	<TextAreaShadow />
</main>

<style>
	main {
		border-radius: var(--small-border-radius);
		border-bottom-right-radius: var(--border-radius);
		border-top-right-radius: var(--border-radius);
	}

	@media (max-width: 670px), (max-height: 585px) {
		main {
			border-radius: var(--border-radius);
		}
	}
 </style>