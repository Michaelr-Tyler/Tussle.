import React, { useContext, useEffect } from "react"
import { EventContext } from "./EventProvider"  
import { UsersContext } from "../users/UsersProvider"
import { UserEventContext } from "./UserEventProvider"
import "./Events.css"
import { EventCard } from "../utils/EventCard"

export const WrestlerMyEventsList = (props) => {
    const {events, getEvents} = useContext(EventContext)
    const { userEvents, getUserEvents } = useContext(UserEventContext)
    const { currentUser,getCurrentUser} = useContext(UsersContext)

    useEffect(() => {
        getEvents()
        getCurrentUser()
        getUserEvents()
    },[])


    const currentUserEvents = userEvents.filter((ue) => {
        const currentUserBidEventsRelationships = events.filter(evt => evt.id === ue.eventId && currentUser.id === ue.userId)
        return currentUserBidEventsRelationships.length !== 0
    })

    const renderWrestlerEvents = () => {
        return (
        <>
            <h1 className="wrestlerMyEvents--title">My Events</h1>
            <section className="userEventsContainer">
                <div className="userEvents">
                    {
                        currentUserEvents.map(cue => {
                        if(cue.booked === true){
                            return (
                                <div className="booked">
                                    <EventCard key={cue.id} 
                                    event = {cue.event} 
                                    props={props}/>
                                    <div>Booked</div>
                                </div>
                            )
                        };
                    })
                    }
                </div>
            </section>
        </>
        );
    };

    return renderWrestlerEvents();
}