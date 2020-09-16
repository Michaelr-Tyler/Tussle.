import React, {useContext, useRef, useState, useCallback, useEffect} from "react"
import { EventContext } from "./EventProvider"
import { TechnicalContext } from "../TechnicalProvider"
import { AccountTypeContext } from "../AccountTypeProvider"
import { UsersContext } from "../users/UsersProvider"

export const EventForm = (props) => {
    const { addEvents } = useContext(EventContext)
    const { technicals, getTechnicals } = useContext(TechnicalContext)
    const { currentUser, getCurrentUser } = useContext(UsersContext)

    const name = useRef()
    const city = useRef()
    const state = useRef()
    const date = useRef()
    const technical = useRef()
    

useEffect(() => {
    getTechnicals()
    getCurrentUser()
}, [])

const createNewEvent = () => {
    const technicalId = parseInt(technical.current.value)

    if (technicalId === 0) {
        window.alert("Please select a technical type, or atleast select open")
    } else {
        addEvents({
            name: name.current.value,
            technicalId,
            date: date.current.valueAsNumber,
            locationCity: city.current.value,
            locationStateCode: state.current.value,
            userId: currentUser.id

        })
        .then(() => props.history.push("/events"))
    }
}

return (
    <form className="eventForm">
        <h2 className="eventForm__title">New Event</h2>
        <fieldset>
            <div className="form-group">
                <label htmlFor="eventName">Event Name:</label>
                <input type="text" id="eventName" ref={name} required autoFocus className="form-control" placeholder="Event Name" />
            </div>
        </fieldset>
        <fieldset>
            <div className="form-group">
                <label htmlFor="eventlocationCity">Event city:</label>
                <input type="text" id="eventlocationCity" ref={city} required autoFocus className="form-control" placeholder="Event City" />
            </div>
        </fieldset>
        <fieldset>
            <div className="form-group">
                <label htmlFor="eventLocationState">Event state code:</label>
                <input type="text" id="eventLocationState" ref={state} required autoFocus className="form-control" placeholder="State abbreviation" />
            </div>
        </fieldset>
        <fieldset>
            <div className="form-group">
                <label htmlFor="eventDate">When: </label>
                <input type="date" id="EventDate" ref={date} valueAsNumber required autoFocus className="form-control" />
            </div>
        </fieldset>
        <fieldset>
                <div className="form-group">
                    <label htmlFor="technical">Technical type: </label>
                    <select defaultValue="" name="technical" ref={technical} id="Technical" className="form-control" >
                        <option value="0">Select a Type</option>
                        {technicals.map(t => (
                            <option key={t.id} value={t.id}>
                                {t.type}
                            </option>
                        ))}
                    </select>
                </div>
            </fieldset>
        <button type="submit"
        onClick={evt => {
            evt.preventDefault()
            createNewEvent()
        }}
        className="btn btn-primary">
            Save Event
        </button>
    </form>
)

}