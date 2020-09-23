import React, {useState} from "react"

export const MessagesContext = React.createContext()
  

export const MessagesProvider = (props) => {
    const [messages, setMessages] = useState([])


    const getMessages= () => {
        return fetch("http://localhost:8088/messages?_expand=user")
        .then(res => res.json())
        .then(setMessages)
    }
    
    const getMessagesById = (userId ) => {
        return fetch(`http://localhost:8088/messages/${userId}?_expand=user`)
    }

    const addMessages = message => {
        return fetch("http://localhost:8088/messages", {
            method:"POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(message)
        })
            .then(getMessages)
        
    }


    

    return (
        <MessagesContext.Provider value = {{
            messages, getMessages, addMessages, getMessagesById
        }}>
            {props.children}
        </MessagesContext.Provider>
    )
}