<script lang="ts">
	import Navigation from "../components/Navigation.svelte";

</script>

<div class="pageWrapper">
	<div class="contentWrapper">
		<Navigation />
		<slot />
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
	}
	.contentWrapper {
		margin: auto;
		/* margin-top: 5rem; */
		max-width: 70rem;
		width: fit-content;
		display: flex;
		align-items: stretch;
	}
	
	@media (max-width: 670px) {
		div {
			background: url(background.svg);
			background-attachment: fixed;
			background-size: cover;
			background-position: center center;
			height: 100dvh;
			width: 100dvw;
			margin: 0;
			padding: 0.5rem;
			padding-top: 5rem;
		}
	}
</style>