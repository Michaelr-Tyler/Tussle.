import React, { useContext } from "react"
import { TechnicalContext } from "../TechnicalProvider"
import "./Events.css"
import { UserEventContext } from "./UserEventProvider"

export const WrestlerBid = ( {  userEvent  }) => {
    const {deleteUserEvent} = useContext(UserEventContext)
    const {technicals} = useContext(TechnicalContext)

    const technical = technicals.find(t => t.id === userEvent.event.technicalId)


if (userEvent.denied) {
    return (
    <section className="event wrestlerMyEvents denied">
        <h3>Presenting: {userEvent.event.name}</h3>
        <div>{userEvent.event.date}</div>
        <div>In {userEvent.event.locationCity}, {userEvent.event.locationStateCode}</div>
        <div>Looking for: {technical.type}</div>
        <div>You Bid: {userEvent.bid}</div>
        <div>DENIED</div>
        <button
        onClick={
            ()=> deleteUserEvent(userEvent.id || {})
        }>
            Delete
        </button>
    </section>
    )
 } else if(userEvent.booked) {
     return (
         <>
         </>
     )
 } else if (!userEvent.denied) {
    return (
    <section className="event wrestlerMyEvents">
        <h3>Presenting: {userEvent.event.name}</h3>
        <div>{userEvent.event.date}</div>
        <div>In {userEvent.event.locationCity}, {userEvent.event.locationStateCode}</div>
        <div>Looking for: {technical.type}</div>
        <div>You Bid: {userEvent.bid}</div>
        <div>Pending approval</div>
    </section>
    )
 } 
}