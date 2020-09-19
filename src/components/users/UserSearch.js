import React, { useContext } from "react"
import { UsersContext } from "./UsersProvider"

export const UserSearch = () => {
    const { setTerms } = useContext(UsersContext)

    return (
        <>
            <div>Search Wrestlers</div>
            <input type="text"
                onChange={
                    (changeEvent) => {
                        setTerms(changeEvent.target.value)
                    }
                }
                placeholder="Enter search string here..." />
        </>
    )
}