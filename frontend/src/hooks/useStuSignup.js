import { useAuthContext } from "./useAuthContext";
import { useState } from "react";

export const useSignup = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const { dispatch } = useAuthContext()

    const stuSignup = async (stu_fname, stu_lname, stu_email, stu_password, al_stream, z_score, desire_subject) => {
        setIsLoading(true)
        setError(null)

        const response = await fetch('/api/student/stuSignup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ stu_fname, stu_lname, stu_email, stu_password, al_stream, z_score, desire_subject })
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
            dispatch({type: 'LOGIN', payload: json})

            setIsLoading(false)
        }
    }

    return { stuSignup, isLoading, error }
}