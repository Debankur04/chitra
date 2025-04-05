"use client"
import { createContext,useState } from "react";

export const AppContext= createContext()

const AppContextProvider=(props)=>{
    const [user, setuser] = useState(null)
    const [showLogin, setshowLogin] = useState(false)


    const [token, settoken] = useState(localStorage.getItem('token'))
    const [Credit, setCredit] = useState(false)

    const backendUrl = NEXT_PUBLIC_BACKEND_URL

    const value = {
        user, setuser,showLogin, backendUrl, token, settoken,setCredit,Credit
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