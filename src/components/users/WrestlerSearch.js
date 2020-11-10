import React, { useContext } from "react"
import { UsersContext } from "./UsersProvider"

export const WrestlerSearch = () => {
    const { setTerms } = useContext(UsersContext)

    return (
        <>
        <section className="searchbar">
            <div className="searchbar__title">Search Wrestlers</div>
            <input type="text"
                onChange={
                    (changeEvent) => {
                        setTerms(changeEvent.target.value)
                    }
                }
                className="searchbar__input"
                placeholder="Enter wrestlers name or type..." />
        </section>
        </>
    )
}