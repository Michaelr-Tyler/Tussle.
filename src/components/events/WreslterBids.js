import React, { useContext } from "react"
import { TechnicalContext } from "../TechnicalProvider"
import { UserEventContext } from "./UserEventProvider"
import  Moment  from "moment";
import "./Events.css"

export const WrestlerBid = ( {  userEvent  }) => {
    const {deleteUserEvent} = useContext(UserEventContext)
    const {technicals} = useContext(TechnicalContext)

    const technical = technicals.find(t => t.id === userEvent.event.technicalId)


if (userEvent.denied) {
    return (
    <section className="denied">
        <h3>{userEvent.event.name}</h3>
        <div>{Moment(userEvent.event.date).format("MMM Do YYYY")}</div>
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
    <section className="wrestlerBidEvent">
        <h3>{userEvent.event.name}</h3>
        <div>{Moment(userEvent.event.date).format("MMM Do YYYY")}</div>
        <div>In {userEvent.event.locationCity}, {userEvent.event.locationStateCode}</div>
        <div>Looking for: {technical.type}</div>
        <div>You Bid: {userEvent.bid}</div>
        <div>Pending approval</div>
    </section>
    )
 } 
}