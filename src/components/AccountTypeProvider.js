import React, {useState} from "react"

export const AccountTypeContext = React.createContext()

export const AccountTypeProvider = (props) => {
    const [accountTypes, setAccountTypes] = useState([])

    const getAccountTypes = () => {
        return fetch("http://localhost:8088/accountTypes")
        .then(res => res.json())
        .then(setAccountTypes)
    }

    return (
        <AccountTypeContext.Provider value = {{
            accountTypes, getAccountTypes
        }}>
            {props.children}
        </AccountTypeContext.Provider>
    )
}