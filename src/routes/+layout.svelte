<script lang="ts">
	import Navigation from "$lib/components/layout/Navigation.svelte";
	import Metadata from "$lib/components/Metadata.svelte";
	import { page } from "$app/stores";
    import { urlFor } from "$lib/utils/image";
    import { getMetadata } from "$lib/utils/sanity";

</script>

<!-- <Metadata /> -->
<svelte:head>
    {#await getMetadata() then metadata}
		<!-- {console.log(metadata)} -->
		<!-- 	Metadata	 -->
		<link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🌸</text></svg>">
		<title>{metadata.name}</title>
		<meta name="description" content={metadata.description}>
		<meta name="theme-color" content={metadata.color}>
		
		<!--	 Facebook	 -->
		<meta property="og_site_name" content=“{metadata.domain}”>
		<meta property="og:url" content="https://www.{metadata.domain}{$page.url.pathname.toString()}">
		<meta property="og:type" content="website">
		<meta property="og:title" content={metadata.name}>
		<meta property="og:description" content={metadata.description}>
		<meta property="og:image" content={urlFor(metadata.thumbnailImage).url()}>

		<!-- 	Twitter / X 	-->
		{#if metadata.thumbnailBig}
			<meta name="twitter:card" content="summary_large_image">
		{/if}
		<meta property="twitter:domain" content="{metadata.domain}">
		<meta property="twitter:url" content="https://www.{metadata.domain}{$page.url.pathname.toString()}">
		<meta name="twitter:title" content="{metadata.name}">
		<meta name="twitter:description" content={metadata.description}>
		<meta name="twitter:image" content={urlFor(metadata.thumbnailImage).url()}>
		{#if metadata.twittername}
			<meta name="twitter:site" content={"@" + metadata.twittername} />
		{/if}
    {/await}

</svelte:head>

<div class="contentWrapper">
	<Navigation />
	<div class="yetAnotherWrapper">
		<slot />
		<span>
			<a target="_blank" href="https://icons8.com/icons/forma-light">Icons</a> by <a target="_blank" href="https://icons8.com">Icons8</a>
		</span>
	</div>
</div>


<style>
	span {
		position: absolute;
		bottom: 0.5rem;
		right: 1rem;
		text-align: right;
		font-size: 0.7rem;
	}
	span a {
		border-width: 1px;
	}

	.contentWrapper {
		margin: 1rem;
		padding: 1rem 0;
		width: var(--content-width);
		/* height: 80dvh; */
		/* border: 1px solid blue; */
		/* width: fit-content; */
		max-height: var(--content-height);

		display: grid;
		/* justify-items: stretch;
		justify-content: stretch;
		align-items: stretch;
		align-content: stretch; */
		/* grid-template-columns: repeat(5, auto); */
		/* grid-template-columns: repeat(2, auto); */
		grid-template-columns: 0fr 1fr;
	}
	.yetAnotherWrapper {
		display: relative;
		/* align-self: stretch;
		justify-self: stretch; */
		/* grid-column: 2/span 4; */
		/* max-width: var(--main-width); */

		display: flex;
		flex-direction: column;
		align-items: stretch;
	}
	
	/* Mobile */
	@media (max-width: 670px), (max-height: 585px) {
		div {
			height: auto;
		}
		.contentWrapper {
			width: 90dvw;
			margin: 0;
			/* margin: 0 auto; */
		}
		.yetAnotherWrapper {
			/* width: 90%; */
			width: inherit;
			grid-column: 1/3;
		}
		span {
			position: relative;
		}
	}
</style>