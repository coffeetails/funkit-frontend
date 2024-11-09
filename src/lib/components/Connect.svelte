<script lang="ts">
    import { getSocialmedia } from "$lib/utils/sanity";
    import Icon from '@iconify/svelte';

</script>

<aside class='connect'>
    <p>Connecta med oss:</p>
    <span>
        {#await getSocialmedia() then socials}
            {#each socials.socialmedialinks as social}
                <a href={social.link}>
                    <Icon icon={social.myIcon.name} 
                        height="1.5rem" color="#0a0a0a" 
                        onmouseover="this.style.color='#d87d21';" 
                        onmouseout="this.style.color='';" 
                    />
                </a>                
            {/each}
        {/await}
    <span>
</aside>

<style>
.connect {
		margin: 0.25rem;
		border: var(--border-style);
		border-radius: var(--small-border-radius);
		border-bottom-left-radius: var(--border-radius);
		padding: 0.5rem 1rem;
		background-color: var(--white-transparent);
		width: 14rem;

		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		align-items: center;
	}
	.connect p {
		padding-right: 1rem;
	}
	span {
		white-space: no-wrap;
        text-align: center;
        display: flex;
        flex-direction: row;
	}

	a {
        border: none;
        background: none;
        margin: 0.25rem;
        border-radius: 100%;
        height: 1.5rem;
        width: 1.5rem;

        display: grid;
        justify-content: center;
        align-items: center;
	}
    a:hover {
        background-color: var(--white);
    }


	@media (max-width: 670px), (max-height: 585px) {
        .connect {
			width: initial;
			background-color: var(--white);
			border-bottom-left-radius:  var(--border-radius);
			border-bottom-right-radius:  var(--border-radius);
		}
    }


</style>