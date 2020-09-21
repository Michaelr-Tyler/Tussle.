import React, { useState } from "react"

export const UserEventContext = React.createContext()

export const UserEventProvider = (props) => {
    const [userEvents, setUserEvents] = useState([])

    const getUserEvents = () => {
        return fetch("http://localhost:8088/userEvents?_expand=event")
        .then(res => res.json())
        .then(setUserEvents)
    }

    const updateUserEvent = userEvent => {
        return fetch(`http://localhost:8088/userEvents/${userEvent.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userEvent)
        })
            .then(getUserEvents)
    } 

    const updateUserEventBookedStatus = userEvent => {
        return fetch(`http://localhost:8088/userEvents/${userEvent.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                booked:true
            })
            // .then(res => res.json())
        })
            .then(getUserEvents)
    } 

    const updateUserEventDeniedStatus = userEvent => {
        return fetch(`http://localhost:8088/userEvents/${userEvent.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                denied:true
            })
            // .then(res => res.json())
        })
            .then(getUserEvents)
    } 


    const addUserEvents = userEvent =>{
        return fetch("http://localhost:8088/userEvents", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userEvent)
        })
        .then(getUserEvents)
    }

    const deleteUserEvent = (userEventId) => {
        return fetch(`http://localhost:8088/userEvents/${userEventId}`, {
            method: "DELETE"
        })
            .then(getUserEvents)
    }

    return (
        <UserEventContext.Provider value={{
            userEvents, getUserEvents, addUserEvents, updateUserEvent, deleteUserEvent, updateUserEventBookedStatus, updateUserEventDeniedStatus
        }}>
            {props.children}
        </UserEventContext.Provider>
    )
}