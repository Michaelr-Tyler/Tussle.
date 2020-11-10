import React, {useContext, useEffect, useState} from "react"
import { EventContext } from "./EventProvider";
import "./Events.css"

export const OrganizerEvent = ({ event, technical, history }) => {
    const {deleteEvent} = useContext(EventContext)


   

    return (
    <section className="event organizer">
        <h3>Presenting: {event.name}</h3>
        <div>{event.date}</div>
        <div>In {event.locationCity}, {event.locationStateCode}</div>
        <div>Looking for: {technical.type}</div>
        <button
        onClick={
            ()=> deleteEvent(event.id || {})
        } className="btn btn-nonPrimary">
            Delete Event
        </button>
        <button onClick={() => {
                        history.push(`/events/edit/${event.id}`)
                    }} className="btn btn-nonPrimary">Edit</button>
    </section>
    )
}