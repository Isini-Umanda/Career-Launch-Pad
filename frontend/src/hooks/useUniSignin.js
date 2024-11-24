import { useAuthContext } from "./useAuthContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


export const useUniLogin = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const { dispatch } = useAuthContext()
    const navigate = useNavigate();


    const uniLogin = async (uni_email, uni_password) => {
        setIsLoading(true)
        setError(null)

        const response = await fetch('/api/uniUser/uniLogin', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({uni_email, uni_password})
        })

        const json = await response.json()

        if(!response.ok) {
            setIsLoading(false)
            setError(json.error)
        }
        if(response.ok) {
            
            localStorage.removeItem('uniUser');

            //save the user to local storage
            localStorage.setItem('uniUser', JSON.stringify(json))

            //update the auth context
            dispatch({type: 'LOGIN', payload: {user: json, userType: 'university' }});

            setIsLoading(false)

            //navigate to login page
            navigate('/UniversityDashboard');
        }
    }

    return { uniLogin, isLoading, error }
}