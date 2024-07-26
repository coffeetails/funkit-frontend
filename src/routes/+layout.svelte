<main>
	<div>
		<slot />
	</div>
</main>

<style>
	main {
		width: 100vw;
		height: 100vh;
		border: 1px solid gray;
		padding: 1rem;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	div {
		margin: auto;
		max-width: 70rem;
		width: fit-content;
		display: flex;
	}
</style>