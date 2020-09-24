import React from "react"
import "./Users.css";

export const User = ({user, technical, props}) => {
    return (
    <section className="wrestler">
        <h4>{user.name}</h4>
        <div>{user.following}</div>
        <div>{user.phoneNumber}</div>
        <div className="wrestler__email">{user.email}</div>
        <div>{technical.type}</div>
        <button type="submit"
        onClick={evt => {
            evt.preventDefault()
            props.history.push(`/messages/${user.id}`)
            
        }}
        className="btn btn-primary">Message</button>
    </section>
    )
}