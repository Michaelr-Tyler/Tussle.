import React, {useContext, useState, useEffect} from "react"
import { EventContext } from "./EventProvider"
import { TechnicalContext } from "../TechnicalProvider"


export const EventForm = (props) => {
    const { addEvents, events, updateEvent, getEvents } = useContext(EventContext)
    const { technicals, getTechnicals } = useContext(TechnicalContext)

    const [show, setShow] = useState({})

    const editMode = props.match.params.hasOwnProperty("eventId")

    const handleControlledInputChange = (event) => {
        const newShow = Object.assign({}, show)
        newShow[event.target.name] = event.target.value

        setShow(newShow)
    }

    const getEventInEditMode = () => {
        if (editMode) {
            const eventId = parseInt(props.match.params.eventId)
            const selectedEvent = events.find(e => e.id === eventId) || {}
            setShow(selectedEvent)
        }
    }

    // const name = useRef()
    // const city = useRef()
    // const state = useRef()
    // const date = useRef()
    // const technical = useRef()
    

useEffect(() => {
    getTechnicals()
    getEvents()
}, [])

useEffect(() => {
    getEventInEditMode()
}, [events])

const createNewEvent = () => {
    const technicalId = parseInt(show.technicalId)

    if (show.technicalId === null) {
        window.alert("Please select a technical type, or atleast select open")
    } else {
        if (editMode) {
        updateEvent({
            id:show.id,
            name: show.name,
            date: show.date,
            locationCity: show.locationCity,
            locationStateCode: show.locationStateCode,
            technicalId: parseInt(show.technicalId),
            userId: parseInt(localStorage.getItem("tussle_user"))

        })
        .then(() => props.history.push("/events"))
    } else {
        addEvents({
            name: show.name,
            date: show.date,
            locationCity: show.locationCity,
            locationStateCode: show.locationStateCode,
            technicalId: parseInt(show.technicalId),
            userId: parseInt(localStorage.getItem("tussle_user"))

        })
        .then(() => props.history.push("/events"))
    }
    } 
}

return (
    <form className="eventForm">
        <h2 className="eventForm__title">{editMode ? "Update Event" : "New Event"}</h2>
        <fieldset>
            <div className="form-group">
                <label htmlFor="eventName">Event Name:</label>
                <input type="text" name="name" autocomplete="none" required autoFocus className="form-control" 
                proptype="varchar"
                placeholder="Event Name"
                defaultValue={show.name}
                onChange={handleControlledInputChange}
                 />
            </div>
        </fieldset>
        <fieldset>
            <div className="form-group">
                <label htmlFor="locationCity">Event city:</label>
                <input type="text"  name="locationCity" required autoFocus className="form-control" 
                proptype="varchar"
                placeholder="Event City"
                defaultValue={show.locationCity} 
                onChange={handleControlledInputChange}
                />
                
            </div>
        </fieldset>
        <fieldset>
            <div className="form-group">
                <label htmlFor="locationStateCode">Event state code:</label>
                <input type="text" name="locationStateCode" required autoFocus className="form-control" 
                proptype="varchar"
                placeholder="State abbreviation" 
                defaultValue={show.locationStateCode} 
                onChange={handleControlledInputChange}
                />
            </div>
        </fieldset>
        <fieldset>
            <div className="form-group">
                <label htmlFor="date">When: </label>
                <input type="date" name="date" valueAsNumber required autoFocus className="form-control" 
                proptype="int"
                defaultValue={show.date}
                onChange={handleControlledInputChange}
                />
            </div>
        </fieldset>
        <fieldset>
                <div className="form-group">
                    <label htmlFor="technical">Technical type: </label>
                    <select name="technicalId" className="form-control"
                    proptype="int"
                    value={show.technicalId}
                    onChange={handleControlledInputChange}
                    >
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
            {editMode ? "Update event" : "Save event"}
        </button>
    </form>
)

}