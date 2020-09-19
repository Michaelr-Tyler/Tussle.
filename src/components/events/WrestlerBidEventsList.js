import React, { useContext, useEffect } from "react"
import { EventContext } from "./EventProvider"  
import { UsersContext } from "../users/UsersProvider"
import { TechnicalContext } from "../TechnicalProvider"
import { UserEventContext } from "./UserEventProvider"
import { WrestlerBid } from "./WreslterBids"
import "./Events.css"

export const WrestlerBidEventsList = ({history}) => {
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

    const currentUserBidEvents = events.filter((evt) => {
        const currentUserBidEventsRelationships = userEvents.filter(ue => ue.eventId === evt.id && currentUser.id === ue.userId)
        return currentUserBidEventsRelationships.length !== 0
    }) || {}
    

    return (
        <section className="organizerEventsContainer">
            <h1>My Events</h1>
            <div className="events wrestlerMyEvent">
                {
                    currentUserBidEvents.map(ce => {
                    const type = technicals.find(t => t.id === ce.technicalId) || {}
                    const userEvent = userEvents.find(ue => ue.userId === currentUser.id)
                    return (
                    <>
                    <WrestlerBid key={ce.id} 
                    event={ce}
                    history={history}
                    userEvent = {userEvent}
                    technical = {type} />
                    
                    </>
                    )
                })
                }
            </div>
        </section>
    )

}