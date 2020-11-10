import React, {useContext, useEffect} from "react"
import { Route } from "react-router-dom"
import { UsersContext, UsersProvider } from "./users/UsersProvider"
import { EventsList } from "./events/EventsList"
import { EventProvider } from "./events/EventProvider"
import { TechnicalProvider } from "./TechnicalProvider"
import { AccountTypeProvider } from "./AccountTypeProvider"
import { EventForm } from "./events/EventForm"
import { WrestlerEventsList } from "./events/WrestlerEventsList"
import { BidForm } from "./events/BidForm"
import { UserEventProvider } from "./events/UserEventProvider"
import { WrestlerBidList } from "./events/WrestlerBidList"
import { WrestlerList } from "./users/WrestlerList"
import { WrestlerSearch } from "./users/WrestlerSearch"
import { OrganizerBidList } from "./events/OrganizerBidList"
import { WrestlerMyEventsList } from "./events/WrestlerMyEventsList"
import { MessageList } from "./messages/MessageList"
import { MessagesProvider } from "./messages/MessageProvider"
import { MessageDetails } from "./messages/MessageDetails"
import { EventSearch } from "./events/EventsSearchBar"




export const ApplicationViews = (props) => {
    const {currentUser, getCurrentUser} = useContext(UsersContext)

    useEffect(() => {
        getCurrentUser()
        
        },[])


        if(currentUser.accountTypeId !== 2) {
    return (
        <>
        <EventProvider>
            <UsersProvider>
                <TechnicalProvider>
                    <AccountTypeProvider>
                        <UserEventProvider>
                            <MessagesProvider>
                                <Route exact path="/" render={ props => {
                                            return <>
                                                <WrestlerSearch />
                                                <WrestlerList {...props} />
                                                </>
                                                    }
                                                } />
                                <Route exact path="/events" render={ 
                                    props =>  <EventsList {...props} />     
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
                                <Route exact path="/messages" render={
                                        props => <MessageList {...props} />
                                } />
                                <Route path="/messages/:userId(\d+)" render={
                                         props => <MessageDetails {...props} />
                                } />
                            </MessagesProvider>
                        </UserEventProvider>
                    </AccountTypeProvider>
                </TechnicalProvider>
            </UsersProvider>
        </EventProvider>
        <Route path="/logout" render={
                (props) => {
                    sessionStorage.removeItem("tussle_user")
                    props.history.push("/login")
                }
            } />
        </>
    )
    } else {
        return (
            <>
            <EventProvider>
                <UsersProvider>
                    <TechnicalProvider>
                        <AccountTypeProvider>
                            <UserEventProvider>
                            <MessagesProvider>
                                        <Route exact path="/" render={ props => {
                                                    return <>
                                                        <EventSearch />
                                                        <WrestlerEventsList {...props} />
                                                    </>
                                                }
                                            } />
                                        <Route exact path="/bid/:eventId(\d+)" render={
                                            props => <BidForm {...props} />
                                            } />
                                        <Route exact path="/bids" render={
                                            props => <WrestlerBidList {...props} />
                                            } />
                                        <Route exact path="/events" render={
                                            props => <WrestlerMyEventsList {...props} />
                                            } />
                                        <Route exact path="/messages" render={
                                            props => <MessageList {...props} />
                                            } />
                                            <Route path="/messages/:userId(\d+)" render={
                                         props => <MessageDetails {...props} />
                                } />
                                    </MessagesProvider>
                            </UserEventProvider>
                        </AccountTypeProvider>
                    </TechnicalProvider>
                </UsersProvider>
            </EventProvider>
            
            <Route path="/logout" render={
                    (props) => {
                        sessionStorage.removeItem("tussle_user")
                        props.history.push("/login")
                    }
                } />
            </>
        )
    }
}