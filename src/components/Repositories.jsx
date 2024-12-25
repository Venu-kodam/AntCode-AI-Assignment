import React, { useState } from 'react'
import assets from '../assets/assets'

const Repositories = ({ menu, setMenu,setIsLogin }) => {
    const repositories = [
        {
            name: "design-system",
            visibility: "Public",
            language: "React",
            size: "7320 KB",
            updated: "1 day ago",
        },
        {
            name: "codeant-ci-app",
            visibility: "Private",
            language: "Javascript",
            size: "5871 KB",
            updated: "2 days ago",
        },
        {
            name: "analytics dashboard",
            visibility: "Private",
            language: "Python",
            size: "4521 KB",
            updated: "5 days ago",
        },
        {
            name: "mobile app",
            visibility: "Public",
            language: "Swift",
            size: "3096 KB",
            updated: "3 days ago",
        },
        {
            name: "e-commerce-platform",
            visibility: "Private",
            language: "Java",
            size: "6210 KB",
            updated: "6 days ago",
        },
        {
            name: "blog-website",
            visibility: "Public",
            language: "HTML/CSS",
            size: "1876 KB",
            updated: "4 days ago",
        },
        {
            name: "social-network",
            visibility: "Private",
            language: "PHP",
            size: "5432 KB",
            updated: "7 days ago",
        },
    ]

    return (
        <div className={`sm:rounded-xl py-2 bg-white`}>
            <div className='pt-3 '>
                <div className='sm:hidden flex justify-between px-6 pb-4 border-b'>
                    <div className='flex items-center gap-2'>
                        <img src={assets.logo} alt="" />
                        <h1 className='text-2xl font-semibold'>CodeAnt AI</h1>
                    </div>
                    <img onClick={() => setMenu(true)} src={assets.menu} alt="" />
                </div>

                {/* navigation menu for small screen */}
                <div className={`absolute top-0 right-0  overflow-hidden min-h-[550px] bg-white shadow-lg transition-all ${menu ? 'w-full ' : 'w-0'}`}>
                    <div className='sm:hidden flex justify-between pt-3 px-6 pb-4 '>
                        <div className='flex items-center gap-2'>
                            <img src={assets.logo} alt="" />
                            <h1 className='text-2xl font-semibold'>CodeAnt AI</h1>
                        </div>
                        <img onClick={() => setMenu(false)} src={assets.cross} alt="" />
                    </div>
                    <select className='my-2 w-[90%] relative border border-gray-600 p-2 mx-[5%] appearance-none rounded-lg'>
                        <option value="" className='font-semibold'>Utkarsh</option>
                    </select>
                    <img src={assets.downarrow} className='absolute top-[85px] right-9' alt="" />
                    <div className='px-4'>
                        <div className='flex gap-2 mt-4 px-2 py-3 rounded-md cursor-pointer'>
                            <img src={assets.home} className='' alt="" />
                            <h1 className='font-semibold text-[#414651] text-xl'>Repositories</h1>
                        </div>
                        <div className='flex gap-2 mt-4 px-2 cursor-pointer'>
                            <img src={assets.code} alt="" />
                            <h1 className='font-semibold text-[#414651] text-xl '>AI Code Review</h1>
                        </div>
                        <div className='flex gap-2 mt-4 px-2 cursor-pointer'>
                            <img src={assets.cloud} alt="" />
                            <h1 className='font-semibold text-[#414651] text-xl'>Cloud Security</h1>
                        </div>
                        <div className='flex gap-2 mt-4 px-2 cursor-pointer'>
                            <img src={assets.book} alt="" />
                            <h1 className='font-semibold text-[#414651] text-xl'>How to Use</h1>
                        </div>
                        <div className='flex gap-2 mt-4 px-2 cursor-pointer'>
                            <img src={assets.settings} alt="" />
                            <h1 className='font-semibold text-[#414651] text-xl'>Settings</h1>
                        </div>
                        <div className='flex gap-2 mt-4 px-2 cursor-pointer'>
                            <img src={assets.phone} alt="" />
                            <h1 className='font-semibold text-[#414651]  text-xl'>Support</h1>
                        </div>
                        <div onClick={()=>setIsLogin(false)} className='flex gap-2 mt-4 px-2 cursor-pointer'>
                            <img src={assets.logout} alt="" />
                            <h1 className='font-semibold text-[#414651]  text-xl'>Logout</h1>
                        </div>
                    </div>
                </div>
                
                {/* repositories  */}
                <div className='flex flex-col lg:flex-row justify-between px-5 my-3'>
                    <div>
                        <h1 className='text-3xl font-semibold'>Repositories</h1>
                        <p>33 total repositories</p>
                    </div>
                    <div className='flex gap-3 my-3 lg:my-0'>
                        <button className='flex items-center gap-2 border rounded-md px-4 h-[45px]'>
                            <img src={assets.refresh} alt="" />
                            <span>Refresh All</span>
                        </button>
                        <button className='flex items-center gap-2 border rounded-md px-4 bg-[#1570EF] h-[45px]'>
                            <img src={assets.plus} alt="" />
                            <p className='text-white'>Add Repository</p>
                        </button>
                    </div>
                </div>
                <div className='border border-gray-300 shadow-sm rounded-md flex gap-2 my-4 mx-[2.5%] sm:mx-5 px-5 py-2 w-[95%] sm:w-[400px]'>
                    <img src={assets.search_icon} alt="" />
                    <input type="text" placeholder='Search Repositories' className='outline-none placeholder:text-gray-700 text-xl ' />
                </div>
                {
                    repositories.map((repo, index) => (
                        <div key={index} className={`border-t-2 p-5 ${index === 1 ? 'bg-[#FAFAFA]' : 'bg-white'}`}>
                            <div className='flex gap-2'>
                                <h1 className='font-semibold text-xl'>{repo.name}</h1>
                                <p className='bg-[#EFF8FF] py-0.5 px-3 text-[#175CD3] border border-[#B2DDFF] rounded-full text-sm'>{repo.visibility}</p>
                            </div>
                            <div className='flex gap-4 sm:gap-8 mt-3'>
                                <div className='flex gap-2 items-center'>
                                    <p>{repo.language}</p>
                                    <div className='bg-[#1570EF] w-[8px] h-[8px] rounded-full'></div>
                                </div>
                                <div className='flex gap-2'>
                                    <img src={assets.database} alt="" />
                                    <p>{repo.size}</p>
                                </div>
                                <p>Updated {repo.updated}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Repositories