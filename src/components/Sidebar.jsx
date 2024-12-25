import React, { useState } from 'react'
import assets from '../assets/assets'
const Sidebar = ({setIsLogin}) => {
  return (
    <div className='px-6 min-h-screen py-4'>
      <div className='flex items-center gap-2 my-3'>
        <img src={assets.logo} className='sm:hidden lg:block' alt="" />
        <h1 className='font-semibold sm:text-2xl  xl:text-3xl '>CodeAnt AI</h1>
      </div>
      <select className='my-2 w-full border relative border-gray-600 appearance-none p-2 rounded-lg'>
        <option value="">Utkarsh</option>
      </select>
      <img src={assets.downarrow} className='absolute top-[100px] right-9' alt="" />
      <div> 
        <div  className={`flex gap-2 mt-4 bg-[#1570EF] text-white px-2 py-3 rounded-md cursor-pointer`}>
          <img src={assets.home_white} className='' alt="" />
          <h1 className='font-semibold md:text-md lg:text-xl ' >Repositories</h1>
        </div>
        <div className='flex gap-2 mt-4 px-2 cursor-pointer'>
          <img src={assets.code} alt="" />
          <h1 className='font-semibold text-[#414651] md:text-md lg:text-xl '>AI Code Review</h1>
        </div>
        <div  className='flex gap-2 mt-4 px-2 cursor-pointer'>
          <img src={assets.cloud} alt="" />
          <h1 className='font-semibold text-[#414651] md:text-md lg:text-xl'>Cloud Security</h1>
        </div>
        <div  className='flex gap-2 mt-4 px-2 cursor-pointer'>
          <img src={assets.book} alt="" />
          <h1 className='font-semibold text-[#414651] md:text-md lg:text-xl '>How to Use</h1>
        </div>
        <div  className='flex gap-2 mt-4 px-2 cursor-pointer'>
          <img src={assets.settings} alt="" />
          <h1 className='font-semibold text-[#414651] md:text-md lg:text-xl'>Settings</h1>
        </div>
      </div>

      <div className='absolute bottom-8'>
        <div className='flex gap-2 mt-4 px-2 cursor-pointer'>
          <img src={assets.phone} alt="" />
          <h1 className='font-semibold text-[#414651]  md:text-md lg:text-xl'>Support</h1>
        </div>
        <div onClick={()=>setIsLogin(false)} className='flex gap-2 mt-4 px-2 cursor-pointer'>
          <img src={assets.logout} alt="" />
          <h1 className='font-semibold text-[#414651]  md:text-md lg:text-xl'>Logout</h1>
        </div>
      </div>
    </div>
  )
}

export default Sidebar