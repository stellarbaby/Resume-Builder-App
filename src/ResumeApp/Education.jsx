import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Education = () => {

  const navigate = useNavigate();

  const [education, setEducation] = useState({
    schoolName: '',
    state: '',
    city: '',
    nationality: '',
    fieldOfStudy: '',
    degree: '',
  });

  const handleChange = (e) => {
    setEducation({
      ...education,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      education.schoolName &&
      education.state &&
      education.city &&
      education.nationality &&
      education.fieldOfStudy &&
      education.degree
    ) {
      navigate ('/experiences')
    } else {
      alert ('Please fill in all required fields');
    }
  };

  return (
    <div className='bg-gradient-to-r from-cyan-900 via-[#496267] to-[#0a4447] text-white h-[600px] w-[350px] sm:w-[1200px]'>
      
      <div>
        <button className='pl-4' onClick={() => navigate('/dashboard')}>
        DASHBOARD
        </button>
      </div>

<div className='pt-6 pl-2 sm:p-16'>
        <h1 className='text-2xl sm:text-6xl font-bold'>EDUCATION</h1>
        <h2 className='font-Ubuntu text-1xl sm:text-4xl font-bold'>Add information about your educational background.</h2>


<form onSubmit={handleSubmit}>
<div className='md:grid grid-cols-2 sm:pt-[40px]'> 
        <div>
        <label htmlFor='schoolName'>Institution name</label>
        <input 
        className='text-[#0a4447] w-80 sm:w-[500px] border border-[#0a4447] p-2 rounded'
        placeholder='Harvard University'
        type='text'
        name='schoolName'
        id='schoolName'
        value={education.schoolName}
        onChange={handleChange}
        required
        />
        </div>

        <div>
        <label htmlFor='state'>State</label>
        <div></div>
        <input 
        className='text-[#0a4447] w-80 sm:w-[500px] border border-[#0a4447] p-2 rounded'
        placeholder='California'
        type='text'
        name='state'
        id='state'
        value={education.state}
        onChange={handleChange}
        required
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
        type='text'
        name='city'
        id='city'
        value={education.city}
        onChange={handleChange}
        required
        />
        </div>

        <div>
        <label htmlFor='nationality'>Country</label>
        <input 
        className='text-[#0a4447] w-80 sm:w-[500px] border border-[#0a4447] p-2 rounded'
        placeholder='Nigeria'
        type='text'
        name='nationality'
        id='nationality'
        value={education.nationality}
        onChange={handleChange}
        required
        />
        </div>
        </div>
        
        <div className='md:grid grid-cols-2 sm:pt-[20px]'>
        <div>
        <label htmlFor='fieldOfStudy'>Field of Study</label>
        <input 
        className='text-[#0a4447] w-80 sm:w-[500px] border border-[#0a4447] p-2 rounded'
        placeholder='Law'
        type='text'
        name='fieldOfStudy'
        id='fieldOfStudy'
        value={education.fieldOfStudy}
        onChange={handleChange}
        required
        />
        </div>

        <div>
        <label htmlFor='degree'>Honours</label>
        <input 
        className='text-[#0a4447] w-80 sm:w-[500px] border border-[#0a4447] p-2 rounded'
        placeholder='LL.B Honors'
        name='degree'
        id='degree'
        value={education.degree}
        required
        onChange={handleChange}
        />
        </div>
        
        </div>
        
        <div className='pl-20 pt-4 sm:pt-8 sm:pl-[800px]'>
    <button className='rounded-[10px] p-[6px] bg-white m-2 text-[#0a4447] sm:text-1xl border border-slate-300 hover:border-slate-400'
        onClick={() => navigate ('/personal')}>
          Preview</button>

   <button className='rounded-[10px] p-[6px] bg-[#0a4447] m-2 text-white sm:text-1xl border border-slate-300 hover:border-slate-400'
        type='submit'> Next: Work History</button>
</div>

</form>
        </div> 
  
        </div>

  )
}

export default Education;