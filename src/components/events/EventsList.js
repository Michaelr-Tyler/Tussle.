import React, { useContext, useEffect, useState } from "react"
import { EventContext } from "./EventProvider"  
import { OrganizerEvent } from "./OrganizerEvent"
import { UsersContext } from "../users/UsersProvider"
import { TechnicalContext } from "../TechnicalProvider"
import "./Events.css"

export const EventsList = ({history}) => {
    const {events, getEvents} = useContext(EventContext)
    const {technicals, getTechnicals } = useContext(TechnicalContext)
    const {currentUser, getCurrentUser} = useContext(UsersContext)
    

    
    

    useEffect(() => {
        getEvents()
        .then(getTechnicals)
        .then(getCurrentUser)
        
    },[])
    
    const currentUserEvents = events.filter(e => e.userId === currentUser.id) || {}
    // const sortCurrentUserEvents = currentUserEvents.sort((a,b) => a.date - b.date) || []
    // console.log(sortCurrentUserEvents)

    


    return (
        <>
        <h1 className="organizerEvent--title">My Events</h1>

            <div className="buttonContainer">
            <button className="button--newEvent" onClick={() => history.push("/events/create")}
            >
                Create New Event
            </button>
            </div>
        <section className="organizerEventsContainer">
            <div className="organizer--events">
                {
                    currentUserEvents.map(event => {
                    const type = technicals.find(t => t.id === event.technicalId) || {}
                    return (
                    <>
                    <OrganizerEvent key={event.id} 
                    event={event}
                    history={history}
                    technical = {type} />
                    </>
                    )
                })
                }
            </div>
            
        </section>
        </>
    )

}