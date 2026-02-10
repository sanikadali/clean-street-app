import Header from '@/components/Header/Header'
import React from 'react'
import LoginForm from '../../components/Header/auth/LoginForm'
function Login() {
  return (
    <div>
      <Header/>
       <div className="flex justify-center items-center h-[80vh] bg-gray-100">
        <LoginForm />
      </div>
      Login
    </div>
  )
}

export default Login
