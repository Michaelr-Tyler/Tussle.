import React, { useContext } from "react"
import { UsersContext } from "./UsersProvider"

export const UserSearch = () => {
    const { setTerms } = useContext(UsersContext)

    return (
        <>
        <div className="searchContainer">
            <div>Search Wrestlers</div>
            <input type="text"
            className="inputsearch"
                onChange={
                    (changeEvent) => {
                        setTerms(changeEvent.target.value)
                    }
                }
                placeholder="Search by type or name..." />
        </div>
        </>
    )
}