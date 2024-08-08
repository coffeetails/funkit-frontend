<script lang="ts">
	import News from '../components/News.svelte';
    import TextAreaShadow from '../components/TextAreaShadow.svelte';
    import { PortableText } from '@portabletext/svelte';
	import type { PageData } from './$types';

	export let data: PageData;
	console.log("page data",data.page[0]);
</script>

<section>
	<News />
	<article>
		<PortableText value={data.page[0].content} />
		
		<TextAreaShadow />
	</article>
</section>

<style>
	article {
		position: relative;
		width: fit-content;
		/* height: 500px; */
		max-height: 30rem;
		margin: 0.25rem;
		border: var(--border-style);
		border-radius: var(--small-border-radius);
		border-bottom-right-radius: var(--border-radius);
		padding: 0.5rem 2rem;
		background-color: #fafafa;
		overflow: scroll;
	}
	
	/* h1, h2, h3 {
		text-align: center;
	} */

	@media (max-width: 670px) {
		article {
			border-bottom-left-radius: var(--border-radius);
		}
	}


</style>