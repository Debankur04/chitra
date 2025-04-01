"use client"
import { createContext,useState } from "react";

export const AppContext= createContext()

const AppContextProvider=(props)=>{
    const [user, setuser] = useState(true)
    const [showLogin, setshowLogin] = useState(false)

    const value = {
        user, setuser,showLogin
    }
    return (
        <AppContext.Provider value={value}>
            {
                props.children
            }
        </AppContext.Provider>
    )
}

export default AppContextProvider