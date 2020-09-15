import React from "react"
import { Route, Redirect } from "react-router-dom"
import { ApplicationViews } from "./ApplicationViews"
import { Navbar } from "./nav/NavBar";
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"
import "./Tussle.css"
import { AccountTypeProvider } from "./AccountTypeProvider";
import { TechnicalTypeProvider } from "./TechnicalTypeProvider";



export const Tussle = () => (
    <>
        <Route render={() => {
            if (localStorage.getItem("tussle_user")) {
                return (
                    <>
                        <Route render={props => <Navbar {...props} />} />
                        <Route render={props => <ApplicationViews {...props} />} />
                    </>
                )
            } else {
                return <Redirect to="/login" />
            }
        }} />

        <Route path="/login" render={props => <Login {...props} />} />
        <AccountTypeProvider>
            <TechnicalTypeProvider>
                <Route path="/register" render={props => <Register {...props} />} />
            </TechnicalTypeProvider>
        </AccountTypeProvider>
    </>
)