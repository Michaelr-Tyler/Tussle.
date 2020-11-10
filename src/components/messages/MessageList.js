/* GOAL Create a messaging component that has a list of names that you can
 click on and see messages between eachother 
 • build provider getMessages, setMessages, addMessages ☑️
 • create a detail page for messages
 • message list should render links to other users names
 • when user link gets clicked the render should have their messages 
 as well as a form at the bottom where new messages can be sent
 */
import React, { useContext, useEffect } from "react"
import { UsersContext } from "../users/UsersProvider"
import { MessagesContext } from "./MessageProvider"
import Message from "./Messages";


export const MessageList = () => {
    const {getUsers, getCurrentUser, users, currentUser} = useContext(UsersContext)
    const {getMessages, messages} = useContext(MessagesContext)

    useEffect(() => {
        getUsers()
        getCurrentUser()
        getMessages()
    },[])
    // This grabs all the users
    // const currentUserMessaging = users.filter(u => (u.userId === currentUser.id && messages.userId) || (u.userId === currentUser.id && messages.recieverId)) || {}
    const currentUserHasContacted = users.filter(user => {
        const messageRelationships = messages.find(m => {
            if (m.userId === currentUser.id && m.recieverId === user.id) {
                return user
            } else if (m.userId === user.id && m.recieverId === currentUser.id) {
                return user
        }
        
        })
        // console.log(messageRelationships)
        return messageRelationships
    } ) || {}

    console.log(currentUserHasContacted)

    

    

    //this will create a list of users that when the name gets clicked on, will then show all the messages betweeen said users
    return (
        <>
        <h1 className="messages--title">Messages</h1>
        <div className="messangers">
            {
                currentUserHasContacted.map(u => {
                    return <Message 
                    key={u.id} 
                    user={u}
                     />
                })
            }
        </div>
        </>
    )
}
