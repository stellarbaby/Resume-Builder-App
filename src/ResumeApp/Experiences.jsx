import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Experiences = () => {

  const navigate = useNavigate();

  const [experiences, setExperiences] = useState({
    employer: '',
    jobTitle: '',
    city: '',
    state:'',
    startDate: '',
    endDate: ''
  });

  const handleChange = (e) => {
     setExperiences({
      ...experiences, [e.target.name]: e.target.value,
     });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      experiences.employer &&
      experiences.jobTitle &&
      experiences.city &&
      experiences.state
    ) {
      navigate('/skills');
    } else {
      alert('Please fill in all required fields');
    }
  };
  

  return (
    <div className='bg-gradient-to-r from-cyan-900 via-[#496267] to-[#0a4447] text-white h-[600px] w-[350px] sm:w-[1200px]'>
      
      <div>
      <button className='pl-4' onClick={() => navigate('/dashboard')}>
        DASHBOARD
        </button>
      </div>

<div className='pt-4 pl-2 sm:p-14'>
        <h1 className='text-2xl sm:text-6xl font-bold'>EXPERIENCES</h1>
        <h2 className='font-Ubuntu sm:text-2xl font-bold'>List your work experience, from the most recent to the oldest.</h2>

        <div>
          <p className='font-Ubuntu'>Feel free to use our pre-written examples.</p>
        </div>

 <form onSubmit={handleSubmit}>
<div>   
<div className='md:grid grid-cols-2 sm:pt-[40px]'>
        <div>
        <label htmlFor='employer'>Name of Company</label>
        <input 
        className='text-[#0a4447] w-80 sm:w-[500px] border border-[#0a4447] p-2 rounded'
        placeholder='Beloxxi Company'
        name='employer'
        id='employer'
        type='text'
        value={experiences.employer}
        onChange={handleChange}
        required
        />
        </div>

        <div>
        <label htmlFor='jobTitle'>Job title</label>
        <input 
        className='text-[#0a4447] w-80 sm:w-[500px] border border-[#0a4447] p-2 rounded'
        placeholder='Legal counsel'
        type='text'
        name='jobTitle'
        id='jobTitle'
        required
        value={experiences.jobTitle}
        onChange={handleChange}
        />
        </div>
        </div>

         <div className='md:grid grid-cols-2 sm:pt-[20px]'>
        <div>
        <label htmlFor='city'>City</label>
        <div></div>
        <input 
        className='text-[#0a4447] w-80 sm:w-[500px] border border-[#0a4447] p-2 rounded'
        placeholder='Lagos'
        id='city'
        name='city'
        type='text'
        required
        value={experiences.city}
        onChange={handleChange}
        />
        </div>

        <div>
        <label htmlFor='state'>Job responsibilities</label>
        <div></div>
        <input 
        className='text-[#0a4447] w-80 sm:w-[500px] border border-[#0a4447] p-2 rounded'
        placeholder='Here, I am in charge of drafting legal documents.....'
        id='state'
        name='state'
        type='text'
        required
        value={experiences.state}
        onChange={handleChange}
        />
        </div>
        </div>

      <div className='md:grid grid-cols-2 sm:pt-[20px]'>
       <div>
        <label htmlFor='startDate'>Start Date</label>
        <input 
        className='text-[#0a4447] w-80 sm:w-[500px] border border-[#0a4447] p-2 rounded'
        placeholder='27/01/2012'
        type='date'
        id='startDate'
        name='startDate'
        value={experiences.startDate}
        onChange={handleChange}
        />
        </div>

        <div>
        <label htmlFor='endDate'>End Date</label>
        <input 
        type='date'
        id='endDate'
        name='endDate'
        className='text-[#0a4447] w-80 sm:w-[500px] border border-[#0a4447] p-2 rounded'
        placeholder='31/12/2020'
        value={experiences.endDate}
        onChange={handleChange}
        />
        </div>

       </div>
        
</div>
<div className='pl-24 sm:pt-6 sm:pl-[800px]'>
    <button className='rounded-[10px] p-[6px] bg-white m-2 text-[#0a4447] sm:text-1xl border border-slate-300 hover:border-slate-400'
        onClick={() => navigate('/education')}>Preview</button>
        <button className='rounded-[10px] p-[6px] bg-[#0a4447] m-2 text-white sm:text-1xl border border-slate-300 hover:border-slate-400'
        type='submit'>
          Next: Skills</button>
</div>
        
</form>
        </div>
        </div>

  )
}

export default Experiences