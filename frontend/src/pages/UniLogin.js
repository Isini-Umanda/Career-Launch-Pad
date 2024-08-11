import { useState } from "react"
import { useNavigate } from 'react-router-dom';
import LoginRegistrationDeco from "../components/LoginRegistrationDeco"

const UniLogin = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
    }

    const handleSignupClick = async (e) => {
        e.preventDefault()
        navigate('/UniSignup', { replace: true })
    }

    const navigate = useNavigate();

    return (
        <div className="flex w-full h-screen">
            <div className="w-full flex items-center justify-center lg:w-1/2">
            <form className=' w-11/12 max-w-[700px] px-10 py-20 rounded-3xl bg-white border-2 border-gray-100'>
                <h1 className='text-5xl font-semibold'>University</h1>
                <p className='font-medium text-lg text-gray-500 mt-4'>Welcome Back</p>
                <div className='mt-8'>               
                    <div className='flex flex-col'>
                        <label className='text-lg font-medium'>Email</label>
                        <input 
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                            placeholder="Enter your email"/>
                    </div>
                    <div className='flex flex-col mt-4'>
                        <label className='text-lg font-medium'>Password</label>
                        <input 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                            placeholder="Enter your email"
                            type={"password"}/>
                    </div>
                    <div className='mt-8 flex flex-col gap-y-4'>
                    <button 
                        onSubmit={handleSubmit}
                        className='active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform py-3 bg-emerald-600 rounded-xl text-white font-bold text-lg'>Sign in</button>
                    </div>
                    <div className='mt-8 flex justify-center items-center'>
                    <p className='font-medium text-base'>Don't have an account?</p>
                    <button 
                        onClick={handleSignupClick}
                        className='ml-2 font-medium text-base text-emerald-600'>Sign up</button>
                </div>
                </div>
            </form>
            </div>
            <LoginRegistrationDeco/>
        </div>
    )
}

export default UniLogin