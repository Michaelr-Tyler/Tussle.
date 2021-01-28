import React, { useContext, useEffect } from "react"
import { TechnicalContext } from "../TechnicalProvider"
import { UsersContext } from "../users/UsersProvider"
import { EventContext } from "./EventProvider"
import { UserEventContext } from "./UserEventProvider"
import "./Events.css"
import { EventCard } from "../utils/EventCard"
import { Button } from "../utils/Button"


export const OrganizerBidList = (props) => {
    const {events, getEvents} = useContext(EventContext)
    const {technicals, getTechnicals } = useContext(TechnicalContext)
    const { userEvents, getUserEvents, updateUserEventBookedStatus, updateUserEventDeniedStatus } = useContext(UserEventContext)
    const { currentUser,getCurrentUser, users, getUsers} = useContext(UsersContext)

    useEffect(() => {
        getEvents()
        getUsers()
        getCurrentUser()
        getUserEvents()
        getTechnicals()
    },[])

    const currentUserBidEvents = userEvents.filter((ue) => {
        const currentUserBidEventsRelationships = events.filter(evt => evt.id === ue.eventId && currentUser.id === evt.userId)
        return currentUserBidEventsRelationships.length !== 0
    })


    const renderBids = () => {
       return(
        <>
            <h2 className="organizerBids--title">Bids</h2>
            <section className="organizerBidsContainer">
                <div className="organizerBids">
                    {currentUserBidEvents.map(cube => {
               const wrestler = users.find(user => user.id === cube.userId);
               const technicalType = technicals.find(t => t.id === wrestler.technicalId) || {};
               if (!cube.booked && !cube.denied) {
                   return (
                       <div  key={cube.id}>
                           <EventCard event={cube.event} />
                           <div>{wrestler.name} a {technicalType.type} has bid ${cube.bid}</div>
                           <Button label={'Accept'} 
                           onClick={() => updateUserEventBookedStatus(cube.id)}  />
                           <Button label={'Deny'}
                           onClick={() => updateUserEventDeniedStatus(cube.id)} />
                           <Button label={'Message'} 
                           onClick={() => props.history.push(`/messages/${cube.userId}`)} />
                       </div>
                   )
               }
           })}
                </div>
            </section>
        </>
       );
    };

    return renderBids()
};