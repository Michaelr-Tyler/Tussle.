import React, { useState } from "react"

export const UserEventContext = React.createContext()

export const UserEventProvider = (props) => {
    const [userEvents, setUserEvents] = useState([])

    const getUserEvents = () => {
        return fetch("http://localhost:8088/events")
        .then(res => res.json())
        .then(setUserEvents)
    }


    return (
        <AnimalContext.Provider value={{
            userEvents, getUserEvents
        }}>
            {props.children}
        </AnimalContext.Provider>
    )
}