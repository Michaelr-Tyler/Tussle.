import React, {useContext} from "react"
import { EventContext } from "./EventProvider";
import Moment from 'moment';
import "./Events.css"

export const OrganizerEvent = ({ event, technical, history }) => {
    const {deleteEvent} = useContext(EventContext)


   

    return (
        <section className="organizerEvent">
            <h3 className="organizerEvent__title">{event.name}</h3>
            <div className="organizerEvent__date">{Moment(event.date).format("MMM Do YYYY")}</div>
            <div className="organizerEvent__attending">Attending: {event.attendance}</div>
            <div className="organizerEvent__location">In {event.locationCity}, {event.locationStateCode}</div>
            <div className="organizerEvent__technical">Looking for: {technical.type}</div>
            <button
            onClick={
                ()=> deleteEvent(event.id || {})
            } className="btn btn-delete">
                Delete Event
            </button>
            <button onClick={() => {
                            history.push(`/events/edit/${event.id}`)
                        }} className="btn btn-edit">Edit</button>
        </section>
        )
}