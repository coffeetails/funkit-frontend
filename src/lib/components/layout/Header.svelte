<script lang="ts">
    import { getPageHome } from '$lib/utils/sanity';
    export let displayMobileMenu: boolean;
    export let currentPath: string;
    
    function changeState() {
        if(displayMobileMenu) {
            displayMobileMenu = false;
        } else if(!displayMobileMenu) {
            displayMobileMenu = true;
        }
    }
</script>


<header>
    <button id="menuButton" on:click={changeState} class={displayMobileMenu?'open':''}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </button>
    <!-- </div> -->
    
    {#await getPageHome(currentPath)}
        <h3>Funkit</h3>
	{:then value}
        <h3>{value.title}</h3>
		<!-- <h1><a href={value.slug != "/" ? "/"+value.slug : "/"}>{@html neatLinebreak(value.title)}</a></h1> -->
	{/await}

    <div id="placeholder"></div>
</header>


<style>
    header {
        z-index: 15;
        /* position: absolute; */
        position: fixed;
        top: 0;
        right: 0;
        left: 0;
        background-color: #fafafa;
        padding: 0.5rem;

        display: flex;
        justify-content: space-between;
        gap: 0.25rem;
        box-shadow: 0 0 0.5rem 0.5rem #16161689;
    }

    #placeholder {
        width: 10dvw;
        max-width: 60px;
        /* border: 1px solid gray; */
    }
    
    #menuButton {
        position: sticky;
        all: unset;
        width: 60px;
        height: 45px;
        border: 4px solid transparent;
        border-radius: 9px;
        position: relative;
        /* margin: 50px auto; */
        -webkit-transform: rotate(0deg);
        -moz-transform: rotate(0deg);
        -o-transform: rotate(0deg);
        transform: rotate(0deg);
        -webkit-transition: .5s ease-in-out;
        -moz-transition: .5s ease-in-out;
        -o-transition: .5s ease-in-out;
        transition: .5s ease-in-out;
        cursor: pointer;
    }
    #menuButton, #menuButton * {
        z-index: 20;
    }
    #menuButton:focus-visible {
        border: 4px solid #217776;
    }

    #menuButton span {
        display: block;
        position: absolute;
        height: 9px;
        width: 100%;
        background: var(--black);
        border-radius: 9px;
        opacity: 1;
        left: 0;
        -webkit-transform: rotate(0deg);
        -moz-transform: rotate(0deg);
        -o-transform: rotate(0deg);
        transform: rotate(0deg);
        -webkit-transition: .25s ease-in-out;
        -moz-transition: .25s ease-in-out;
        -o-transition: .25s ease-in-out;
        transition: .25s ease-in-out;
    }

    #menuButton span:nth-child(1) {
    top: 0px;
    }

    #menuButton span:nth-child(2),#menuButton span:nth-child(3) {
    top: 18px;
    }

    #menuButton span:nth-child(4) {
    top: 36px;
    }

    #menuButton.open span:nth-child(1) {
    top: 18px;
    width: 0%;
    left: 50%;
    }

    #menuButton.open span:nth-child(2) {
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    transform: rotate(45deg);
    }

    #menuButton.open span:nth-child(3) {
    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    -o-transform: rotate(-45deg);
    transform: rotate(-45deg);
    }

    #menuButton.open span:nth-child(4) {
    top: 18px;
    width: 0%;
    left: 50%;
    }

    @media (min-width: 670px) and (min-height: 400px){
        header {
            display: none;
        }
    }
</style>