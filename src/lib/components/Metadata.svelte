<script lang="ts">
    import { page } from "$app/stores";
    import { getMetadata } from "$lib/utils/sanity";
    
    let title = "Funkit";
	let description = "✨ Funkit är en idéell förening med syfte att föra samman människor genom ett gemensamt intresse av olika sorters popkultur, så som spel, anime, böcker, och massor av andra spännande intressen! Föreningens plan är att en gång om året kunna arrangera VänCon, Nordens nyaste och mysigaste konvent där målet är att alla ska trivas oavsett vem man är.  🎉💖🌟!";
	let image = "https://cdn.discordapp.com/attachments/1274041105918328926/1287404782180368404/IMG_0956.png?ex=66f56122&is=66f40fa2&hm=79e3e28fb71731ee276c9393e845d5ce5c414c92bd7e9408fc99dd365e77a44f&";
	let themeColor = "#f02525";
	let thumbnailBig = false;
</script>

<svelte:head>
    {#await getMetadata() then metadata}
    <!-- {console.log(metadata[0])} -->
	<!-- 	Metadata	 -->
	<link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🌸</text></svg>">
	<title>{metadata[0].name}</title>
	<meta name="description" content={metadata[0].description}>
	<meta name="theme-color" content={metadata[0].color}>
    
	<!--	 Facebook	 -->
	<meta property="og_site_name" content=“Example.com”>
	<meta property="og:url" content="https://www.example.com{$page.url.pathname.toString()}">
	<meta property="og:type" content="website">
	<meta property="og:title" content={metadata[0].name}>
	<meta property="og:description" content={metadata[0].description}>
	<meta property="og:image" content={metadata[0].thumbnailImage.asset._ref}>

	<!-- 	Twitter / X 	-->
	{#if metadata[0].thumbnailBig}
    <meta name="twitter:card" content="summary_large_image">
	{/if}
	<meta property="twitter:domain" content="example.com">
	<meta property="twitter:url" content="https://www.example.com{$page.url.pathname.toString()}">
	<meta name="twitter:title" content="{metadata[0].name}">
	<meta name="twitter:description" content={metadata[0].description}>
	<meta name="twitter:image" content={image}>
	<meta name="twitter:site" content="@username" />
    {/await}

</svelte:head>