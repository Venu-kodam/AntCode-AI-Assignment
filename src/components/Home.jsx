import React, { useState } from 'react'
import Sidebar from './Sidebar'
import Repositories from './Repositories'

const Home = ({setIsLogin}) => {
  const [menu, setMenu] = useState(false)
  return (
    <div className='flex flex-col sm:flex-row'>
        <div className=' w-full hidden lg:w-[20%] sm:block relative'>
          <Sidebar setIsLogin={setIsLogin}/>  
        </div>
        <div className={`w-full lg:w-[80%] bg-[#E9EAEB] sm:py-6  sm:px-6 border`}>
          <Repositories menu={menu} setMenu={setMenu} setIsLogin={setIsLogin}/>
        </div>
    </div>
  )
}

export default Home