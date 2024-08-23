<script lang="ts">
    import { PortableText } from '@portabletext/svelte';
    import { formatDate } from '$lib/utils';
    import { urlFor } from '$lib/utils/image';
    import TextAreaShadow from '../../components/TextAreaShadow.svelte';
    import type { PageData } from './$types';
    
    export let data: PageData;
	// console.log("page data",data.page[0]);
    
	// TODO: IMPORTANT: Add another level of [slug] pages to let a page have their own menu. - 2 weeks
	// 		Is it possible to make this dynamic as well?
	//		Should I even add another [slug] folder or 
	//		can I continue to use this? 
</script>

<article>
    <h1 class="pageTitle">{data.page[0].title}</h1>
	<!-- FIXME: PortableText property missing -->
    <PortableText value={data.page[0].content} />
    <TextAreaShadow />
</article>

<style>
	article {
		border-radius: var(--small-border-radius);
		border-bottom-right-radius: var(--border-radius);
		border-top-right-radius: var(--border-radius);
	}

	@media (max-width: 670px) {
		article {
			border-radius: var(--border-radius);
		}
	}
 </style>