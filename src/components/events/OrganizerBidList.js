import React, { useContext, useEffect } from "react"
import { TechnicalContext } from "../TechnicalProvider"
import { UsersContext } from "../users/UsersProvider"
import { EventContext } from "./EventProvider"
import { UserEventContext } from "./UserEventProvider"
import { OrganizerBids } from "./OrganizerBid";


export const OrganizerBidList = () => {
    const {events, getEvents} = useContext(EventContext)
    const {technicals, getTechnicals } = useContext(TechnicalContext)
    const { userEvents, getUserEvents } = useContext(UserEventContext)
    const { currentUser,getCurrentUser, users, getUsers} = useContext(UsersContext)

    useEffect(() => {
        getEvents()
        .then(getTechnicals)
        .then(getCurrentUser)
        .then(getUserEvents)
    },[])

    // const currentUserBidEvents = events.filter((evt) => {
    //     const currentUserBidEventsRelationships = userEvents.filter(ue => ue.eventId === evt.id && currentUser.id === evt.userId)
    //     return currentUserBidEventsRelationships.length !== 0
    // }) || {}

    const currentUserBidEvents = userEvents.filter((ue) => {
        const currentUserBidEventsRelationships = events.filter(evt => evt.id === ue.eventId && currentUser.id === evt.userId)
        return currentUserBidEventsRelationships.length !== 0
    }) || {}




    return (
        <section className="organizerEventsContainer">
            <h1>Bids</h1>
            <div className="events wrestlerBids">
                {
                    currentUserBidEvents.map(cue => {
                    const type = technicals.find(t => t.id === cue.technicalId) || {}
                    return (
                    <>
                    <OrganizerBids key={cue.id} 
                    userEvent={cue}
                    technical = {type} />
                    
                    </>
                    )
                })
                }
            </div>
        </section>
    )
}