<script lang="ts">
    import TextAreaShadow from '$lib/components/TextAreaShadow.svelte';
    import { getUpdates } from '$lib/utils/sanity';
    import { PortableText } from '@portabletext/svelte';
    import ShareMedia from '$lib/components/ShareMedia.svelte';
    import { stringify } from 'postcss';
    import UpdateCard from '$lib/components/UpdateCard.svelte';
	

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
				<UpdateCard cardData={updates} />
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
	
	h1 {
		width: 100%;
	}
	

	@media (max-width: 670px), (max-height: 400px) {
		main {
			border-radius: var(--border-radius);
		}
	}
 </style>