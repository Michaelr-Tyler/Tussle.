import React, { useState } from "react"

export const EventContext = React.createContext()

export const EventProvider = (props) => {
    const [events, setEvents] = useState([ ])

    const getEvents = () =>{
        return fetch("http://localhost:8088/events?_expand=user")
        .then(res => res.json())
        .then(setEvents)
    }

    const getEventById = (id) => {
        return fetch(`http://localhost:8088/events/${id}`)
        .then(res => res.json())
    }

    const addEvents = event =>{
        return fetch("http://localhost:8088/events", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(event)
        })
        .then(getEvents)
    }

    const deleteEvent = (eventId) => {
        return fetch(`http://localhost:8088/events/${eventId}`, {
            method: "DELETE"
        })
            .then(getEvents)
    }

    const updateEvent = event => {
        return fetch(`http://localhost:8088/events/${event.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(event)
        })
            .then(getEvents)
    }




    return (
        <EventContext.Provider value={{
            events, getEvents, addEvents, updateEvent, getEventById, deleteEvent
        }}>
            {props.children}
        </EventContext.Provider>
    )
}