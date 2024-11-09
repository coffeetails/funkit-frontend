<script lang="ts">
    import { urlFor } from "$lib/utils/image";
	import {fade} from 'svelte/transition';


    export let gallery;
    export let galleryWidth;
    export let galleryHeight;
    
    
	let index = 0
    const previous = () => {
        if(index == 0) {
            index = gallery.length;
        }
		index = --index;
	}
	const next = () => {
        index = ++index % gallery.length;
	}
</script>

{#each [gallery[index]] as image (index)}
    <img transition:fade src={urlFor(image.asset).width(galleryWidth).height(galleryHeight).url()} alt={image.alt ? image.alt : ""}/>
{/each}

{#if gallery.length > 1}
    <div>
        <button class="previous" on:click={previous}>⪡</button>
        <button class="next" on:click={next}>⪢</button>
    </div>
{/if}

<style>
    div {
        z-index: 5;
        grid-area: 1 / 1;

        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    button:focus-visible, div:hover > button { 
        background-color: var(--white); 
        opacity: 1;
    }
    button {
        transition: 0.5s;
        opacity: 0.5;
        background-color: var(--white-transparent);
        font-size: 1.25rem;
        border: none;
        border-radius: var(--small-border-radius);
        padding: 0 0.15rem;
        margin: 0.2rem;
    }

    img {
	    grid-area: 1 / 1;
	}

</style>