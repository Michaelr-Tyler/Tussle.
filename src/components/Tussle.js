import React from "react"
import { Route, Redirect } from "react-router-dom"
import { ApplicationViews } from "./ApplicationViews"
import { Navbar } from "./nav/NavBar";
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"
import { UsersProvider } from "./users/UsersProvider";
import { TechnicalProvider } from "./TechnicalProvider";
import { AccountTypeProvider } from "./acounts/AccountTypeProvider";
import "./Tussle.css"

export const Tussle = () => (
    <>
        <Route render={() => {
            if (sessionStorage.getItem("tussle_user")) {
                return (
                    <>
                    <UsersProvider>
                        <Route render={props => <Navbar {...props} />} />
                        <Route render={props => <ApplicationViews {...props} />} />
                    </UsersProvider>
                    </>
                )
            } else {
                return <Redirect to="/login" />
            }
        }} />

        <Route path="/login" render={props => <Login {...props} />} />
        <AccountTypeProvider>
            <TechnicalProvider>
                <Route path="/register" render={props => <Register {...props} />} />
            </TechnicalProvider>
        </AccountTypeProvider>
    </>
)