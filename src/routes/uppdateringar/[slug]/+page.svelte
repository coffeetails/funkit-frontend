<script lang="ts">
    import { PortableText } from '@portabletext/svelte';
    import TextAreaShadow from '$lib/components/TextAreaShadow.svelte';
    import type { PageData } from './$types';
    import ShareMedia from '$lib/components/ShareMedia.svelte';
	import GallerySlideshow from '$lib/components/GallerySlideshow.svelte';
    
	function parseDate(rawDate: string | number | Date) {
		let date = new Date(rawDate);
		let displayDate = `${date.getFullYear()}-${('0' + date.getMonth()).slice(-2)}-${('0' + date.getDate()).slice(-2)} kl${('0' + date.getHours()).slice(-2)}:${('0' + date.getMinutes()).slice(-2)}`;
		return displayDate;
	}

    export let data: PageData;
    let update = data.page[0];
	console.log(data.page[0]);
	

	let articleWidth: number;
	let innerHeight: number;

	$: bigImageWidth = Math.trunc(articleWidth-70);
	$: smallImageWidth = Math.trunc(articleWidth*0.25);
	$: bigImageHeight = Math.trunc(innerHeight*0.45);
	$: smallImageHeight = Math.trunc(innerHeight*0.25);

	let centerTopImgs: any[] = [];
	let leftTopImgs: any[] = [];
	let rightTopImgs: any[] = [];

	if(data.page[0].imagesTop) {
		data.page[0].imagesTop.map((image: { asset: any; position: string[]; }) => {
			if(image.asset && image.position[0] == "center") {
				centerTopImgs.push(image);
			}
			else if(image.asset && image.position[0] == "left") {
				leftTopImgs.push(image);
			}
			else if(image.asset && image.position[0] == "right") {
				rightTopImgs.push(image);
			}
		});
	}
	
	let centerBottomImgs: any[] = [];
	if(data.page[0].imagesBottom) {
		data.page[0].imagesBottom.map((image: { asset: any; position: string[]; }) => {
			if(image.asset) {
				centerBottomImgs.push(image);
			}
		});
	}

</script>

<svelte:head>
	<title>{update.title}</title>
</svelte:head>

<svelte:window bind:innerHeight />


<main id="main">
	<div class="wrapper">
		<article  bind:clientWidth={articleWidth}>
			<h1 class="pageTitle">{update.title}</h1>
            
			{#if centerTopImgs.length > 0}
				<div class="center galleryWrapper">
					<GallerySlideshow gallery={centerTopImgs} galleryWidth={bigImageWidth} galleryHeight={bigImageHeight} />
				</div>
			{/if}
			{#if leftTopImgs.length > 0}
				<div class="left galleryWrapper">
					<GallerySlideshow gallery={leftTopImgs} galleryWidth={smallImageWidth} galleryHeight={smallImageHeight} />
				</div>
			{/if}
			{#if rightTopImgs.length > 0}
				<div class="right galleryWrapper">
					<GallerySlideshow gallery={rightTopImgs} galleryWidth={smallImageWidth} galleryHeight={smallImageHeight} />
				</div>
			{/if}

			<PortableText value={update.content} />

			{#if centerBottomImgs.length > 0}
				<div class="center galleryWrapper">
					<GallerySlideshow gallery={centerBottomImgs} galleryWidth={bigImageWidth} galleryHeight={bigImageHeight} />
				</div>
			{/if}
		</article>
		
		<TextAreaShadow />
	</div>

	<div class="articleInfo">
		<div class="publishInfo">
			<p>Publicerad: {@html parseDate(update.created)}</p>
			{#if update.created != update.updated}
				<p>Uppdaterad: {@html parseDate(update.updated)}</p>
			{/if}
		</div>

		<!-- <ShareMedia /> -->
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

	.left {
		float: left;
		margin-right: 0.5rem;
	}
	.right {
		float: right;
		margin-left: 0.5rem;
	}
	.center {
		margin: 0.5rem 0;
	}

	.galleryWrapper {
		display: grid;
		place-content: center;
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
		text-align: right;
	}

	@media (max-width: 670px), (max-height: 585px) {
		main {
			border-radius: var(--border-radius);
		}
	}
 </style>
