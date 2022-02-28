import React, { createContext, useState } from 'react'

export const StoreContext = createContext<any>(null)

export const StoreContextProvider: React.FC = (props) => {
    const [isUserRegistrationConfirmed, setIsUserRegistrationConfirmed] = useState(false)
    const [errors, setErrors] = useState<null | {[key:string]:string}>(null)
    const [isLoading, setIsLoading] = useState(false)

    const values = {
        isUserRegistrationConfirmed,
        setIsUserRegistrationConfirmed,
        errors,
        setErrors,
        isLoading,
        setIsLoading
    }

    console.log(errors)
    return (  
        <StoreContext.Provider value={values}>
           {props.children}
        </StoreContext.Provider>
    )
}