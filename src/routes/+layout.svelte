<script lang="ts">
	import Navigation from "../components/Navigation.svelte";

</script>

<div class="pageWrapper">
	<div class="contentWrapper">
		<Navigation />
		<div class="yetAnotherWrapper">
			<slot />
		</div>
	</div>
</div>

<style>


	.pageWrapper {
		width: 100dvw;
		height: 100dvh;
		/* padding: 1rem; */
		display: flex;
		align-items: center;
		justify-content: center;

		/* align-content: flex-start; */
	}
	.contentWrapper {
		margin: auto;
		/* margin-top: 5rem; */
		max-width: 70rem;
		/* max-height: 70dvh; */
		width: fit-content;
		margin: 0 1rem;

		display: grid;
		justify-items: stretch;
		align-items: stretch;
		justify-content: stretch;
		grid-template-columns: repeat(2, auto);
		/* grid-template-rows: repeat(2, auto); */
	}
	.yetAnotherWrapper {
		display: flex;
		flex-direction: column;
		align-items: stretch;
	}
	
	@media (max-width: 670px) {
		.pageWrapper {
			/* background: url(background.svg);
			background-attachment: fixed;
			background-size: cover;
			background-position: center center; */
			/* height: 100dvh; */
			width: 100dvw;
			margin: 0;
			padding: 0.5rem;
			padding-top: 5rem;
		}
		div {
			height: auto;
		}
	}
</style>