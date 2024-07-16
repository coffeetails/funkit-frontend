import Link from "next/link";
import { SanityDocument } from "next-sanity";

import { sanityFetch } from "@/app/client";

import Navigation from "./navigation";
export default async function IndexPage() {
    return (
        <div className="homeWrapper">
            <Navigation/>

            <aside className="news">
                <h2>Senaste nyheten: Biljetter snart tillgängliga för VänCon!</h2>
                <img src="https://picsum.photos/200/75" className="mascot" alt="a placeholder image"/>
                <p>För alla anime- och spelentusiaster är det äntligen dags att markera kalendern och förbereda sig för en helg full av äventyr och gemenskap! Evenemanget, som lovar att vara en hängiven hyllning till anime, spel och det värdefulla bandet mellan likasinnade, meddelar att biljetterna... <Link href="#" className="link">fortsätt läsa här</Link></p>
            </aside>
            
            <main className="mainContent"> 
                <h1>VänCon 2025</h1>
                <h3>När glöden svalnat, ur askan ska vi återuppstå...</h3>
                <p className="preface">Välkommen till en helg full av gemenskap, glädje och äventyr! Vi är så glada att du har anslutit dig till vårt speciella evenemang där vi hyllar vår kärlek till anime, spel och viktigast av allt, varandra.</p>
                <p>Detta är inte bara ett tillfälle att dyka in i fantastiska världar av anime och spel, utan också en plats där alla är välkomna, oavsett bakgrund, intressen eller erfarenheter. Vi tror på att skapa en atmosfär där varje individ kan känna sig inkluderad, sedd och hörd.</p>
                <p>Under denna helg kommer vi att utforska otaliga dimensioner av animevärlden, dela våra favoritminnen från spelens värld och skapa nya, oförglömliga ögonblick tillsammans. Oavsett om du är en erfaren animeentusiast, en ivrig gamer eller bara nyfiken på att utforska, så är detta din plats att vara dig själv och skapa meningsfulla band med andra likasinnade.</p>
                <p>Så släpp loss din inre otaku, vässa dina kontroller och förbered dig på att omfamna gemenskapen som bara ett evenemang som detta kan erbjuda. Låt oss tillsammans skapa en helg fylld av skratt, vänskap och spännande äventyr!</p>
                <p>Välkommen till vår värld. Välkommen hem.</p>
                <p className="fineprint">Just a lil fineprint.</p>
            </main>
        </div>
    );
}