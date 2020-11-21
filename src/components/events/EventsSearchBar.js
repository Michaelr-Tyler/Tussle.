import React, { useContext } from "react"
import { EventContext } from "./EventProvider"

export const EventSearch = () => {
    const { setTerms } = useContext(EventContext)

    return (
        <>
        <section className="searchbar-event">
            <div className="searchbar__title">Search City, State, or event name.</div>
            <input type="text"
                onChange={
                    (changeEvent) => {
                        setTerms(changeEvent.target.value)
                    }
                }
                className="searchbar__input"
                placeholder="Enter city, state abbreviation, or Name..." />
        </section>
        </>
    )
}