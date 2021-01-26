import React, { useContext, useEffect, useState } from "react";
import { EventContext } from "./EventProvider";   
import { TechnicalContext } from "../TechnicalProvider";
import "./Events.css";
import { EventSearch } from "./EventsSearchBar";
import { EventCard } from "../utils/EventCard";
import { Button } from "../utils/Button";

export const WrestlerEventsList = (props) => {
    const {events, getEvents, searchTerms} = useContext(EventContext);
    const {technicals, getTechnicals } = useContext(TechnicalContext);

    const [filteredEvents, setFilteredEvents] = useState([]);

    
    useEffect(() => {
        getEvents()
        .then(getTechnicals)
    },[]);
    

    
    useEffect(() => {
        const matchingEvents = events.filter(e => (e.locationCity.toLowerCase().includes(searchTerms.toLowerCase()))  ||  (e.locationStateCode.toLowerCase().includes(searchTerms.toLowerCase())) || (e.name.toLowerCase().includes(searchTerms.toLowerCase())))
        setFilteredEvents(matchingEvents)
    },[searchTerms]);
    
    useEffect(() => {
        setFilteredEvents(events)
    },[events]);
    

    const renderEvents = () => {
        return (
        <>
            <EventSearch />
            <h1 className="eventsPage--title">Events</h1>
            <container className="eventsContainer">
                <div className="events">
                    {
                        filteredEvents.map(event => {
                        const type = technicals.find(t => t.id === event.technicalId) || {}
                        return (
                        <div key={event.id}>
                        <EventCard  
                        event={event}
                        technical = {type}
                         />
                        <Button label={'Bid'} onClick={() => {
                        props.history.push(`/bid/${event.id}`)
                        }}/>
                        </div>
                        )
                    })
                    }
                </div>
            </container>
        </>
        );
    }
    return renderEvents()
};