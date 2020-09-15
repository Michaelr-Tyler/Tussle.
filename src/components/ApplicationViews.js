import React from "react"
import { Route } from "react-router-dom";




export const ApplicationViews = (props) => {

    return (
        <>
        <Route path="/logout" render={
                (props) => {
                    localStorage.removeItem("tussle_user")
                    props.history.push("/login")
                }
            } />
        </>
    )
}