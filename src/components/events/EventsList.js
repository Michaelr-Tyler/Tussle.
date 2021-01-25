import React, { useContext, useEffect } from "react";
import { EventContext } from "./EventProvider";
import { EventCard } from "../utils/EventCard";
import { Button } from "../utils/Button";
import { UsersContext } from "../users/UsersProvider";
import { TechnicalContext } from "../TechnicalProvider";
import "./Events.css";

export const EventsList = (props) => {
    const {events, getEvents, deleteEvent} = useContext(EventContext)
    const {technicals, getTechnicals } = useContext(TechnicalContext)
    const {currentUser, getCurrentUser} = useContext(UsersContext)
    

    
    

    useEffect(() => {
        getEvents()
        .then(getTechnicals)
        .then(getCurrentUser)
        
    },[])
    
    const currentUserEvents = events.filter(e => e.userId === currentUser.id) || {}


    


    return (
        <>
        <h1 className="organizerEvent--title">My Events</h1>

            <div className="buttonContainer">
            <button className="button--newEvent" onClick={() => props.history.push("/events/create")}
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
                    <div key={event.id}>
                    <EventCard 
                    event={event}
                    technical = {type} />
                    <Button label={"Edit Event"} 
                    onClick={()=> props.history.push(`/events/edit/${event.id}`)} />
                    <Button label={"Delete Event"}
                    onClick={()=> deleteEvent(event.id)} />
                    </div>
                    )
                })
                }
            </div>
            
        </section>
        </>
    )

}