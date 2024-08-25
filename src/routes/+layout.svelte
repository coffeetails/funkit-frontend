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
		width: 70rem;
		/* width: fit-content; */
		/* max-height: 70dvh; */
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
		div {
			height: auto;
		}
		.pageWrapper {
			/* background: url(background.svg);
			background-attachment: fixed;
			background-size: cover;
			background-position: center center; */
			/* height: 100dvh; */
			/* width: 90%; */
			width: 90dvw;
			margin: 0 auto;
			padding: 0.5rem;
			margin-top: 5rem;
		}
		.contentWrapper {
			width: inherit;
			margin: 0;
		}
		.yetAnotherWrapper {
			/* width: 90%; */
			width: inherit;
		}
	}
</style>