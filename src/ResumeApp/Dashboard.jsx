import React from 'react'
import Navbar from './Navbar'
import { Outlet, useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Dashboard = () => {

  const navigate = useNavigate()
  const handleLogin1 = () => {
      navigate('/')
  }
  return (
    <div>
        <div>
            <Navbar> </Navbar>
        </div>

        <div> 
            <Outlet> </Outlet>
        </div>

      <div className='font-bold bg-gradient-to-r from-[#ede2db] via-white to-[#baf1e9] text-white h-[1450px] sm:h-[600px] w-[400px] sm:w-[1200px]'>
            
          <div className='text-center'>
        <h1 className='font-Ubuntu bg-[#0a4447] mt-4 sm:py-4 text-2xl sm:text-5xl inline-block text-transparent bg-clip-text'>Building a perfect resume has never been this easy!</h1>
        
        <h2 className='font-Ubuntu bg-[#0a4447] mt-4 text-2xl sm:pb-4 sm:text-4xl inline-block text-transparent bg-clip-text'> How would you like to build your Resume?</h2>
        
        </div>

        <div className='font-Ubuntu sm:pt-[10px] sm:text-2xl text-center grid grid-cols-1 md:grid-cols-4 sm:gap-[20px] font-bold'>
        
        <div className=''>
        <Link to='/personal'><h1 className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-[#085d60] duration-300 sm:inline-block bg-[#0a4447] text-white mt-[20px] sm:mt-[10px] px-6 py-2 rounded-md'>
        <img src="https://media.istockphoto.com/id/2151968482/photo/employment-verification-letter-hand-fills-out-a-document-formal-employment-contract-workplace.jpg?s=612x612&w=0&k=20&c=gvZz3Rkdm0WCL7-6msCDgBYAHcdXCgXxSfCWwcOqL88="/>
        Personal Info</h1></Link>
        </div>

        <div className=''>
        <Link to='/education'><h1 className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-[#085d60] duration-300 sm:inline-block bg-[#0a4447] text-white px-6 py-2 mt-[20px] sm:mt-[10px] rounded-md'>
        <img src='https://media.istockphoto.com/id/1009741942/photo/applicant-filing-in-company-application-form-document-applying-for-job-or-registering-claim.jpg?s=612x612&w=0&k=20&c=37M_CyPl4GE_TVgQs_AW9GnhBxX5e2nSC3dCRaYHd4Y='/>
        Your Education</h1></Link>
        </div>
        
    
        <div className=''>
        <Link to='/experiences'><h1 className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-[#085d60] duration-300 sm:inline-block bg-[#0a4447] text-white px-6 py-2 mt-[20px] sm:mt-[10px] rounded-md'>
        <img src='https://media.istockphoto.com/id/1481175643/photo/person-submitting-resume-to-interview-for-a-job-with-a-company-person-attending-a-job.jpg?s=612x612&w=0&k=20&c=a00RS7H5tZp4-ehJky8otQKsAv90b8PyuTWLA16pDew='/>
        Work Experiences</h1></Link>
        </div>
        
        <div className=''>
        <Link to='/skills'><h1 className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-[#085d60] duration-300 sm:inline-block bg-[#0a4447] text-white px-6 py-2 mt-[20px] sm:mt-[10px] rounded-md'>
        <img src='https://media.istockphoto.com/id/1761693929/photo/businesswoman-office-worker-working-using-laptop-and-mobile-phone-in-real-estate-accounting.jpg?s=612x612&w=0&k=20&c=0iryTZjReLoo6oF_hfktuEO_ugfAlPgEMPNl87Li0Kw='/>
        Your Skills</h1></Link>
        </div>
        
        </div>

        <div className='pt-2 sm:pt-8 text-center'>
         <h1 className='font-Ubuntu font-black text-3xl sm:text-6xl bg-gradient-to-r from-[#496267] via-[#085d60] to-[#baf1e9]
         inline-block text-transparent bg-clip-text'>Just Four Simple Steps</h1>
        </div>

        <div className='text-center pt-[10px] sm:pt-[20px]'>
        <button className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-[#085d60] duration-300 rounded-[10px] p-[6px] bg-[#0a4447] m-2 text-white sm:text-1xl border border-slate-300 hover:border-slate-400'
        onClick={handleLogin1}>Back to Home</button>
        </div>
 
        </div>

        </div>
  )
}

export default Dashboard