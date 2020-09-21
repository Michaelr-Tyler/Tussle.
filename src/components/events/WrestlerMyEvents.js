import React, { useContext } from "react"
import { TechnicalContext } from "../TechnicalProvider"
import { UserEventContext } from "./UserEventProvider"
import "./Events.css"

export const WrestlerMyEvents = ( {  userEvent  }) => {
    const {deleteUserEvent} = useContext(UserEventContext)
    const {technicals} = useContext(TechnicalContext)

    const technical = technicals.find(t => t.id === userEvent.event.technicalId)


if (userEvent.booked) {
    return (
    <section className="event wrestlerMyEvents booked">
        <h3>Presenting: {userEvent.event.name}</h3>
        <div>{userEvent.event.date}</div>
        <div>In {userEvent.event.locationCity}, {userEvent.event.locationStateCode}</div>
        <div>Looking for: {technical.type}</div>
        <div>Your cut: {userEvent.bid}</div>
        <div>BOOKED</div>
        <button>
            Message
        </button>
    </section>
    )
 } else {
     return <></>
 }
}