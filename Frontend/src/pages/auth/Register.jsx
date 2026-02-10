import Header from '@/components/Header/Header'
import React from 'react'
import RegisterForm from '../../components/Header/auth/RegisterForm'
function Register() {
  return (
    <div>
      <Header/>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <RegisterForm/>
      </div>
    </div>
  )
}

export default Register
