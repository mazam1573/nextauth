'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter, redirect } from 'next/navigation';

const Register = () => {

    const [error, setError] = useState("");
    const router = useRouter;

    const isValidEmail = (email: string) => {
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        return emailRegex.test(email);
    }
    const handleRegistration = async (e:any) => {
        e.preventDefault();
        const email = e.target[0].value;
        const password = e.target[1].value;
        console.log(email, password);
        if(!isValidEmail(email)){
            setError("Email is invalid")
            return
        }
        
        if(!password || password.length < 8){
            setError("password is wrong")
            return
        }

        try {
            const response = await fetch("api/register", {
                method: "POST", 
                headers: {"Contet-Type": "application/json"},
                body: JSON.stringify({email, password})
            })

            if(response.status === 400) {
                setError('This Email is already register');
            }
            if(response.status === 200) {
                // router.push('/login')
                // setError("")
                redirect('/login')
            }
        } catch (error) {
            setError("Error in registration. Please try agian");
            console.log(error);
        }
    }
  return (
    <main className='flex lg:h-[100vh]'>
        <div className='w-full lg:w-[60%] p-8 md:p-14 flex items-center justify-center lg:justify-start'>
            <div className='p-8 w-[600px]'>
                <h1 className='text-6xl font-semibold'>Sign Up</h1>
                <p className='mt-6 ml-1'>Already have an account ? <Link href='/login'>Login</Link>{" "}</p>

                <div className='bg-black text-white py-4 mt-10 rounded-full transition-transform hover:bg-black/[0.5] active:scale-90 flex justify-center items-center gap-4 cursor-pointer group:'>
                    <span className='font-medium text-white group-hover:text-white'>Login with Github</span>
                </div>

                <form onSubmit={handleRegistration}>
                    <p className='text-red-600 text-[16px] mb-4'>{error && error}</p>
                    <div className='mt-10 pl-1 flex flex-col'>
                        <label>Email</label>
                        <input type="email" required className='font-mediun border-b border-black p-4 outline-0'/>
                        <label>Password</label>
                        <input type="password" required className='font-mediun border-b border-black p-4 outline-0'/>
                    </div>
                    <button className='bg-black text-white w-44 py-4 mt-10 rounded-full transition-transform hover:bg-black/[0.5]'>Sign Up</button>
                </form>
            </div>
        </div>
        <div className='w-[40%] bg-slate-400 bg-cover bg-right-top hidden lg:block' style={{backgroundImage: "url('/write.jpg')"}}></div>
    </main>
  )
}

export default Register