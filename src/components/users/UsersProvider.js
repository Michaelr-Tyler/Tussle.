import React, {useState} from "react"

export const UsersContext = React.createContext()
  

export const UsersProvider = (props) => {
    const [users, setUsers] = useState([])
    const [currentUser, setCurrentUser] = useState([])
    const [searchTerms, setTerms] = useState("")
    const getUsers= () => {
        return fetch("http://localhost:8088/users")
        .then(res => res.json())
        .then(setUsers)
    }
    const getCurrentUser = () => {
        const currentUserId = localStorage.getItem("tussle_user")
        const id = parseInt(currentUserId)
        return fetch(`http://localhost:8088/users/${id}`)
        .then(res => res.json())
        .then(setCurrentUser)
    }

    return (
        <UsersContext.Provider value = {{
            users, getUsers, getCurrentUser, currentUser, searchTerms, setTerms
        }}>
            {props.children}
        </UsersContext.Provider>
    )
}