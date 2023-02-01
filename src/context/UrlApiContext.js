import {createContext, useState} from 'react'

export const UrlApiContext = createContext()

export const UrlApiContextProvider = ({children}) => {
    const [url] = useState("http://localhost:3000/products")

    return (
        <UrlApiContext.Provider value={{url}}>
            {children}
        </UrlApiContext.Provider>
    )
}