import React, { useContext, useEffect, useState } from "react"
import { UserEventContext } from "./UserEventProvider"
import { UsersContext } from "../users/UsersProvider"
import { TechnicalContext } from "../TechnicalProvider"
import "./Events.css"

export const OrganizerBids = ({ userEvent }) => {
    const {updateUserEventBookedStatus, updateUserEventDeniedStatus} = useContext(UserEventContext)
    const {getUsers, users} = useContext(UsersContext)
   //how is technicals working? I never brought them into this component by envoking getTechnicals
    const {technicals} = useContext(TechnicalContext)

    useEffect(() => {
        getUsers()
    },[])

    const wrestler = users.find(u => u.id === userEvent.userId) || {}
    const technicalType = technicals.find(t => t.id === wrestler.technicalId) || {}
    
    if (!userEvent.booked) {
    return (
    <section className="event wrestlerBids">
        <h3>Event: {userEvent.event.name}</h3>
        <div>{userEvent.event.date}</div>
        <div>Bid: {userEvent.bid}</div>
        <div>{wrestler.name}</div>
        <div>{wrestler.email}</div>
        <div>{wrestler.phoneNumber}</div>
        <div>{technicalType.type}</div>
        <button type="submit"
        onClick={evt => {
            evt.preventDefault()
            updateUserEventBookedStatus(userEvent)
            
        }}
        className="btn btn-primary">
            Accept
        </button>
        <button type="submit"
        onClick={evt => {
            evt.preventDefault()
            updateUserEventDeniedStatus(userEvent)
            
        }}
        className="btn btn-primary">Deny</button>
        <button>Message</button> 
    </section>
    )
    } else {
        return <>
        </>
    }
}