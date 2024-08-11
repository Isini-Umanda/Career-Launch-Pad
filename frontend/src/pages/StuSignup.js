import { useState } from "react"
import LoginRegistrationDeco from "../components/LoginRegistrationDeco"
import { useSignup } from "../hooks/useStuSignup"

const Signup = () => {
    const [fname, setfName] = useState('')
    const [lname, setlName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [al_stream, setAl_stream] = useState('')
    const [z_score, setz_score] = useState('')
    const [desire_subject, setdesire_subject] = useState('')
    const {stuSignup, error, isLoading} = useSignup()

    const handleSubmit = async (e) => {
        e.preventDefault()

        await stuSignup(fname, lname, email, password, al_stream, z_score, desire_subject)
    }

    return (
        <div className="flex w-full h-screen">
            <div className="w-full flex items-center justify-center lg:w-1/2">
            <form className=' w-11/12 max-w-[700px] px-10 py-20 rounded-3xl bg-white border-2 border-gray-100' onSubmit={handleSubmit}>
                <p className='font-medium text-2xl text-gray-500 mt-4'>Welcome to CareerLaunchPad!</p>
                <div className='mt-8'>               
                    <div className='flex flex-col'>
                        <label className='text-sm font-medium'>First Name</label>
                        <input 
                            type="text"
                            value={fname}
                            onChange={(e) => setfName(e.target.value)}
                            className='w-full border-2 border-gray-100 rounded-xl p-3 mt-1 bg-transparent text-sm font-medium'
                            placeholder="Enter your first Name"/> 
                    </div>
                    <div className='flex flex-col'>
                        <label className='text-sm font-medium'>Second Name</label>
                        <input 
                            type="text"
                            value={lname}
                            onChange={(e) => setlName(e.target.value)}
                            className='w-full border-2 border-gray-100 rounded-xl p-3 mt-1 bg-transparent text-sm font-medium'
                            placeholder="Enter your second Name"/> 
                    </div>
                    <div className='flex flex-col'>
                        <label className='text-sm font-medium'>Your A/L stream</label>
                        <input 
                            type="text"
                            value={al_stream}
                            onChange={(e) => setAl_stream(e.target.value)}
                            className='w-full border-2 border-gray-100 rounded-xl p-3 mt-1 bg-transparent text-sm font-medium'
                            placeholder="Biology"/>
                    </div>
                    <div className='flex flex-col'>
                        <label className='text-sm font-medium'>Z-Score</label>
                        <input 
                            type="number"
                            value={z_score}
                            onChange={(e) => setz_score(e.target.value)}
                            className='w-full border-2 border-gray-100 rounded-xl p-3 mt-1 bg-transparent text-sm font-medium'
                            placeholder="0.4325"/>
                    </div>
                    <div className='flex flex-col'>
                        <label className='text-sm font-medium'>Desire Subject Area</label>
                        <input 
                            type="tel"
                            value={desire_subject}
                            onChange={(e) => setdesire_subject(e.target.value)}
                            className='w-full border-2 border-gray-100 rounded-xl p-3 mt-1 bg-transparent text-sm font-medium'
                            placeholder="Computer Science"/>
                    </div>
                    <div className='flex flex-col'>
                        <label className='text-sm font-medium'>Email</label>
                        <input 
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className='w-full border-2 border-gray-100 rounded-xl p-3 mt-1 bg-transparent text-sm font-medium'
                            placeholder="Enter your email"/>
                    </div>
                    <div className='flex flex-col mt-4'>
                        <label className='text-sm font-medium'>Password</label>
                        <input 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className='w-full border-2 border-gray-100 rounded-xl p-3 mt-1 bg-transparent text-sm font-medium'
                            placeholder="Enter your email"
                            type={"password"}/>
                    </div>
                    <div className='mt-8 flex flex-col gap-y-4'>
                    <button disabled={isLoading}
                        className='active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform py-3 bg-emerald-600 rounded-xl text-white font-bold text-lg'>Sign up</button>
                        {error && <div className="p-2 bg-red-100 rounded-md border-red-200 shadow-lg">{ error }</div>}
                    </div>
                </div>
            </form>
            </div>
            <LoginRegistrationDeco/>
        </div>
    )
}

export default Signup