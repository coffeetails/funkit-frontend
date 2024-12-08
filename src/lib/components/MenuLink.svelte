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
	
	@media (min-width: 670px) AND (min-height: 585px) {

		.active {
			background-color: #fafafa;
			border-radius: 2rem 0 0 2rem;
			border: var(--border-style);
			box-shadow: 0.1rem 0.3rem 0.5rem #0a0a0aae;
		}
		.active:before {
			content: " ";
			position: absolute;
			left: calc(var(--nav-width)*0.675);
			top: -60px;
			height: 200px;
			width: 78px;
			/* border: 1px solid gray; */
			z-index: 1;

			background-image: 
				/* Shape */
				radial-gradient(circle at 0px 0px, rgba(0, 0, 0, 0) 0, rgba(0, 0, 0, 0) 59px, #fafafa 60px),
				radial-gradient(circle at -10px 20px, rgba(0, 0, 0, 0) 0, rgba(0, 0, 0, 0) 10px, #fafafa 20px),
				radial-gradient(circle at 0px 60px, rgba(0, 0, 0, 0) 0, rgba(0, 0, 0, 0) 59px, #fafafa 60px),
				/* Shadow */
				radial-gradient(circle at 20px 20px, #0a0a0a7a 0, #00000000 15px),
				radial-gradient(circle at 20px 20px, #0a0a0a7a 0, #00000000 15px),
				radial-gradient(circle at 20px 20px, #0a0a0a7a 0, #00000000 15px),
				radial-gradient(circle at 20px 20px, #0a0a0a7a 0, #00000000 15px),
				radial-gradient(circle at 20px 20px, #0a0a0a7a 0, #00000000 15px);
			background-size: 
				88px 60px, 88px 37px, 88px 60px, /* Shape */
				40px 40px, 40px 40px, 40px 40px, 40px 40px, 40px 40px; /* Shadow */
			background-position: 
				2px 0px, 15px 59px, 2px 94px, /* Shape */
				13px 76px, 20px 81px, 28px 89px, 39px 99px, 45px 111px; /* Shadow */
			background-repeat: no-repeat;
		}
	}

	@media (max-width: 670px), (max-height: 585px) {
		.linkMenuJump {
			margin-top: 0;
		}
		li {
			margin-right: 3rem;
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
	}
</style>