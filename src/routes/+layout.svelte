<script lang="ts">
	import Navigation from "../components/Navigation.svelte";

</script>

<div class="contentWrapper">
	<Navigation />
	<div class="yetAnotherWrapper">
		<slot />
	</div>
</div>

<style>
	.contentWrapper {
		margin: 1rem;
		padding: 1rem 0;
		width: 70rem;
		height: 70dvh;
		/* width: fit-content; */
		/* max-height: 70dvh; */

		display: grid;
		justify-items: stretch;
		align-items: stretch;
		justify-content: stretch;
		grid-template-columns: repeat(2, auto);
		/* grid-template-rows: repeat(2, auto); */
	}
	.yetAnotherWrapper {
		align-items: stretch;
		justify-self: stretch;

		display: flex;
		flex-direction: column;
		align-items: stretch;
	}
	
	@media (max-width: 670px) {
		div {
			height: auto;
		}
		.contentWrapper {
			width: inherit;
			margin: 0;
			/* margin: 0 auto; */
		}
		.yetAnotherWrapper {
			/* width: 90%; */
			width: inherit;
		}
	}
</style>