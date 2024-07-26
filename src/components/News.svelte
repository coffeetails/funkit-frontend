<aside>
	<img src="https://picsum.photos/100" alt="mascot" />
	<h3>Senaste nyheten:</h3>
	<p>news here plz</p>
</aside>

<style>
	aside {
		max-height: 10rem;
		margin: 0.25rem;
		border: var(--border-style);
		border-radius: var(--small-border-radius);
		border-top-right-radius: var(--border-radius);
		padding: 0.5rem 2rem;
		background-color: #fafafab9;
	}
    
    img {
        float: right;
        border-radius: var(--border-radius);
    }


	@media (min-width: 671px) and (max-width: 900px) {
		aside {
			min-height: 7.5rem;
		}
		aside > p {
			display: none;
		}
	}
	
	@media (max-width: 670px) {
		aside {
			border-top-left-radius: var(--border-radius);
		}
		aside > p {
			display: none;
		}
		aside > img {
			display: none;
		}
	}
</style>