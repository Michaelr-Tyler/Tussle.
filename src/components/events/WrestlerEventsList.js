import React, { useContext, useEffect, useState } from "react"
import { EventContext } from "./EventProvider"  
import { WrestlerEvent } from "./WrestlerEvent"
import { TechnicalContext } from "../TechnicalProvider"
import "./Events.css"
import { EventSearch } from "./EventsSearchBar"

export const WrestlerEventsList = ({history}) => {
    const {events, getEvents, searchTerms} = useContext(EventContext)
    const {technicals, getTechnicals } = useContext(TechnicalContext)

    const [filteredEvents, setFilteredEvents] = useState([])

    
    useEffect(() => {
        getEvents()
        .then(getTechnicals)
    },[])
    

    
    useEffect(() => {
        const matchingEvents = events.filter(e => (e.locationCity.toLowerCase().includes(searchTerms.toLowerCase()))  ||  (e.locationStateCode.toLowerCase().includes(searchTerms.toLowerCase())) || (e.name.toLowerCase().includes(searchTerms.toLowerCase())))
        setFilteredEvents(matchingEvents)
    },[searchTerms])
    
    useEffect(() => {
        setFilteredEvents(events)
    },[events])
    


    return (
    <>
        <EventSearch />
        <h1 className="eventsPage--title">Events</h1>
        <section className="wrestlerEventsContainer">
            <div className="wrestlerEvents">
                {
                    filteredEvents.map(event => {
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
    </>
    )

}