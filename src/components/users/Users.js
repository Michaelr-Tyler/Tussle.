import React from "react"
import "./Users.css";

export const User = (props) => {
    return (
    <section>
        <h4>{props.user.name}</h4>
        <div>Online Presence:{props.user.following}</div>
        <div>{props.user.phoneNumber}</div>
        <div>{props.user.email}</div>
        <div>{props.technical.type}</div>
    </section>
    )
}