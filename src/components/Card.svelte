<script lang="ts">
	import { formatDate } from '$lib/utils';
	import { urlFor } from '$lib/utils/image';
	// import type { PageData } from './$types';
	import type { Post } from '$lib/utils/sanity';

	export let post: Post;
	console.log(post);
</script>

<div class="card">
	{#if post.image}
		<img
			class="card__cover"
			src={urlFor(post.image).width(500).height(300).url()}
			alt="Cover image for {post.name}"
		/>
	{:else}
		<div class="card__cover--none" />
	{/if}

	<div class="card__container">
		<h3 class="card__name">
			<a class="card__link" href={`/post/${post.slug.current}`}>
				{post.name}
			</a>
		</h3>
		<p class="card__date">
			{post.date}
		</p>
	</div>
</div>
