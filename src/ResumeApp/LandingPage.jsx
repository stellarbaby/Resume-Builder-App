import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Navbar from './Navbar'

   const LandingPage = () => {
    
    const navigate = useNavigate()
    const handleLogin = () => {
        navigate('/dashboard')
    }


  return (
    <div className='p-3'>

           <div>
            <Navbar> </Navbar>
        </div>

        <div> 
            <Outlet> </Outlet>
        </div>


    <div className='sm:p-16 bg-gradient-to-r from-[#e6e5e9] via-white to-[#ede2db] text-white sm:h-[550px] w-[400px] sm:w-[1200px] sm:pt-2 text-center sm:flex flex-row font-sans md:font-serif'>

       <img className='pl-10 pt-2 sm:pt-4 sm:pl-1' src='https://assets.myperfectcv.co.uk/blobimages/mpintl-lp/muk/images/cv.png'/>
        
        <div className='sm:grid-cols-1'>
        <h1 className='font-Ubuntu text-[#496267] sm:pt-[20px] sm:pb-4 pt-1 font-black text-3xl sm:text-6xl '>
        Resume <span className='text-blue-900'>Builder</span> <span className='text-cyan-700'>App</span></h1>

        <h1 className='font-Ubuntu pl-2 text-[#496267] pt- mt-4 sm:pb-4 sm:text-4xl sm:pt-4 sm:text-2xl font-thick'>In today's era, every one of us wishes to get hired by top MNCs. This is however only achievable and possible when you have a strong and unique resume.</h1>
        
        <h1 className='font-Ubuntu font-black pt-2 text-2xl sm:text-4xl bg-gradient-to-r from-[#93c5fd] via-[#496267] to-[#93c5fd] sm:pb-4
         inline-block text-transparent bg-clip-text'>Build your perfect Resume here.....</h1>

        
        <div className='pb-4'>        
            <button className='font-Ubuntu transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-[#496267] duration-300 rounded-[18px] text-white bg-[#0a4447] active:bg-[#baf1e9] mt-8 text-1xl p-4 sm:p-4 sm:text-2xl'
        onClick={handleLogin}>Create My Resume</button>
         </div>

        </div>
        </div>

        </div>
    )
}

export default LandingPage