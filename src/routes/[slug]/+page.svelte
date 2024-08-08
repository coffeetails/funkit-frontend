<script lang="ts">
    import { PortableText } from '@portabletext/svelte';
    import { formatDate } from '$lib/utils';
    import { urlFor } from '$lib/utils/image';
    import TextAreaShadow from '../../components/TextAreaShadow.svelte';
    import type { PageData } from './$types';
    
    export let data: PageData;
    console.log(data.page);
    
</script>

<article>
    <h1 class="pageTitle">{data.page[0].title}</h1>
    <PortableText value={data.page[0].content} />
    <TextAreaShadow />
</article>

<style>
	article {
		position: relative;
		width: fit-content;
		max-height: 40rem;
		margin: 0.25rem;
		border: var(--border-style);
		border-radius: var(--small-border-radius);
		border-bottom-right-radius: var(--border-radius);
		border-top-right-radius: var(--border-radius);
		padding: 0.5rem 2rem;
		background-color: #fafafa;
		overflow: scroll;
	}

	@media (max-width: 670px) {
		article {
			border-radius: var(--border-radius);
		}
	}
 </style>