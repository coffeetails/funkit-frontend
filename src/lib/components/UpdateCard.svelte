<script lang="ts">
    import TextAreaShadow from '$lib/components/TextAreaShadow.svelte';
    import { PortableText } from '@portabletext/svelte';
    import ShareMedia from '$lib/components/ShareMedia.svelte';
	

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

    export let cardData;
</script>


{#each cardData as data}
    <section>
        <div class="sectionInfo sectionHeader">
            <h5><a href={"uppdateringar/"+data.slug}>{data.title}</a></h5>
            <p>{@html parseDate(data.created)}</p>
        </div>

        <a class="wrapper" href={"uppdateringar/"+data.slug}>
                <div class="articleTeaser">
                    <PortableText value={data.content} />
                </div>
                <TextAreaShadow />
            <!-- </div> -->
        </a>
        
        <div class="sectionInfo sectionFooter">
            <ShareMedia />
        </div>
    </section>
{/each}


<style>
	
	section {
		flex: 1 1 auto;
		
		position: relative;
		border: var(--border-style);
		border-radius: var(--border-radius);
		box-shadow: 0.25rem 0.25rem 0.5rem #5e5e5e;
		margin: 1.5rem 0;
		max-height: 15rem;
		overflow: hidden;

		display: flex;
		flex-direction: column;
	}
	
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
		background-color: #fafafa;
		padding: 0.25rem 1rem;
		
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		align-items: center;
	}
	.sectionHeader {
		border-bottom: 1px solid #0a0a0a;
		justify-content: space-between;
	}
	.sectionFooter {
		border-top: 1px solid #0a0a0a;
		justify-content: flex-end;
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
		height: inherit;
		padding: 1rem 2rem;
		overflow: hidden;
	}


	@media (max-width: 670px) {
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