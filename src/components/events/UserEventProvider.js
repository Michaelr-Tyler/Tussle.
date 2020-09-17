import React, { useState } from "react"

export const UserEventContext = React.createContext()

export const UserEventProvider = (props) => {
    const [userEvents, setUserEvents] = useState([])

    const getUserEvents = () => {
        return fetch("http://localhost:8088/events")
        .then(res => res.json())
        .then(setUserEvents)
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

    return (
        <AnimalContext.Provider value={{
            userEvents, getUserEvents, addUserEvents
        }}>
            {props.children}
        </AnimalContext.Provider>
    )
}