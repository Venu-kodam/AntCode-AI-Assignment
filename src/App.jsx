import React, { useState } from 'react'
import Home from './components/Home'
import { Route, Routes } from 'react-router-dom'
import Login from './components/Login'
const App = () => {
  const[islogin,setIsLogin] = useState(false)
  return (
    <div className=''>
      { islogin ?<Home setIsLogin={setIsLogin}/> : <Login setIsLogin={setIsLogin}/>}
    </div>
  )
}

export default App