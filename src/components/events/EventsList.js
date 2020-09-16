import React, { useContext, useEffect, useState } from "react"
import { EventContext } from "./EventProvider"  
import { OrganizerEvent } from "./OrganizerEvent"
import { UsersContext } from "../users/UsersProvider"
import { TechnicalContext } from "../TechnicalProvider"
import "./Events.css"

export const EventsList = ({history}) => {
    const {getEvents, events} = useContext(EventContext)
    const { technicals, getTechnicals } = useContext(TechnicalContext)
    const {currentUser, getCurrentUser} = useContext(UsersContext)
    const [event, setEvent] = useState({})
    

    useEffect(() => {
        getEvents()
        getTechnicals()
        getCurrentUser()
        const matchingEvents = events.filter(e => e.userId === currentUser.id) || {}
        setEvent(matchingEvents)
        
    },[])

    // useEffect(() => {
    //     const matchingEvents = events.filter(e => e.userId === currentUser.id) || {}
    //     setEvent(matchingEvents)
    // },[events])

    console.log(event)
    return (
        <section className="organizerEventsContainer">
            <h1>My Events</h1>
            <button onClick={() => history.push("/events/create")}>
                New Event
            </button>
            <div className="events organizer">
                {
                    events.map(event => {
                    const type = technicals.find(t => t.id === event.technicalId) || {}
                    return (
                    <>
                    <OrganizerEvent key={event.id} 
                    event={event}
                    technical = {type} />
                    <button onClick={() => {
                        history.push(`/events/edit/${event.id}`)
                    }}>Edit</button>
                    </>
                    )
                })
                }
            </div>
        </section>
    )
}