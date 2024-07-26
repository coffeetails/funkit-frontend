<script lang="ts">
	import { PortableText } from '@portabletext/svelte';
	import { formatDate } from '$lib/utils';
	import { urlFor } from '$lib/utils/image';
    import TextAreaShadow from '../../../components/TextAreaShadow.svelte';
	
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<article>
	{#if data.image}
		<img
			
			src={urlFor(data.image).url()}
			alt="Cover image for {data.name}"
		/>
	{:else}
		<div />
	{/if}
	<div>
		<h1>{data.name}</h1>
		<p>{formatDate(data.date)}</p>
		<div><PortableText value={data.details} /></div>
		<p>Event type: {data.eventType}</p>
		<p>Doors open: {data.doorsOpen}</p>
		<p>Venue: {data.venue?.name}</p>
		<p>Headline: {data.headline?.name}</p>
		<p>Tickets: {data.tickets}</p>
	</div>
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
	
	/* h1, h2, h3 {
		text-align: center;
	} */

	@media (max-width: 670px) {
		article {
			border-top-left-radius: var(--border-radius);
			border-bottom-left-radius: var(--border-radius);
		}
	}



</style>