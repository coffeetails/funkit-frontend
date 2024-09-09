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
		max-width: 25rem;
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
	}
	a {
		font-family: "Lemon", serif;
	}

	img {
		max-height: 10rem;
	}

	@media (max-width: 670px) {
		section {
			max-height: 40vh;
		}
	}
</style>