import React, {useContext, useEffect, useState} from "react"
import { TechnicalContext } from "../TechnicalProvider"
import { Button } from "../utils/Button"
import { User } from "./Users"
import { UsersContext } from "./UsersProvider"


export const UserList = (props) => {
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
 
 
     useEffect(() => {
        const wrestlersOnly = users.filter(u => u.accountTypeId === 2)
        setFiltered(wrestlersOnly)
     }, [users])



    return (
        <section className="usersContainer">
            <h1 classname="users__title">Wrestlers</h1>
            <div className="users">
                {
                    filteredWrestlers.map(wrestler => {
                    const type = technicals.find(t => t.id === wrestler.technicalId) || {}
                        return (
                            <div  key={wrestler.id} className="user">
                            <User 
                            user={wrestler}
                            technical={type}
                            props={props}
                             />
                             <Button label={'message'} 
                             onClick={()=>props.history.push(`/messages/${props.user.id}`)} />
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )   
}

