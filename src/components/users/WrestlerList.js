import userEvent from "@testing-library/user-event"
import React, {useContext, useEffect, useState} from "react"
import { AccountTypeContext } from "../AccountTypeProvider"
import { TechnicalContext } from "../TechnicalProvider"
import { WrestlerCard } from "./Users"
import { UsersContext } from "./UsersProvider"


export const WrestlerList = (props) => {
    const {users, getUsers, searchTerms} = useContext(UsersContext)
    const {technicals, getTechnicals} = useContext(TechnicalContext)


    const [ filteredWrestlers, setFiltered ] = useState([])
    
    useEffect(() => {
        getUsers()
        getTechnicals()
    },[])


    
    useEffect(() => {
        const wrestlersOnly = users.filter(u => u.accountTypeId === 2)
        const matchingUsers = wrestlersOnly.filter(user => (user.name.toLowerCase().includes(searchTerms.toLowerCase())) || (user.technical.type.toLowerCase().includes(searchTerms.toLowerCase())))
        setFiltered(matchingUsers)
     }, [searchTerms])

    //  useEffect(() => {
    //     const wrestlersOnly = users.filter(u => u.accountTypeId === 2)
    //     const matchingUsersByType = wrestlersOnly.filter(user => (user.technical.type.toLowerCase().includes(searchTerms.toLowerCase())))
    //     setFiltered(matchingUsersByType)
    //  }, [searchTerms])
 
 
     useEffect(() => {
        const wrestlersOnly = users.filter(u => u.accountTypeId === 2)
        setFiltered(wrestlersOnly)
     }, [users])



    return (
        <section className="wrestlersContainer">
            <h1 className="wrestlers--name">Wrestlers</h1>
                <div className="wrestlers">
                {
                    filteredWrestlers.map(wrestler => {
                    const type = technicals.find(t => t.id === wrestler.technicalId) || {}
                        return (
                            <>
                            <WrestlerCard key={wrestler.id} 
                            user={wrestler}
                            technical={type}
                            props={props}
                             />

                            </>
                        )
                    })
                }
                </div>
        </section>
    )   
}