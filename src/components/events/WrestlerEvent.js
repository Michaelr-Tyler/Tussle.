import React from "react"
import  Moment  from "moment";
import "./Events.css"

export const WrestlerEvent = ( {event, technical, history  }) => {



    return (
    <section className="wrestlerEvent">
        <h3>{event.name}</h3>
        <div>{Moment(event.date).format("MMM Do YYYY")}</div>
        <div>Attending: {event.attendance}</div>
        <div>In {event.locationCity}, {event.locationStateCode}</div>
        <div>Looking for: {technical.type}</div>
        <button onClick={() => {
                        history.push(`/bid/${event.id}`)
                    }} className="btn btn-bid">Bid</button>
    </section>
    )
}