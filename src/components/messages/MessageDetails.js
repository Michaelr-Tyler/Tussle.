import React, { useContext, useState, useEffect, useRef } from "react"
import { UsersContext } from "../users/UsersProvider"
import { Chat } from "./ChatComponent"
import { MessagesContext } from "./MessageProvider"
import "./Messages.css"

/* 
GOAL: Create a messaging component that can send messages 
and review them in real time betweeen two users
steps to take
1• Bring in all the messages
2• sort through them so that you can render the ones that the current logged in user 
has sent to the current user thats been clicked on, and the current clicked on user has 
sent to this logged in user
3• messages needed are (if currentClickuser.id === message.recieverId && currentUser.id === messages.userId) = messages currentUser sent to clicked on user
and (if currentClickuser.id === messagesuser.id && messages.recieverId === currentUsers.id ) = messges sent to currentuser by current clicked on user

*/



export const MessageDetails = (props) => {
    const { messages, getMessages, addMessages } = useContext(MessagesContext)
    const { users, getUsers, getCurrentUser, currentUser } = useContext(UsersContext)

    const [clickedOnUser, setClickedOnUser] = useState({})



    useEffect(() => {
        getMessages()
        getUsers()
        getCurrentUser()
    }, [])

    useEffect(() => {

    }, [])


    useEffect(() => {
        const clickedOnUser = users.find(u => u.id === parseInt(props.match.params.userId)) || {}
        setClickedOnUser(clickedOnUser)
    }, [users])

    // useEffect(() => {
    //     const messagesBetween = messages.filter(m => m.recieverId === clickedOnUser.id && m.userId === currentUser.id) || {}
    //     setMessagesBetween(messagesBetween)
    //     // const messagesBetween = messages.find(m => m.recieverId === clickedOnUser.id || m.userId === currentUser.id) || {}
    //     // setMessagesBetween(messagesBetween)
    // },[messages])

    const messagesSent = messages.filter(m => {
        return (m.recieverId === clickedOnUser.id && m.userId === currentUser.id) || (m.userId === clickedOnUser.id && m.recieverId === currentUser.id)
    })
    console.log(messagesSent)
    // const messagesRecieved = messages.filter(m => {
    //     return (m.userId === clickedOnUser.id && m.recieverId === currentUser.id)
    // })


    // const allTheMessageObjectsBetweenTheseTwoUsers = messagesSent.concat(messagesRecieved)

    // console.log(allTheMessageObjectsBetweenTheseTwoUsers)



    const message = useRef()
    const newMessage = () => {
        addMessages({
            message: message.current.value,
            userId: currentUser.id,
            recieverId: parseInt(props.match.params.userId),
            timeStamp: Date.now()
        })
        // .then(() => props.history.push(`/messages/${clickedOnUser.id}`))
    }

    return (
        <>
            <div>{clickedOnUser.name}</div>
            <div className="events organizer">
                {
                    messagesSent.map(m => {
                    return (
                    <>
                    <Chat key={m.id} 
                    message={m}
                     />
                    </>
                    )
                })
                }
            </div>
            <form className="messageForm">
                <fieldset className="messageFieldset">
                    <div className="form-group">
                        <label htmlFor="message">Chat: </label>
                        <input type="text" ref={message} autoComplete="none" autoFocus className="from-control"
                            placeholder="message"
                        />
                    </div>
                </fieldset>
                <button type="submit"
                    onClick={evt => {
                        evt.preventDefault()
                        newMessage()
                    }}
                    className="btn btn-primary">
                    Send
        </button>
            </form>
        </>
    )
}