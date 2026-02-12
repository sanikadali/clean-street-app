import Header from '@/components/Header/Header'
import React from 'react'
import LoginForm from '../../components/Header/Auth/LoginForm'
function Login() {
  return (
    <div>
      <Header/>
       <div className="flex justify-center items-center pb-[250px] pt-[120px] bg-[#fdecea]">
        <LoginForm />
      </div>
    </div>
  )
}

export default Login
