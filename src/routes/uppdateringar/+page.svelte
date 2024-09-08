<script lang="ts">
    import TextAreaShadow from '../../components/TextAreaShadow.svelte';
    import { getUpdates } from '$lib/utils/sanity';
    import { PortableText } from '@portabletext/svelte';
    import ShareMedia from '../../components/ShareMedia.svelte';
    import { stringify } from 'postcss';
	

	function parseDate(rawDate: string | number | Date) {
		let date = new Date(rawDate);
		var dateNow = new Date();

		var seconds = Math.floor(( (dateNow.getTime()) - date.getTime() )/1000);
		var minutes = Math.floor(seconds/60);
		var hours = Math.floor(minutes/60);
		var days = Math.floor(hours/24);

		hours = hours-(days*24);
		minutes = minutes-(days*24*60)-(hours*60);
		seconds = seconds-(days*24*60*60)-(hours*60*60)-(minutes*60);
		
		let displayDate = `${date.getFullYear()}-${("0" + date.getMonth()).slice(-2)}-${("0" + date.getDate()).slice(-2)}`;

		if(days == 1) {
			displayDate = days + " dag sedan";
		} else if(days > 0 && days < 60) {
			displayDate = days + " dagar sedan";
		} else if(hours == 1) {
			displayDate = hours + " timme sedan";
		} else if(hours > 0) {
			displayDate = hours + " timmar sedan";
		} else if(seconds == 1) {
			displayDate = minutes + " minut sedan";
		} else if(seconds > 0) {
			displayDate = minutes + " minuter sedan";
		}
		
		return displayDate;
	}

</script>

<svelte:head>
	<title>Uppdateringar</title>
</svelte:head>

<main id="main">
	<div class="mainContentWrapper">
		<h1>Uppdateringar</h1>
		{#await getUpdates()}
			loading
		{:then updates} 
			{#each updates as update}
				<section>
					<div class="sectionInfo sectionHeader">
						<h5><a href={"uppdateringar/"+update.slug}>{update.title}</a></h5>
						<p>{@html parseDate(update.created)}</p>
						<!-- <a href={"uppdateringar/"+update.slug}>Läs hela</a> -->
						<!-- <p>share buttons?</p> -->
					</div>

					<a class="wrapper" href={"uppdateringar/"+update.slug}>
						<!-- <div class="wrapper"> -->
							<div class="articleTeaser">
							<!-- <h2>{update.title}</h2> -->
								<!-- <p>{JSON.stringify(update.content[0].children[0].text)}</p> -->
								<PortableText value={update.content} />
							</div>
							<TextAreaShadow />
						<!-- </div> -->
					</a>
					
					<div class="sectionInfo sectionFooter">
						<!-- <p>{@html parseDate(update.created)}</p> -->
						<!-- <a href={"uppdateringar/"+update.slug}>Läs hela</a> -->
						<ShareMedia />
					</div>
				</section>
			{/each}		
		{/await}
	</div>
	<TextAreaShadow />
</main>

<style>
	main {
		border-radius: var(--small-border-radius);
		border-bottom-right-radius: var(--border-radius);
		border-top-right-radius: var(--border-radius);
	}
	section {
		flex: 1 1 auto;
		
		position: relative;
		border: var(--border-style);
		border-radius: var(--border-radius);
		box-shadow: 0.25rem 0.25rem 0.5rem #5e5e5e;
		/* padding: 0.5rem 1rem; */
		margin: 1.5rem 0;
		
		/* max-height: 20rem;
		min-height: 10rem; */
		/* max-height: 20rem; */
		max-height: 15rem;
		overflow: hidden;

		display: flex;
		flex-direction: column;
	}
	/* section h2 {
		text-align: center;
		padding-bottom: 0.5rem;
		font-size: 1.75rem;
	} */
	
	.wrapper {
		position: inherit;
		width: 100%;
		max-height: inherit;
		height: inherit;
		overflow: hidden;
		border: none;
	}
	.wrapper:hover {
		border: none;
	}

	.sectionInfo {
		padding: 0.25rem;
		background-color: #fafafa;
		padding: 0.25rem 1rem;
		
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		/* justify-content: space-around; */
		align-items: center;
	}
	.sectionHeader {
		border-bottom: 1px solid #0a0a0a;
		justify-content: space-between;
		/* flex-direction: column;
		line-height: 0;
		padding-left: 0.5rem;
		padding-top: 0.75rem; */
	}
	.sectionFooter {
		border-top: 1px solid #0a0a0a;
		justify-content: flex-end;
		gap: 3rem;
	}
	
	.sectionHeader a {
		/* border-bottom-color: transparent; */
	}
	a:hover {
		border: 2px solid var(--black);
	}
	.sectionInfo > a {
		width: 15%;
		min-width: 5rem;
		text-align: center;
		line-height: 150%;
	}

	.articleTeaser {
		position: inherit;
		width: min-content;
		width: 100%;
		/* max-height: inherit; */
		height: inherit;
		/* height: fit-content; */
		/* overflow: hidden; */
		padding: 1rem 2rem;
		
		/* text-overflow: ellipsis;
		white-space: nowrap; */
		overflow: hidden;
	}

	h1 {
		width: 100%;
	}
	

	@media (max-width: 670px) {
		main {
			border-radius: var(--border-radius);
		}
		section {
			max-height: 40vh;
		}
		
		.sectionInfo > a {
			order: -1;
			width: 40%;
			min-width: 5rem;
			margin: 0 25%;
			position: relative;
		}
	}
 </style>