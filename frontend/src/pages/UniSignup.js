import { useState } from "react"
import LoginRegistrationDeco from "../components/LoginRegistrationDeco"
import { useSignup } from "../hooks/useUniSignup"

const Signup = () => {
    const [name, setName] = useState('')
    const [description, setDecription] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [phone, setPhone] = useState('')
    const [uni_link, setUni_link] = useState('')
    const [address, setAddress] = useState('')
    const {uniSignup, error, isLoading} = useSignup()

    const handleSubmit = async (e) => {
        e.preventDefault()

        await uniSignup(name, description, email, password, phone, uni_link, address)
    }

    return (
        <div className="flex w-full h-screen">
            <div className="w-full flex items-center justify-center lg:w-1/2">
            <form className=' w-11/12 max-w-[700px] px-10 py-20 rounded-3xl bg-white border-2 border-gray-100' onSubmit={handleSubmit}>
                <p className='font-medium text-2xl text-gray-500 mt-4'>Welcome to CareerLaunchPad!</p>
                <div className='mt-6'>               
                    <div className='flex flex-col'>
                        <label className='text-sm font-medium'>University Name</label>
                        <input 
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className='w-full border-2 border-gray-100 rounded-xl p-3 mt-1 bg-transparent text-sm font-medium'
                            placeholder="Enter University Name"/> 
                    </div>
                    <div className='flex flex-col'>
                        <label className='text-sm font-medium'>Description</label>
                        <input 
                            type="text"
                            value={description}
                            onChange={(e) => setDecription(e.target.value)}
                            className='w-full border-2 border-gray-100 rounded-xl p-3 mt-1 bg-transparent text-sm font-medium'
                            placeholder="About the University"/>
                    </div>
                    <div className='flex flex-col'>
                        <label className='text-sm font-medium'>Website URL</label>
                        <input 
                            type="URL"
                            value={uni_link}
                            onChange={(e) => setUni_link(e.target.value)}
                            className='w-full border-2 border-gray-100 rounded-xl p-3 mt-1 bg-transparent text-sm font-medium'
                            placeholder="Official Website URL"/>
                    </div>
                    <div className='flex flex-col'>
                        <label className='text-sm font-medium'>Contact Number</label>
                        <input 
                            type="tel"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className='w-full border-2 border-gray-100 rounded-xl p-3 mt-1 bg-transparent text-sm font-medium'
                            placeholder="Official Contact Number"/>
                    </div>
                    <div className='flex flex-col'>
                        <label className='text-sm font-medium'>Address</label>
                        <input 
                            type="text"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            className='w-full border-2 border-gray-100 rounded-xl p-3 mt-1 bg-transparent text-sm font-medium'
                            placeholder="University Address"/>
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
                            placeholder="Enter your Password"
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