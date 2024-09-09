<script lang="ts">
	import UpdateBanner from '$lib/components/layout/UpdateBanner.svelte';
    import TextAreaShadow from '$lib/components/TextAreaShadow.svelte';
    import { PortableText } from '@portabletext/svelte';
	import type { PageData } from './$types';

	export let data: PageData;
	// console.log("page data",data.page[0]);

</script>

<svelte:head>
	<title>{data.page[0].title}</title>
</svelte:head>

<UpdateBanner />
<main id="main">
	<article>
		<PortableText value={data.page[0].content} />
		
	</article>
	<TextAreaShadow />
</main>

<style>
	main {
		border-radius: var(--small-border-radius);
		border-bottom-right-radius: var(--border-radius);
	}
	
	@media (max-width: 670px) {
		main {
			border-bottom-left-radius: var(--border-radius);
		}
	}


</style>