<script lang="ts">
	import News from '../components/News.svelte';
    import TextAreaShadow from '../components/TextAreaShadow.svelte';

</script>

<section>
	<News />
	<article>
		<p>Lorem ipsum odor amet, consectetuer adipiscing elit. At metus habitasse cursus fermentum penatibus curae. Sodales nisl risus cursus vivamus, laoreet elit iaculis! Laoreet dignissim commodo amet; a parturient id. Dignissim velit pretium dapibus interdum fusce tristique rhoncus fringilla. Finibus consectetur penatibus elit donec finibus ridiculus erat finibus. Lobortis fusce senectus velit cras himenaeos penatibus cubilia. Nunc eros pharetra natoque dignissim suscipit odio sociosqu tempus. Lorem lacinia porttitor vivamus laoreet aliquam arcu molestie.</p>

		<p>Sollicitudin ac ridiculus nostra posuere maximus. Ante nascetur a litora, conubia eros suspendisse cubilia. Litora aliquam placerat porta interdum suspendisse. Rutrum ornare ipsum integer; habitant facilisi enim. Leo condimentum curabitur ipsum dolor ante vitae purus. Ante fames magna posuere bibendum sapien sit. Quam congue natoque nibh finibus et inceptos gravida. Mi bibendum maecenas donec maximus parturient euismod viverra accumsan. Curae imperdiet interdum aenean magna mattis.</p>

		<p>Lorem ipsum odor amet, consectetuer adipiscing elit. At metus habitasse cursus fermentum penatibus curae. Sodales nisl risus cursus vivamus, laoreet elit iaculis! Laoreet dignissim commodo amet; a parturient id. Dignissim velit pretium dapibus interdum fusce tristique rhoncus fringilla. Finibus consectetur penatibus elit donec finibus ridiculus erat finibus. Lobortis fusce senectus velit cras himenaeos penatibus cubilia. Nunc eros pharetra natoque dignissim suscipit odio sociosqu tempus. Lorem lacinia porttitor vivamus laoreet aliquam arcu molestie.</p>

		<p>Sollicitudin ac ridiculus nostra posuere maximus. Ante nascetur a litora, conubia eros suspendisse cubilia. Litora aliquam placerat porta interdum suspendisse. Rutrum ornare ipsum integer; habitant facilisi enim. Leo condimentum curabitur ipsum dolor ante vitae purus. Ante fames magna posuere bibendum sapien sit. Quam congue natoque nibh finibus et inceptos gravida. Mi bibendum maecenas donec maximus parturient euismod viverra accumsan. Curae imperdiet interdum aenean magna mattis.</p>

		<TextAreaShadow />
	</article>
</section>

<style>
	article {
		position: relative;
		width: fit-content;
		/* height: 500px; */
		max-height: 30rem;
		margin: 0.25rem;
		border: var(--border-style);
		border-radius: var(--small-border-radius);
		border-bottom-right-radius: var(--border-radius);
		padding: 0.5rem 2rem;
		background-color: #fafafa;
		overflow: scroll;
	}
	
	/* h1, h2, h3 {
		text-align: center;
	} */

	@media (max-width: 670px) {
		article {
			border-bottom-left-radius: var(--border-radius);
		}
	}


</style>