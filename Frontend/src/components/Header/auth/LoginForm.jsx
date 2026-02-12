import React, { useState } from 'react'

function LoginForm() {

  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [error,setError]=useState("");
  const [emailError, setEmailError] = useState("");
  
  const handleSubmit=(e)=>{
    e.preventDefault();
    if(!email || !password){
      setError("Please fill all fields");
      return;
    }
    setError("");                 // Clear error if validation passes
  }

  return (
    <div>
      <div className="bg-white p-6 rounded-2xl shadow w-[450px] h-[400px]">
        <h2 className="text-center text-2xl font-semibold mb-4">
        Login to CleanStreet
      </h2>
    {error && (<p className="text-red-500 text-sm mb-4 text-center">{error}</p>)}
      <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className="block text-lg font-medium mb-1">Email</label>
        <input type="email" onChange={(e) => {
          const value = e.target.value;
          setEmail(value);
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailRegex.test(value)) {
          setEmailError("Invalid email format");
          } else {
          setEmailError("");
          }}}  className="w-full border hover:border-black px-3 py-2 rounded-lg mt-1"placeholder="Enter your email"/>
          {emailError && 
        (
          <p className="text-red-500 text-sm mt-1">{emailError}</p>
        )}
      </div>

      <div className="mb-[30px]">
        <label className="block text-lg font-medium mb-1">Password</label>
        <input type="password" onChange={(e) => setPassword(e.target.value)}className="w-full hover:border-black border px-3 py-2 rounded-lg mt-1"placeholder="Enter your password"/>
      </div>
      <button className="w-full px-6 py-3 text-lg mr-3 hover:scale-105 font-semibold text-white transition bg-[#f56551] rounded-full shadow-lg hover:bg-[#C9442A] transition-duration-200" >Login</button>
      </form>

      <p className="text-center text-lg mt-3">Don’t have an account?{" "}
        <a href="/register" className="text-blue-600 hover:underline">Register</a>
      </p>
      </div>
      </div>
  )
}

export default LoginForm