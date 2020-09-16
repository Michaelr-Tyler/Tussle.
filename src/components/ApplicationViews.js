import React, {useContext, useEffect} from "react"
import { Route } from "react-router-dom";
import { UsersContext, UsersProvider } from "./users/UsersProvider";
import { EventsList } from "./events/EventsList";
import { EventProvider } from "./events/EventProvider";
import { TechnicalProvider } from "./TechnicalProvider";
import { AccountTypeProvider } from "./AccountTypeProvider";
import { EventForm } from "./events/EventForm";




export const ApplicationViews = (props) => {
    const {currentUser, getCurrentUser} = useContext(UsersContext)

    useEffect(() => {
        getCurrentUser()
        
        },[console.log(currentUser)])


        if(currentUser.accountTypeId !== 2 && {}) {
    return (
        <>
    
        <div>Organizer</div>
        <EventProvider>
                <TechnicalProvider>
                    <AccountTypeProvider>
                    <Route exact path="/events" render={ props => {
                                return <>
                                    <EventsList {...props} />
                                </>
                            }
                        } />
                    <Route exact path="/events/create" render={
                            props => <EventForm {...props} />
                        } />
                    </AccountTypeProvider>
                </TechnicalProvider>
        </EventProvider>
        <Route path="/logout" render={
                (props) => {
                    localStorage.removeItem("tussle_user")
                    props.history.push("/login")
                }
            } />
        
        </>
    )
    } else if (currentUser.accountTypeId !== 1 && {}) {
        return (
            <>
        
            <div>Wrestler</div>
            <Route path="/logout" render={
                    (props) => {
                        localStorage.removeItem("tussle_user")
                        props.history.push("/login")
                    }
                } />
            
            </>
        )
    }
}