<script lang="ts">

let link = "#";
let newsTitle = "VänCon på G!";
</script>

<aside>
	<section>
		<h5><a href={link}>Senaste nyheten: {newsTitle}</a></h5>
		<p>Lorem ipsum odor amet, consectetuer adipiscing elit. At metus habitasse cursus fermentum penatibus curae. Sodales nisl risus cursus vivamus, laoreet elit iaculis! <a href={link}>... fortsätt läsa.</a></p>
	</section>
	<img src="https://picsum.photos/100" alt="mascot" />
</aside>

<style>
	aside {
		max-height: 10rem;
		margin: 0.25rem;
		border: var(--border-style);
		border-radius: var(--small-border-radius);
		border-top-right-radius: var(--border-radius);
		padding: 0.5rem 0.5rem 0.5rem 2rem;
		background-color: #fafafab9;

		display: flex;
	}
    
    img {
		max-height: 9rem;
		height: 100%;
        margin-left: auto;
        border-radius: var(--border-radius);
    }


	@media (min-width: 671px) and (max-width: 900px) {
		aside {
			align-items: center;
		}
		p {
			display: none;
		}
		img {
			max-height: 3rem;
		}
	}
	
	@media (max-width: 670px) {
		aside {
			border-top-left-radius: var(--border-radius);
		}
		p {
			display: none;
		}
		img {
			display: none;
		}
	}
</style>