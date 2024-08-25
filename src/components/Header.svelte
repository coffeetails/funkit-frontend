<script lang="ts">
    export let displayMobileMenu: boolean;
    function changeState() {
        console.log("1");
        if(displayMobileMenu) {
            console.log("2");
            displayMobileMenu = false;
        } else if(!displayMobileMenu) {
            console.log("3");
            displayMobileMenu = true;
        }
    }
</script>

<header>
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <!-- <div id="menuButton" on:click={changeState} class={displayMobileMenu?'open':''}> -->
    <button id="menuButton" on:click={changeState} class={displayMobileMenu?'open':''}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </button>
    <!-- </div> -->
    <h3>Funkit</h3>
    <div id="placeholder"></div>
</header>

<style>
    header {
        z-index: 15;
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        background-color: #fafafa;
        padding: 0.5rem;

        display: flex;
        justify-content: space-between;
    }

    #placeholder {
        width: 60px;
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

    @media (min-width: 670px) {
        header {
            display: none;
        }
    }
</style>