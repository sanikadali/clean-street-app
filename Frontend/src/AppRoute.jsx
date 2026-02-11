import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Register from './pages/auth/register'
import Login from './pages/auth/login'
import Home from './pages/home'

function AppRoute() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>
    </div>
  )
}

export default AppRoute
