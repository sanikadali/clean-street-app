import Header from '@/components/Header/Header'
import React from 'react'
import RegisterForm from '../../components/Header/Auth/RegisterForm'
function Register() {
  return (
    <div>
      <Header/>
      <div className=" py-10 bg-[#fdecea] flex items-center justify-center px-5">
      <RegisterForm/>
      </div>
    </div>
  )
}

export default Register
