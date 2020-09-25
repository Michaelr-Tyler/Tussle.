import React, { useContext, useEffect } from "react"
import { TechnicalContext } from "../TechnicalProvider"
import { UsersContext } from "../users/UsersProvider"
import { EventContext } from "./EventProvider"
import { UserEventContext } from "./UserEventProvider"
import { OrganizerBids } from "./OrganizerBid";
import "./Events.css"


export const OrganizerBidList = (props) => {
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

    const currentUserBidEvents = userEvents.filter((ue) => {
        const currentUserBidEventsRelationships = events.filter(evt => evt.id === ue.eventId && currentUser.id === evt.userId)
        return currentUserBidEventsRelationships.length !== 0
    }) || {}




    return (
        <section className="organizerBidsContainer">
            <h2 className="organizerBids__title">Bids</h2>
            <div className="eventBids">
                {
                    currentUserBidEvents.map(cue => {
                    return (
                    <>
                    <OrganizerBids key={cue.id} 
                    userEvent={cue}
                    props={props}
                    />
                    </>
                    )
                })
                }
            </div>
        </section>
    )
}