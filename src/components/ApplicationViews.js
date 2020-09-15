import React from "react"
import { Route } from "react-router-dom";


export const ApplicationViews = (props) => {
    return (
        <>
        <div>Home</div>
        <Route path="/logout" render={
                (props) => {
                    localStorage.removeItem("tussle_user")
                    props.history.push("/login")
                }
            } />
        </>
    )
}