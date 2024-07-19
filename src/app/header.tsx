'use client'
import { useState } from "react";
import "./header.css";

export default function Header() {
    const [ displayMenu, setDisplayMenu ] = useState<boolean>(false);

    function toggleMenu(event: any) {
        if(displayMenu) {
            setDisplayMenu(false);
        } else {
            setDisplayMenu(true);
        }
        console.log("displayMenu", displayMenu);
        
        console.log("toggleMenu event", event);
        // bars.forEach(bar => bar.classList.toggle('x'))
    }

    return (
        <header>
            <a className="mobileMenuToggle" onClick={toggleMenu}>
                <span className={displayMenu ? "bar x" : "bar"}></span>
                <span className={displayMenu ? "bar x" : "bar"}></span>
                <span className={displayMenu ? "bar x" : "bar"}></span>
            </a>
            <h1>Funkit</h1>
        </header>
    )
}