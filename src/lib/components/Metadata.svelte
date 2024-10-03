<script lang="ts">
    import { page } from "$app/stores";
    import { urlFor } from "$lib/utils/image";
    import { getMetadata } from "$lib/utils/sanity";
    
    let title = "Funkit";
	let description = "✨ Funkit är en idéell förening med syfte att föra samman människor genom ett gemensamt intresse av olika sorters popkultur, så som spel, anime, böcker, och massor av andra spännande intressen! Föreningens plan är att en gång om året kunna arrangera VänCon, Nordens nyaste och mysigaste konvent där målet är att alla ska trivas oavsett vem man är.  🎉💖🌟!";
	let image = "https://cdn.discordapp.com/attachments/1274041105918328926/1287404782180368404/IMG_0956.png?ex=66f56122&is=66f40fa2&hm=79e3e28fb71731ee276c9393e845d5ce5c414c92bd7e9408fc99dd365e77a44f&";
	let themeColor = "#f02525";
	let thumbnailBig = false;
</script>

<svelte:head>
    {#await getMetadata() then metadata}
		<!-- {console.log(metadata)} -->
		<!-- 	Metadata	 -->
		<link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🌸</text></svg>">
		<title>{metadata.name}</title>
		<meta name="description" content={metadata.description}>
		<meta name="theme-color" content={metadata.color}>
		
		<!--	 Facebook	 -->
		<meta property="og_site_name" content=“{metadata.domain}”>
		<meta property="og:url" content="https://www.{metadata.domain}{$page.url.pathname.toString()}">
		<meta property="og:type" content="website">
		<meta property="og:title" content={metadata.name}>
		<meta property="og:description" content={metadata.description}>
		<meta property="og:image" content={urlFor(metadata.thumbnailImage).url()}>

		<!-- 	Twitter / X 	-->
		{#if metadata.thumbnailBig}
			<meta name="twitter:card" content="summary_large_image">
		{/if}
		<meta property="twitter:domain" content="{metadata.domain}">
		<meta property="twitter:url" content="https://www.{metadata.domain}{$page.url.pathname.toString()}">
		<meta name="twitter:title" content="{metadata.name}">
		<meta name="twitter:description" content={metadata.description}>
		<meta name="twitter:image" content={urlFor(metadata.thumbnailImage).url()}>
		{#if metadata.twittername}
			<meta name="twitter:site" content={"@" + metadata.twittername} />
		{/if}
    {/await}

</svelte:head>