import React from "react"
import "./Events.css"

export const WrestlerBid = ( {event, technical, userEvent  }) => {



if (userEvent.denied !== false) {
    return (
    <section className="event wrestlerMyEvents">
        <h3>Presenting: {event.name}</h3>
        <div>{event.date}</div>
        <div>In {event.locationCity}, {event.locationStateCode}</div>
        <div>Looking for: {technical.type}</div>
        <div>Denied</div>
        <button>delete</button>
    </section>
    )
 } else if (userEvent.denied !== true) {
    return (
    <section className="event wrestler">
        <h3>Presenting: {event.name}</h3>
        <div>{event.date}</div>
        <div>In {event.locationCity}, {event.locationStateCode}</div>
        <div>Looking for: {technical.type}</div>
        
    </section>
    )
 }
}