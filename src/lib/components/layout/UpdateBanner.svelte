<script lang="ts">
    import { getLatestUpdate } from "$lib/utils/sanity";
    import { PortableText } from "@portabletext/svelte";
    import TextAreaShadow from "$lib/components/TextAreaShadow.svelte";

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

	$: innerWidth = 0;
</script>

<svelte:window bind:innerWidth />

<aside>
	{#await getLatestUpdate()}
	Hämtar senaste uppdateringen...
	{:then update} 
		<a class="textWrapper" href={"uppdateringar/"+update.slug}>
			<!-- <i>Senaste uppdateringen: </i> -->
			<h5><a href={"uppdateringar/"+update.slug}>Senaste uppdateringen: {update.title}</a></h5>
			<i>{@html parseDate(update.created)}</i>
			{#if innerWidth > 900}
				<PortableText value={update.content}  />
				<TextAreaShadow />
			{/if}
		</a>
		<!-- <span class="continueRead">...<a href={'uppdateringar/'+update.slug}>fortsätt läsa.</a></span> -->
		{/await}
	<img src="https://picsum.photos/100" alt="mascot" />
</aside>

<style>
	aside {
		position: relative;
		max-height: 8rem;
		overflow: hidden;
		margin: 0.25rem;
		border: var(--border-style);
		border-radius: var(--small-border-radius);
		border-top-right-radius: var(--border-radius);
		padding: 0.5rem 0.5rem 0.5rem 2rem;
		background-color: #fafafa;

		display: flex;
	}
	.textWrapper {
		/* width: 45rem; */
		position: relative;
		/* overflow: hidden; */
		border: none;
	}
	.textWrapper * {
		display: inline;
	}
	i {
		white-space: nowrap;
		align-self: end;
	}
    .continueRead {
		position: absolute;
		bottom: 1rem;
		/* left: 0; */
		right: 7.25rem;
		padding: 0 0.25rem;
		/* border: 1px solid yellow; */
		background-color: #fafafa;
		z-index: 3;
		box-shadow: -0.5rem 0rem 0.5rem 0.25rem #fafafa;
	}
    img {
		max-height: 9rem;
		height: 100%;
        margin-left: auto;
        border-radius: var(--border-radius);
		z-index: 2;
    }


	@media (min-width: 671px) and (max-width: 900px) {
		aside {
			/* height: 5rem; */
		}
		.textWrapper {
			/* height: 6rem; */
		}
		img {
			max-height: 3rem;
		}
	}
	
	@media (max-width: 670px) {
		aside {
			border-top-left-radius: var(--border-radius);
			/* height: 4.5rem; */
		}
		.textWrapper {
			/* height: 7rem; */
		}
		img {
			display: none;
		}
	}
</style>