import React, {useState} from "react"

export const TechnicalContext = React.createContext()

export const TechnicalProvider = (props) => {
    const [technicals, setTechnicals] = useState([])

    const getTechnicals = () => {
        return fetch("http://localhost:8088/technicals")
        .then(res => res.json())
        .then(setTechnicals)
    }

    return (
        <TechnicalContext.Provider value = {{
            technicals, getTechnicals
        }}>
            {props.children}
        </TechnicalContext.Provider>
    )
}