import { useAuthContext } from "./useAuthContext";
import { useState } from "react";

export const useSignup = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const { dispatch } = useAuthContext()

    const uniSignup = async (uni_name, uni_description, uni_email, uni_password, uni_hotline, uni_link, uni_address) => {
        setIsLoading(true)
        setError(null)

        const response = await fetch('/api/uniUser/uniSignup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ uni_name, uni_description, uni_email, uni_password, uni_hotline, uni_link, uni_address })
        })

        const json = await response.json()

        if(!response.ok) {
            setIsLoading(false)
            setError(json.error)
        }
        if(response.ok) {
            //save the user to local storage
            localStorage.setItem('uniUser', JSON.stringify(json))

            //update the auth context
            dispatch({type: 'LOGIN', payload: json})

            setIsLoading(false)
        }
    }

    return { uniSignup, isLoading, error }
}