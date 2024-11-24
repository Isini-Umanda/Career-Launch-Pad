import { useAuthContext } from "./useAuthContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


export const useStuLogin = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const { dispatch } = useAuthContext()
    const navigate = useNavigate();


    const stuLogin = async (stu_email, stu_password) => {
        setIsLoading(true)
        setError(null)

        const response = await fetch('/api/student/stuLogin', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ stu_email, stu_password })
        })

        const json = await response.json()

        if(!response.ok) {
            setIsLoading(false)
            setError(json.error)
        }
        if(response.ok) {
            //save the user to local storage
            localStorage.setItem('student', JSON.stringify(json))

            //update the auth context
            dispatch({type: 'LOGIN', payload: {user: json, userType: 'student'}})

            setIsLoading(false)

            //navigate to login page
            navigate('/CareerQuiz');
        }
    }

    return { stuLogin, isLoading, error }
}