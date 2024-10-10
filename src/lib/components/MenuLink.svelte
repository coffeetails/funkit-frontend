<script lang="ts">

	export let displayMobileMenu;
	export let currentPath;
	export let slug;
	export let title;
	export let linkMenuJump;
</script>

<li class:active={currentPath == slug} class={linkMenuJump ? "linkMenuJump" : ""}>
    <a href={slug != "/" ? "/"+slug : "/"} on:click={() => displayMobileMenu = false} >{title}</a>
</li>

<style>
    li {
		position: relative;
        list-style-type: none;
		padding: 0.25rem 0;
		margin: 0;
	}
	.linkMenuJump {
		margin-top: auto;
	}

	li a {
		display: inline-block;
		width: 100%;
		font-family: "Lemon", serif;
		border-bottom-color: transparent;
		/* word-wrap: break-word; */
	}
	li a:hover {
		border: 2px solid var(--black);
	}

	.active:before {
		content: "🔥";
		position: absolute;
		left: -2rem;
		height: 1.5rem;
		width: 1.5rem;
		text-align: center;
		background-color: #fafafa;
		border-radius: 2rem;
		border: var(--border-style);
		box-shadow: 0.1rem 0.3rem 0.5rem #0a0a0aae;
	}

	@media (max-width: 670px), (max-height: 585px) {
		.linkMenuJump {
			margin-top: 0;
		}
		li {
			margin-right: 3rem;
		}
	}
</style>