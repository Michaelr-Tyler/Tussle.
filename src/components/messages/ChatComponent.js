import userEvent from "@testing-library/user-event"
import React from "react"
import "./Messages.css"

export const Chat = ( {message}) => {



    return (
    <section className="event wrestler">
        <h2>{message.user.name}</h2>
        <h2>{message.message}</h2>
    </section>
    )
}