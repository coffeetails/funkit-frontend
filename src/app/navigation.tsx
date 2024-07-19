import Link from "next/link";
import { SanityDocument } from "next-sanity";
import { sanityFetch } from "@/app/client";

import './navigation.css';

const EVENTS_QUERY_MENU = `*[
    _type == "event"
    && defined(slug.current)
  ]{_id, name, slug, date}|order(date desc)`;



export default async function Navigation() {
    const events = await sanityFetch<SanityDocument[]>({query: EVENTS_QUERY_MENU});
    
    return (
        <nav className="navigation">
            <h1>Fun&#8203;Kit</h1>
            <h3>Meny</h3>
            <ul>
                <li><Link href="/">Hem</Link></li>
                <li><Link href="/">Nyheter</Link></li>
                <li><Link href="/">Sponsorer</Link></li>
                {events.map((event) => (
                    <li key={event._id} >
                        <Link href={`/events/${event.slug.current}`}>{event?.name}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    )   
}