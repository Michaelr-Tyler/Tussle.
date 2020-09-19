import React from "react"
import "./Events.css"

export const OrganizerBids = ({ technical, userEvent,  }) => {
    /*GOAL: display event name and date. 
    Also display wrestler info(name, contact info, following, technical type) 
    as well as bid */
    
    return (
    <section className="event wrestlerBids">
        <h3>Event: {userEvent.event.name}</h3>
        <div>{userEvent.event.date}</div>
        <div>Bid: {userEvent.bid}</div>
        <button>Accept</button>
        <button>Deny</button>
        <button>Message</button> 
    </section>
    )
}