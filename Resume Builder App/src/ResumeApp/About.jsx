import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {
    const navigate = useNavigate()
    const handleLogin1 = () => {
        navigate('/')
    }

  return (
    <div>
  
<div className='p-10 sm:pb-16 bg-[#0a4447] text-white h-[580px] w-[400px] sm:w-[1200px] text-center'>

<h1 className='bg-[#ede2db] mt-4 text-2xl sm:text-4xl inline-block text-transparent bg-clip-text'>This is a project built with knowledge on HTML, CSS, TailwindCSS, JavaScript, React and React Router.</h1>
<h2 className='sm:pt-4 font-black sm:text-3xl bg-gradient-to-r from-[#8ef7ee] via-white to-[#baf1e9]
         inline-block text-transparent bg-clip-text'>It is a project given by my tutors in partial fulfillment of the requirements for the completion of Women In Defi Organization's Javascript Cohort 1.</h2>
    
    <div className='sm:text-2xl italic pt-[2px] sm:pt-[20px]'>
    <p>Cc:</p>
    <p>Koxy the Devrel</p>
    <p>Master Adekunle</p>
    <p>Ma'am Esther</p>
    <p>Vickish</p>
    <p>The Sarah Idahosa-The Founder of Women in DeFi</p>
    <p>Thank you all for the opportunity to be part of this great community.</p>
    </div>


    <button className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-white duration-300 rounded-[10px] text-[#0a4447] p-[6px] bg-white m-2 text-[#0a4447] sm:text-1xl border border-slate-300 hover:border-slate-400'
        onClick={handleLogin1}>Back to Home Page</button>
</div>
    </div>
  )
}

export default About