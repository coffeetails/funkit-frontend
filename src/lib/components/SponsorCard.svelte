<script lang="ts">
    import TextAreaShadow from '$lib/components/TextAreaShadow.svelte';
    import { PortableText } from '@portabletext/svelte';
    import ShareMedia from '$lib/components/ShareMedia.svelte';
	

    export let cardData;
	console.log(cardData);
	
</script>


{#each cardData as data}
    <section>
        <div class="sectionHeader">
			{#if data.link}
				<h5><a href={data.link}>{data.name}</a></h5>
			{:else}
				<h5>{data.name}</h5>
			{/if}
        </div>
	
        <div class="wrapper">
				{#if data.link}
					<a href={data.link} class="imageLink">
						<img src={data.imageSrc} alt={data.imageAlt} />
					</a>
				{:else}
					<img src={data.imageSrc} alt={data.imageAlt} />
				{/if}
        </div>
        
        <div class="sectionFooter">
			<p>{data.details ? data.details : " "}</p>
			<!-- <TextAreaShadow /> -->
        </div>
    </section>
{/each}


<style>
	
	section {
		flex: 1 1 auto;
		
		position: relative;
		border: var(--border-style);
		border-radius: var(--border-radius);
		box-shadow: 0.25rem 0.25rem 0.5rem #5e5e5e;
		max-width: 15rem;
		overflow: hidden;
		text-align: center;

		display: flex;
		flex-direction: column;
	}
	
	.wrapper {
		position: inherit;
		width: 100%;
		max-height: inherit;
		height: inherit;
		overflow: hidden;
		border: none;
	}
	.wrapper:hover {
		border: none;
	}

	.sectionHeader {
		background-color: #fafafa;
		padding: 0.25rem 1rem;
		border-bottom: 1px solid #0a0a0a;
		text-align: left;
	}
	.sectionFooter {
		background-color: #fafafa;
		padding: 0.25rem 1rem;
		border-top: 1px solid #0a0a0a;
		text-align: left;
	}
	
	.imageLink {
		border: none;
		margin: 0;
		padding: 0;
		line-height: 0;
		text-align: center;
	}
	a {
		font-family: "Lemon", serif;
	}

	img {
		display: block;
		/* max-height: 10rem; */
		max-height: 15rem;
		width: 15rem;
		margin: 0 auto;
		object-fit: cover;
		object-position: center;
	}

	@media (max-width: 670px) {
		section {
			max-height: 40vh;
		}
	}
</style>