import React, { useContext, useEffect } from "react"
import { EventContext } from "./EventProvider"  
import { UsersContext } from "../users/UsersProvider"
import { TechnicalContext } from "../TechnicalProvider"
import { UserEventContext } from "./UserEventProvider"
import { WrestlerBid } from "./WreslterBids"
import "./Events.css"

export const WrestlerBidList = ({history}) => {
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
        <>
        <h1 className="wrestlerBids--title">Bids</h1>
        <section className="wrestlerBidsContainer">
            <div className="wrestlerBidEvents">
                {
                    currentUserEvents.map(cue => {
                    return (
                    <>
                    <WrestlerBid key={cue.id} 
                    userEvent = {cue} />
                    </>
                    )
                })
                }
            </div>
        </section>
        </>
    )

}