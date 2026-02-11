import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../ui/button'
function Header() {
  return (
    <div>
      <nav className='flex justify-between items-center px-8 py-4 border-b'>
        <div className='text-[#f56551] font-bold text-2xl'>CleanStreet</div>
        <div className='flex gap-6'>
            <span className='nav_underline'>Dashboard</span>
            <span className='nav_underline'>Report Issue</span>
            <span className='nav_underline'>View Complaints</span>
        </div>
        <div>
            <Link to="/login"><Button  className="px-6 py-3 text-lg mr-3 font-semibold text-white transition bg-[#f56551] rounded-full shadow-lg hover:bg-blue-700 transition-duration-200">Login</Button></Link>
            <Link to="/register"><Button  className="px-6 py-3 text-lg font-semibold text-white transition bg-[#f56551] rounded-full shadow-lg hover:bg-blue-700 transition-duration-200">Register</Button></Link>
        </div>
      </nav>
    </div>

  )
}

export default Header