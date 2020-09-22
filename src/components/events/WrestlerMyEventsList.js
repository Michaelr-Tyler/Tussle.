import React, { useContext, useEffect } from "react"
import { EventContext } from "./EventProvider"  
import { UsersContext } from "../users/UsersProvider"
import { TechnicalContext } from "../TechnicalProvider"
import { UserEventContext } from "./UserEventProvider"
import { WrestlerMyEvents } from "./WrestlerMyEvents"
import "./Events.css"

export const WrestlerMyEventsList = (props) => {
    const {events, getEvents} = useContext(EventContext)
    const {technicals, getTechnicals } = useContext(TechnicalContext)
    const { userEvents, getUserEvents } = useContext(UserEventContext)
    const { currentUser,getCurrentUser} = useContext(UsersContext)

    useEffect(() => {
        getEvents()
        .then(getTechnicals)
        .then(getCurrentUser)
        .then(getUserEvents)
    },[])


    const currentUserEvents = userEvents.filter((ue) => {
        const currentUserBidEventsRelationships = events.filter(evt => evt.id === ue.eventId && currentUser.id === ue.userId)
        return currentUserBidEventsRelationships.length !== 0
    }) || {}
    
    console.log(currentUserEvents)

    return (
        <section className="organizerEventsContainer">
            <h1>My Events</h1>
            <div className="events wrestlerMyEvent">
                {
                    currentUserEvents.map(cue => {
                    return (
                    <>
                    <WrestlerMyEvents key={cue.id} 
                    userEvent = {cue} 
                    props={props}/>
                    </>
                    )
                })
                }
            </div>
        </section>
    )

}