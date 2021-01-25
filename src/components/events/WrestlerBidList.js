import React, { useContext, useEffect } from "react"
import { EventContext } from "./EventProvider"  
import { UsersContext } from "../users/UsersProvider"
import { UserEventContext } from "./UserEventProvider"
import "./Events.css"
import { EventCard } from "../utils/EventCard"
import { Button } from "../utils/Button"

export const WrestlerBidList = (props) => {
    const {events, getEvents} = useContext(EventContext)
    const { userEvents, getUserEvents, deleteUserEvent } = useContext(UserEventContext)
    const { currentUser,getCurrentUser} = useContext(UsersContext)

    useEffect(() => {
        getEvents()
        getCurrentUser()
        getUserEvents()
    },[])


    const pendingUserEvents = userEvents.filter((ue) => {
        const pendingUserBidEventsRelationships = events.filter(evt => evt.id === ue.eventId && currentUser.id === ue.userId)
        return pendingUserBidEventsRelationships.length !== 0
    })
    
    const renderEvents = () => {
       return pendingUserEvents.map(cue => {
           if (cue.booked !== true){
               return (
               <div key={cue.id} className={cue.denied === true ? 'denied' : 'pending'}>
                   <EventCard
                   event={cue.event}
                   />
                   {cue.denied === true ?
                   <>
                   <div>Denied</div>
                   <Button label={'Delete'}
                   onClick={()=> deleteUserEvent(cue.id)}/> 
                   </>
                   : <div>Pending</div>}
               </div>
               )
           }
        })
    }

    return (
        <>
        <h1 className="wrestlerBids--title">Bids</h1>
        <section className="bidContainer">
            <div className="bidEvents">{renderEvents()}</div>
        </section>
        </>
    )

}