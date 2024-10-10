<script lang="ts">
    import { page } from "$app/stores";
    
    let title = "Funkit";
	let description = "Funkit är en idéell förening med syfte att föra samman människor genom ett gemensamt intresse av olika sorters popkultur, så som spel, anime, böcker, och massor av andra spännande intressen! Föreningens plan är att en gång om året kunna arrangera VänCon, Nordens nyaste och mysigaste konvent där målet är att alla ska trivas oavsett vem man är.  🎉💖🌟!";
	let image = "/thumbnail.png";
	let themeColor = "#f02525";
	let thumbnailBig = true;
	let domain = "funkit.vercel.app";
	let twittername = "";
</script>

<svelte:head>
		<link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🌸</text></svg>">
		<title>{title}</title>
		<meta name="description" content={description}>
		<meta name="theme-color" content={themeColor}>
		
		<!--	 Facebook	 -->
		<meta property="og_site_name" content=“{domain}”>
		<meta property="og:url" content="https://www.{domain}{$page.url.pathname.toString()}">
		<meta property="og:type" content="website">
		<meta property="og:title" content={title}>
		<meta property="og:description" content={description}>
		<meta property="og:image" content={image}>

		<!-- 	Twitter / X 	-->
		{#if thumbnailBig}
			<meta name="twitter:card" content="summary_large_image">
		{/if}
		<meta property="twitter:domain" content="{domain}">
		<meta property="twitter:url" content="https://www.{domain}{$page.url.pathname.toString()}">
		<meta name="twitter:title" content="{title}">
		<meta name="twitter:description" content={description}>
		<meta name="twitter:image" content={image}>
		{#if twittername.length > 0}
			<meta name="twitter:site" content={"@" + twittername} />
		{/if}

</svelte:head>