import { createContext, useReducer} from 'react'

export const TitleColorContext = createContext()

export const titleColorReducer = (state, action) => {
    switch(action.type){
        case "RED":
            return {...state, color: "red"}
        case "BLUE":
            return {...state, color: "blue"}
        case "BLACK":
            return {...state, color: "black"}
        case "GREEN":
            return {...state, color: "green"}
        case "PURPLE":
            return {...state, color: "purple"}
        default:
            return {...state, color: "black"}
    }
}

export const TitleColorContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(titleColorReducer, {color: "blue"})
    return <TitleColorContext.Provider value={{...state, dispatch}}>
            {children}
        </TitleColorContext.Provider>
}