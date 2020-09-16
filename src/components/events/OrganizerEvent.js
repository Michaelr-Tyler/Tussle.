import React, {useContext, useEffect, useState} from "react"
import { EventContext } from "./EventProvider";
import "./Events.css"

export const OrganizerEvent = ({ event, technical }) => {
    const {deleteEvent, getEventById} = useContext(EventContext)


   

    return (
    <section className="event organizer">
        <h3>Presenting: {event.name}</h3>
        <div>{new Date(event.date + 86400000).toLocaleDateString("en-US")  }</div>
        <div>In {event.locationCity}, {event.locationStateCode}</div>
        <div>Looking for: {technical.type}</div>
        <button
        onClick={
            ()=> deleteEvent(event.id || {})
        }>
            Delete Event
        </button>
    </section>
    )
}