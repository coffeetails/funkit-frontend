<script lang="ts">
	import Navigation from "$lib/components/layout/Navigation.svelte";
	import Metadata from "$lib/components/Metadata.svelte";

</script>

<Metadata />

<div class="contentWrapper">
	<Navigation />
	<div class="yetAnotherWrapper">
		<slot />
		<span>
			
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