import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
    
    <div className='bg-[#0a4447] h-12 w-[400px] sm:w-[1200px] sm:h-14 text-white p-3 sm:px-24 py-5 font-bold flex space-x-6'>
      <h1 className='text-[#ede2db] text-[16px] sm:text-2xl'>RESUMEBUILDER</h1>
        <Link to='/'><h1 className='sm:pl-[600px]'>Home</h1></Link>
        <Link to='/dashboard'><h1 className='sm:pl-[10px]'>Dashboard</h1></Link>
        <Link to='/about'><h1 className='sm:pl-2'>About</h1></Link>
        </div>


        
    </div>


)
}

export default Navbar