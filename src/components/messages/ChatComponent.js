import React, { useContext} from "react"
import {UsersContext} from "../users/UsersProvider"

import "./Messages.css"

export const Chat = ( {message}) => {

    const {currentUser} = useContext(UsersContext)
    if(message.user.id === currentUser.id) {
    return (
        <section className="message sender">
            <div className="sender__name">{message.user.name}:</div>
            <div className="sender__message">{message.message}</div>
        </section>
    )} else {
    return (
        <section className="message reciever">
            <div className="reciever__name">{message.user.name}:</div>
            <div className="reciever__message">{message.message}</div>
        </section>
            )}
}