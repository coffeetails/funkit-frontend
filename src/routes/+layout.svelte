<script lang="ts">
    import { page } from "$app/stores";
	import Navigation from "$lib/components/layout/Navigation.svelte";
	let title = "Funkit";
	let description = "✨ Funkit är en idéell förening med syfte att föra samman människor genom ett gemensamt intresse av olika sorters popkultur, så som spel, anime, böcker, och massor av andra spännande intressen! Föreningens plan är att en gång om året kunna arrangera VänCon, Nordens nyaste och mysigaste konvent där målet är att alla ska trivas oavsett vem man är.  🎉💖🌟!";
	let image = "https://cdn.discordapp.com/attachments/1274041105918328926/1287404782180368404/IMG_0956.png?ex=66f56122&is=66f40fa2&hm=79e3e28fb71731ee276c9393e845d5ce5c414c92bd7e9408fc99dd365e77a44f&";
	let themeColor = "#f02525";
	let largeThumbnail = false;
</script>

<svelte:head>
	<!-- 	Metadata	 -->
	<link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🌸</text></svg>">
	<title>{title}</title>
	<meta name="description" content={description}>
	<meta name="theme-color" content={themeColor}>

	<!--	 Facebook	 -->
	<meta property="og_site_name" content=“Example.com”>
	<meta property="og:url" content="https://www.example.com{$page.url.pathname.toString()}">
	<meta property="og:type" content="website">
	<meta property="og:title" content={title}>
	<meta property="og:description" content={description}>
	<meta property="og:image" content={image}>

	<!-- 	Twitter / X 	-->
	{#if largeThumbnail}
		<meta name="twitter:card" content="summary_large_image">
	{/if}
	<meta property="twitter:domain" content="example.com">
	<meta property="twitter:url" content="https://www.example.com{$page.url.pathname.toString()}">
	<meta name="twitter:title" content="{title}">
	<meta name="twitter:description" content={description}>
	<meta name="twitter:image" content={image}>
	<meta name="twitter:site" content="@username" />
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