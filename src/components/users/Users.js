import React from "react"
import "./Users.css";

export const WrestlerCard = ({user, technical, props}) => {
    return (
    <section className="wrestler">
        <h4>{user.name}</h4>
        <div>Online Presence: {user.following}</div>
        <div>{user.phoneNumber}</div>
        <div>{user.email}</div>
        <div>{technical.type}</div>
        <button type="submit"
        onClick={evt => {
            evt.preventDefault()
            props.history.push(`/messages/${user.id}`)
            
        }}
        className="btn btn-message">Message</button>
    </section>
    )
}