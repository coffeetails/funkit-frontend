<script lang="ts">
    import { PortableText } from '@portabletext/svelte';
    import TextAreaShadow from '$lib/components/TextAreaShadow.svelte';
    import type { PageData } from './$types';
    import GallerySlideshow from '$lib/components/GallerySlideshow.svelte';
  import { urlFor } from '$lib/utils/image';
    
    export let data: PageData;
	

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
	<title>{data.page[0].title}</title>
</svelte:head>

<svelte:window bind:innerHeight />

<main id="main">
	<article bind:clientWidth={articleWidth}>
		<h1 class="pageTitle">{data.page[0].title}</h1>

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

		<!-- FIXME: PortableText property missing -->
		<PortableText value={data.page[0].content} />

		{#if data.page[0].pageBuilder}
			<div class="contributorWrapper">
				{#each data.page[0].pageBuilder as contributor}
					<section class="contributorCard">
						<img src={urlFor(contributor.image.asset).width(200).height(200).url()} alt={contributor.alt ? contributor.alt : ""}/>
						<h5>{contributor.title}</h5>

						{#each contributor.links as link}
							<a href={link}>{link.replace(/https:|http:|www.|\/\//gmi, "")}</a>
						{/each}

						<p>{contributor.description}</p>
					</section>
				{/each}

			</div>
		{/if}

		{#if centerBottomImgs.length > 0}
			<div class="center galleryWrapper">
				<GallerySlideshow gallery={centerBottomImgs} galleryWidth={bigImageWidth} galleryHeight={bigImageHeight} />
			</div>
		{/if}
		
	</article>
	<TextAreaShadow />
</main>

<style>
	main {
		border-radius: var(--small-border-radius);
		border-bottom-right-radius: var(--border-radius);
		border-top-right-radius: var(--border-radius);
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

	.contributorWrapper {
		display: flex;
		justify-content: space-evenly;
		flex-wrap: wrap;
		gap: 2rem;
	}
	.contributorCard {
		/* border: var(--border-style);
		border-radius: var(--border-radius);
		box-shadow: 0.1rem 0.3rem 0.5rem #0a0a0aae; */
		padding: 0.5rem;
		width: 30%;
		min-width: 225px;

		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.contributorCard img {
		border-radius: calc(var(--border-radius)*0.75);
	}

	@media (max-width: 670px), (max-height: 585px) {
		main {
			border-radius: var(--border-radius);
		}
	}
 </style>