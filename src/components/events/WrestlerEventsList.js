import React, { useContext, useEffect, useState } from "react"
import { EventContext } from "./EventProvider"  
import { WrestlerEvent } from "./WrestlerEvent"
import { TechnicalContext } from "../TechnicalProvider"
import "./Events.css"

export const WrestlerEventsList = ({history}) => {
    const {events, getEvents} = useContext(EventContext)
    const {technicals, getTechnicals } = useContext(TechnicalContext)

    

    
    

    useEffect(() => {
        getEvents()
        .then(getTechnicals)
    },[])
    



    return (
        <section className="organizerEventsContainer">
            <h1>Events</h1>
            <div className="events ">
                {
                    events.map(event => {
                    const type = technicals.find(t => t.id === event.technicalId) || {}
                    return (
                    <>
                    <WrestlerEvent key={event.id} 
                    event={event}
                    history={history}
                    technical = {type} />
                    
                    </>
                    )
                })
                }
            </div>
        </section>
    )

}