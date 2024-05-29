import React from 'react'
import Link from 'next/link'

const Login = () => {
  return (
    <main className='flex lg:h-[100vh]'>
        <div className='w-full lg:w-[60%] p-8 md:p-14 flex items-center justify-center lg:justify-start'>
            <div className='p-8 w-[600px]'>
                <h1 className='text-6xl font-semibold'>Sign In</h1>
                <p className='mt-6 ml-1'>Create an account ? <Link href='/register'>Sign Up</Link>{" "}</p>

                <div className='bg-black text-white py-4 mt-10 rounded-full transition-transform hover:bg-black/[0.5] active:scale-90 flex justify-center items-center gap-4 cursor-pointer group:'>
                    <span className='font-medium text-white group-hover:text-white'>Login with Github</span>
                </div>

                <form action="">
                    <div className='mt-10 pl-1 flex flex-col'>
                        <label>Email</label>
                        <input type="email" required className='font-mediun border-b border-black p-4 outline-0'/>
                        <label>Password</label>
                        <input type="password" required className='font-mediun border-b border-black p-4 outline-0'/>
                    </div>
                    <button className='bg-black text-white w-44 py-4 mt-10 rounded-full transition-transform hover:bg-black/[0.5]'>Sign In</button>
                </form>
            </div>
        </div>
        <div className='w-[40%] bg-slate-400 bg-cover bg-right-top hidden lg:block' style={{backgroundImage: "url('/write.jpg')"}}></div>
    </main>
  )
}

export default Login