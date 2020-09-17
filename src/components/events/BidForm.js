import React, { useEffect, useState, useContext} from "react"
import { EventContext } from "./EventProvider"
import { TechnicalContext } from "../TechnicalProvider"
import { UserEventContext } from "./UserEventProvider"

export const BidForm = (props) => {
    const { events, getEvents } = useContext(EventContext)
    const { technicals, getTechnicals } = useContext(TechnicalContext)
    const { userEvents, getUserEvents, addUserEvents } = useContext(UserEventContext)

    const [bid, setBid] = useState({})  

    const bidSelected = props.match.params.hasOwnProperty("eventId")

    const handleControlledInputChange = (event) => {
        const newBid = Object.assign({}, bid)
        newBid[event.target.name] = event.target.value

        setBid(newBid)
    }

    const getEventInBidSelectedMode = () => {
        if (bidSelected) {
            const eventId = parseInt(props.match.params.eventId)
            const selectedEvent = events.find(e => e.id === eventId) || {}
            setBid(selectedEvent)

        }
    }

    useEffect(() => {
        getEvents()
        getTechnicals()
        getUserEvents()
    },[])

    useEffect(() => {
        getEventInBidSelectedMode()
    }, [events])

    const createBid = () => {
        const eventId = parseInt(props.match.params.eventId)

        if (bidSelected) {
            addUserEvents({
                eventId: parseInt(eventId),
                bid: bid.bidAmount,
                booked: false,
                denied: false,
                userId: parseInt(localStorage.getItem("tussle_user"))
            })
            .then(() => props.history.push("/"))
        }
    }

    return (
        <form className="bidForm">
            <fieldset>
                <div className="form-group">
                    <label htmlFor="bidAmount">Bid Amount: </label>
                    <input type="text" name="bidAmount" autoComplete="none" required autoFocus className="from-control"
                    proptype="int"
                    placeholder="Bid"
                    defaultValue={bid.bidAmount} 
                    onChange={handleControlledInputChange}
                />
                </div>
                </fieldset>
                <button type="submit"
        onClick={evt => {
            evt.preventDefault()
            createBid()
        }}
        className="btn btn-primary">
            Submit Bid
        </button>
        </form>
    )
}