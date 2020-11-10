import React, { useContext } from "react"
import { TechnicalContext } from "../TechnicalProvider"
import Moment from "moment";
import "./Events.css"

export const WrestlerMyEvents = ( {  userEvent, props }) => {
    const {technicals} = useContext(TechnicalContext)

    const technical = technicals.find(t => t.id === userEvent.event.technicalId)


if (userEvent.booked) {
    return (
    <section className="wrestlerMyEvent booked">
        <h3>{userEvent.event.name}</h3>
        <div>{Moment(userEvent.event.date).format("MMM Do YYYY")}</div>
        <div>In {userEvent.event.locationCity}, {userEvent.event.locationStateCode}</div>
        <div>Looking for: {technical.type}</div>
        <div>Your cut: ${userEvent.bid}</div>
        <div>BOOKED</div>
        <button type="submit"
        onClick={evt => {
            evt.preventDefault()
            props.history.push(`/messages/${userEvent.event.userId}`)
            
        }}
        className="btn btn-primary">Message</button>
    </section>
    )
 } else {
     return <></>
 }
}