import React, {useState} from "react"

export const TechnicalTypeContext = React.createContext()

export const TechnicalTypeProvider = (props) => {
    const [technicalTypes, setTechnicalTypes] = useState([])

    const getTechnicalTypes = () => {
        return fetch("http://localhost:8088/technicalTypes")
        .then(res => res.json())
        .then(setTechnicalTypes)
    }

    return (
        <TechnicalTypeContext.Provider value = {{
            technicalTypes, getTechnicalTypes
        }}>
            {props.children}
        </TechnicalTypeContext.Provider>
    )
}