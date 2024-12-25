import React, { useState } from 'react'
import assets from '../assets/assets'

const Login = ({setIsLogin}) => {
    const[selected,setSelected] = useState('SAAS')
    return (
        <div className='flex flex-col sm:flex-row  gap-2'>
            <div className='w-[95%] mx-[2.5%] lg:mx-0 sm:w-[50%] relative hidden sm:flex min-h-screen justify-center flex-col items-center '>
                <div className='rounded-2xl border bg-[#ffffffb6] shadow-2xl relative'>
                    <div className='flex items-center gap-2 border-b p-5'>
                        <img src={assets.logo} alt="" />
                        <p className='sm:text-lg lg:text-xl font-semibold'>AI to Detect & Autofix Bad Code</p>
                    </div>
                    <div className='flex gap-12 py-5 px-6  '>
                        <div>
                            <h1 className='text-xl font-bold text-center'>30+</h1>
                            <p>Language Support</p>
                        </div>
                        <div>
                            <h1 className='text-xl font-bold text-center'>10K+</h1>
                            <p>Developers</p>
                        </div>
                        <div>
                            <h1 className='text-xl font-bold text-center'>100K+</h1>
                            <p>Hours Saved</p>
                        </div>
                    </div>
                </div>
                <img src={assets.big_logo} className='absolute left-0 bottom-0' alt="" />
                <div className='rounded-2xl shadow-lg border shadow-gray-400 p-5 w-[260px] z-10 bg-white relative sm:bottom-[10px] sm:right-[-10px] lg:bottom-[10px] lg:right-[-110px]'>
                    <div className='flex justify-between gap-4'>
                        <div className='bg-[#9D90FA40] w-12 h-12 rounded-full flex items-center justify-center'>
                            <img src={assets.piechart} alt="" />
                        </div>
                        <div>
                            <div className='flex gap-2 my-1'>
                                <img src={assets.uparrow} alt="" />
                                <p className='text-[#0049C6] font-bold'>14%</p>
                            </div>
                            <p>This week</p>
                        </div>
                    </div>
                    <div>
                        <h1 className='text-lg font-semibold'>Issues Fixed</h1>
                        <p className='sm:text-xl lg:text-3xl font-bold'>500K+</p>
                    </div>
                </div>
            </div>
            <div className='bg-[#FAFAFA] min-h-screen w-full sm:w-[50%] p-4 flex flex-col items-center justify-center '>
                <div className='bg-white w-full border  border-b rounded-lg min-h-[530px]'>
                    <div className='p-4'>
                        <div className='flex items-center justify-center gap-2 p-5'>
                            <img src={assets.logo} alt="" />
                            <p className='text-2xl font-semibold'>CodeAnt AI</p>
                        </div>
                        <h1 className='text-2xl lg:text-4xl font-semibold text-center mb-6'>Welcome to CodeAnt AI</h1>
                        <div className='flex  items-center justify-center'>
                            <button onClick={()=>setSelected('SAAS')} className={`w-full rounded-md text-center py-3  font-semibold ${selected==='SAAS'?'bg-[#1570EF] text-white':'bg-[#FAFAFA] text-black'}`}>SAAS</button>
                            <button onClick={()=>setSelected('Self Hosted')} className={`w-full border rounded-md text-center py-3 font-semibold ${selected==='Self Hosted'?'bg-[#1570EF] text-white':'bg-[#FAFAFA] text-black'}`}>Self Hosted</button>
                        </div>
                    </div>
                    {
                        selected==='SAAS'?
                        <div className='flex flex-col items-center gap-3 my-6 border-t'>
                        <div onClick={()=>setIsLogin(true)} className='flex gap-3 border p-3 rounded-md w-[80%] items-center justify-center cursor-pointer mt-6'>
                            <img src={assets.github} className='w-5' alt="" />
                            <p className='font-semibold'>Sign in with Github</p>
                        </div>
                        <div onClick={()=>setIsLogin(true)} className='flex gap-3 border p-3 rounded-md w-[80%] items-center justify-center cursor-pointer'>
                            <img src={assets.bitbucket} className='w-5' alt="" />
                            <p className='font-semibold'>Sign in with Bitbucket</p>
                        </div>
                        <div onClick={()=>setIsLogin(true)} className='flex gap-3 border p-3 rounded-md w-[80%] items-center justify-center cursor-pointer'>
                            <img src={assets.azure} className='w-5' alt="" />
                            <p className='font-semibold'>Sign in with Azure Devops</p>
                        </div>
                        <div onClick={()=>setIsLogin(true)} className='flex gap-3 border p-3 rounded-md w-[80%] items-center justify-center cursor-pointer'>
                            <img src={assets.gitlab} className='w-5' alt="" />
                            <p className='font-semibold'>Sign in with GitLab</p>
                        </div>
                    </div>
                    :
                    <div className='flex flex-col items-center gap-3 py-6 border-t'>
                        <div onClick={()=>setIsLogin(true)} className='flex gap-3 border p-3 rounded-md w-[80%] items-center justify-center cursor-pointer'>
                            <img src={assets.gitlab} className='w-5' alt="" />
                            <p className='font-semibold'>Self Hosted GitLab</p>
                        </div>
                        <div onClick={()=>setIsLogin(true)} className='flex gap-3 border p-3 rounded-md w-[80%] items-center justify-center cursor-pointer'>
                            <img src={assets.key} className='w-5' alt="" />
                            <p className='font-semibold'>Sign in with SSO</p>
                        </div>
                    </div>
                    }
                    
                </div>
                <p className='text-center my-4'>By signing up you agree to the <span className='font-semibold'>Privacy Policy.</span> </p>
            </div>
        </div>
    )
}

export default Login