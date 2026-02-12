import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../ui/button'

const Header = () => {
  return (
    <div className='sticky top-0 z-1 bg-white'>
      <nav className='flex justify-between items-center px-8 py-4 border-b'>
        <div className='text-[#f56551] font-bold text-2xl'>CleanStreet</div>
        <div className='flex gap-6'>
            <span className='nav_underline'><Link to="/dashboard">Dashboard</Link></span>
            <span className='nav_underline'>Report Issue</span>
            <span className='nav_underline'>View Complaints</span>
        </div>
        <div>
            <Link to="/login"><Button  className="px-6 py-3 text-lg mr-3 font-semibold text-white bg-[#f56551] rounded-full hover:bg-[#C9442A] hover:scale-110">Login</Button></Link>
            <Link to="/register"><Button  className="px-6 py-3 text-lg font-semibold text-white bg-[#f56551] rounded-full hover:bg-[#C9442A] hover:scale-110">Register</Button></Link>
        </div>
      </nav>
    </div>
  )
}

export default Header
