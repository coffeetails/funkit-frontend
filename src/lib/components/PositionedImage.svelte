<script lang="ts">
    import { urlFor } from '$lib/utils/image';
    
    export let parentWidth; // Note to self: Set bind:clientWidth on the parent element
    export let imageData;
    const imageWidth = 0.2;
</script>

<div class="image"> <!-- Hey, isn't there a tag for this???????? -->
    <img 
        src={urlFor(imageData.asset).width(Math.trunc(parentWidth*imageWidth)).url()} 
        class=' {imageData.positionHorizontal} {imageData.positionVertical}' 
        alt={imageData.alt}
    />
</div>

<style>

	/* -- --  Image position states  -- --
	{title: "Till höger", value: "right"},
	{title: "Till vänster", value: "left"},
	{title: "Centrerad", value: "center"} 
	{title: "Högst upp", value: "top"},
	{title: "Mitten", value: "middle"},
	{title: "Längst ner", value: "bottom"},
	-- -- -- -- -- -- -- -- -- -- -- -- -- */

   
    img:before {
        content: " ";
        display: block;
        float: right;
        height: 80%; 
    }
    
    img {
        float: right;
        clear: both;
        object-fit: cover;
        margin: 0.5rem;    
    }
</style>