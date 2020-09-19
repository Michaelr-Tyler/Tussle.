import React, {useContext, useEffect} from "react"
import { Route } from "react-router-dom";
import { UsersContext, UsersProvider } from "./users/UsersProvider";
import { EventsList } from "./events/EventsList";
import { EventProvider } from "./events/EventProvider";
import { TechnicalProvider } from "./TechnicalProvider";
import { AccountTypeProvider } from "./AccountTypeProvider";
import { EventForm } from "./events/EventForm";
import { WrestlerEventsList } from "./events/WrestlerEventsList";
import { BidForm } from "./events/BidForm";
import { UserEventProvider } from "./events/UserEventProvider";
import { WrestlerBidEventsList } from "./events/WrestlerBidEventsList";
import { UserList } from "./users/UserList"
import { UserSearch } from "./users/UserSearch";
import { OrganizerBidList } from "./events/OrganizerBidList";




export const ApplicationViews = (props) => {
    const {currentUser, getCurrentUser} = useContext(UsersContext)

    useEffect(() => {
        getCurrentUser()
        
        },[console.log(currentUser)])


        if(currentUser.accountTypeId !== 2 && {}) {
    return (
        <>
    
        
        <EventProvider>
            <UsersProvider>
                <TechnicalProvider>
                    <AccountTypeProvider>
                        <UserEventProvider>
                    <Route exact path="/" render={ props => {
                                return <>
                                    <UserSearch />
                                    <UserList {...props} />
                                    </>
                                        }
                                    } />
                    <Route exact path="/events" render={ props => {
                                return <>
                                    <EventsList {...props} />
                                </>
                            }
                        } />
                    <Route exact path="/events/create" render={
                            props => <EventForm {...props} />
                        } />
                    <Route exact path="/events/edit/:eventId(\d+)" render={
                        props => <EventForm {...props} />
                    } />
                    <Route exact path="/bids" render={
                            props => <OrganizerBidList {...props} />
                    } />
                        </UserEventProvider>
                    </AccountTypeProvider>
                </TechnicalProvider>
            </UsersProvider>
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
            <EventProvider>
                <UsersProvider>
                    <TechnicalProvider>
                        <AccountTypeProvider>
                            <UserEventProvider>
                                <Route exact path="/" render={ props => {
                                            return <>
                                                <WrestlerEventsList {...props} />
                                            </>
                                        }
                                    } />
                                <Route exact path="/bid/:eventId(\d+)" render={
                                    props => <BidForm {...props} />
                                    } />
                                <Route exact path="/bids" render={
                                    props => <WrestlerBidEventsList {...props} />
                                    } />
                            </UserEventProvider>
                        </AccountTypeProvider>
                    </TechnicalProvider>
                </UsersProvider>
            </EventProvider>
            
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