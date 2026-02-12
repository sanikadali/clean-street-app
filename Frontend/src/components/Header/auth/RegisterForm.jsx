import { Button } from '@/components/ui/button'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function RegisterForm() {
  const [name,setName]=useState("");
  const [username,setUsername]=useState("");
  const [email,setEmail]=useState("");
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [emailError, setEmailError] = useState("");
const handleSubmit=(e)=>{
  e.preventDefault();
   if (!name || !username || !email || !password) {
      setError("Please fill in all required fields");
      return;
    }
    
    setError("");
     console.log("Validated Register Data");
}

  return (
    <div className="w-full max-w-md bg-white rounded-2xl shadow-md p-6">
      <h2 className="text-2xl font-bold text-center mb-6">Register for CleanStreet</h2>
      {error && (
      <p className="text-red-500 text-sm mb-4 text-center">{error}</p>
      )}
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label className="block text-lg font-medium mb-1">Full Name</label>
        <input type="text" placeholder="Enter your full name" value={name} onChange={(e) => setName(e.target.value)} className="w-full hover:border-black px-4 py-2 border rounded-lg"/>
      </div>

      <div className="mb-4">
        <label className="block text-lg font-medium mb-1">Username</label>
        <input type="text" placeholder="Choose a username"value={username} onChange={(e) => setUsername(e.target.value)} className="w-full hover:border-black px-4 py-2 border rounded-lg"/>
      </div>

      <div className="mb-4">
        <label className="block text-lg font-medium mb-1"> Email</label>
        <input type="email" placeholder="Enter your email"value={email} 
        onChange={(e) => {
          const value = e.target.value;
          setEmail(value);
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailRegex.test(value)) {
          setEmailError("Invalid email format");
          } else {
          setEmailError("");
          }}} 
        className="w-full hover:border-black px-4 py-2 border rounded-lg"/>
        {emailError && 
        (
          <p className="text-red-500 text-sm mt-1">{emailError}</p>
        )}
      </div>

      <div className="mb-4">
        <label className="block text-lg font-medium mb-1">Phone Number (Optional)</label>
        <input type="tel" placeholder="Enter your phone number"value={phone} 
        onChange={(e) => {
          const value = e.target.value;
          if (!/^\d*$/.test(value)) {
            setPhoneError("Only digits are allowed");
            return;
            }
             if (value.length > 10) {
            setPhoneError("Phone number must be 10 digits");
            return;
            }
            setPhoneError("");
            setPhone(value);
            }} 
            className="w-full hover:border-black px-4 py-2 border rounded-lg"/>
            {phoneError && (
  <p className="text-red-500 text-sm mt-1">{phoneError}</p>
            )}
      </div>

      <div className="mb-6">
        <label className="block text-lg font-medium mb-1">Password</label>
        <input type="password" placeholder="Create a password"value={password} onChange={(e) => setPassword(e.target.value)} className="w-full hover:border-black px-4 py-2 border rounded-lg"/>
      </div>

      <button className="w-full px-6 py-3 text-lg hover:scale-105 mr-3 font-semibold text-white transition bg-[#f56551] rounded-full shadow-lg hover:bg-[#C9442A] transition-duration-200">Register</button>
    </form>

      <p className="text-center text-lg mt-4">Already have an account?{" "}
        <Link to="/login" className="text-blue-600 font-medium hover:underline">Login</Link>
      </p>
    </div>
  )
}

export default RegisterForm