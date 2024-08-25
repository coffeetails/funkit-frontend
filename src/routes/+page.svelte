<script lang="ts">
	import News from '../components/News.svelte';
    import TextAreaShadow from '../components/TextAreaShadow.svelte';
    import { PortableText } from '@portabletext/svelte';
	import type { PageData } from './$types';

	export let data: PageData;
	// console.log("page data",data.page[0]);

</script>

<main id="main">
	<News />
	<article>
		<!-- FIXME: PortableText property missing -->
		<PortableText value={data.page[0].content} />
		
		<TextAreaShadow />
	</article>
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