import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Register from './pages/auth/Register'
import Login from './pages/auth/Login'
import Home from './pages/Home'

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
