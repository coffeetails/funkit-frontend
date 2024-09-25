<script lang="ts">
    import { page } from "$app/stores";
	import Navigation from "$lib/components/layout/Navigation.svelte";
	let title = "Funkit";
	let description = "🎡✨ Föreställ dig en magisk karusell där regnbågsfärgade droppar 🌀💧 hoppar och studsar som glada stjärnfall ⭐️💫! Blått som havsälvor som kittlar dina tår 🌊🧚, rött som små eldflugor som viskar hemligheter 🔥🦋, gult som solstrålar som dansar på ditt huvud ☀️🎩, och rosa som enhörningar som galopperar på sockervaddsmoln 🦄🍭! De virvlar ihop i en magisk cirkel 🔄, som ett kosmiskt disco 🪩🛸 där varje färg sjunger sin egen galna melodi 🎶🎨! Universum gör en glädjevolt 🤸‍♂️🌈, där varje liten droppe bidrar till en glittrande explosion av kärlek, skratt och ren magi 🎉💖🌟!";
	let image = "https://images.vexels.com/media/users/3/142789/isolated/lists/2bfb04ad814c4995f0c537c68db5cd0b-multicolor-swirls-circle-logo.png";
</script>

<svelte:head>
	<!-- 	Metadata	 -->
	<link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🌸</text></svg>">
	<title>{title}</title>
	<meta name="description" content={description}>
	<meta name="theme-color" content="#f02525">

	<!--	 Facebook	 -->
	<meta property="og_site_name" content=“Example.com”>
	<meta property="og:url" content="https://www.example.com{$page.url.pathname.toString()}">
	<meta property="og:type" content="website">
	<meta property="og:title" content={title}>
	<meta property="og:description" content={description}>
	<meta property="og:image" content={image}>

	<!-- 	Twitter / X 	-->
	<meta name="twitter:card" content="summary_large_image"> <!-- Toggle for thumbnail size -->
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