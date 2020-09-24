import React from "react"
import "./Events.css"

export const WrestlerEvent = ( {event, technical, history  }) => {



    return (
    <section className="event">
        <h3>Presenting: {event.name}</h3>
        <div>{event.date}</div>
        <div>In {event.locationCity}, {event.locationStateCode}</div>
        <div>Looking for: {technical.type}</div>
        <button onClick={() => {
                        history.push(`/bid/${event.id}`)
                    }} className="btn btn-primary">Bid</button>
    </section>
    )
}