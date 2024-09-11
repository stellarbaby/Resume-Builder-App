
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Skills = () => {
  const navigate = useNavigate();
  
   const [skills, setSkills] = useState({
       skill1: '',
       level1: '',
       skill2: '',
       level2: '',
       skill3: '',
       level3: '',
   });

   const handleChange = (e) => {
    setSkills({
      ...skills, 
      [e.target.name]: e.target.value,
    });
   };

    const handleSubmit = (e) => {
      e.preventDefault();
      if (
        skills.skill1 &&
        skills.level1     
      
      ) {
        alert('Congratulations, you just created the perfect resume for yourself....'), navigate ('/about');
      } else {
        alert('Please fill in all required fields');
      }
    };

return (
  <div className='bg-gradient-to-r from-cyan-900 via-[#496267] to-[#0a4447] text-white h-[600px] w-[350px] sm:w-[1200px]'>
    
    <div>
  <button className='pl-4' onClick={() => navigate('/dashboard')}>
    DASHBOARD</button>
</div>

    <div className='pt-2 pl-2 sm:p-16'>
      <h1 className='text-2xl sm:text-6xl font-bold'>SKILLS</h1>
      <h2 className='text-1xl sm:text-4xl font-bold'>Highlight 6-8 of your top skills.</h2>

    <form onSubmit={handleSubmit}>
     <div className='md:grid grid-cols-2 pt-4 sm:pt-[40px]'>
     <div>
     <label htmlFor='skill1'>Skill</label>
     <div></div>
      <input 
      type='text'
      name='skill1'
      id='skill1'
      value={skills.skill1}
      required
      className='text-[#0a4447] w-80 sm:w-[500px] border border-[#0a4447] p-2 rounded'
      placeholder='e.g. Legal Research'
      onChange={handleChange}
      />
      </div>

      <div>
      <label htmlFor='level1'>Level</label>
      <div></div>
      <input 
      type='number'
      name='level1'
      id='level1'
      value={skills.level1}
      required
      className='text-[#0a4447] w-80 sm:w-[500px] border border-[#0a4447] p-2 rounded'
      placeholder='Select your skill level'
      onChange={handleChange}
      />
      </div>
     </div>      

       <div className='md:grid grid-cols-2 sm:pt-[20px]'>
       <div>
       <label htmlFor='skill2'>Skill</label>
       <div></div>
      <input 
      type='text'
      name='skill2'
      id='skill2'
      value={skills.skill2}
      className='text-[#0a4447] w-80 sm:w-[500px] border border-[#0a4447] p-2 rounded'
      placeholder='e.g. Product Management'
      onChange={handleChange}
      />
      </div>

      <div>
      <label htmlFor='level2'>Level</label>
      <div></div>
      <input 
      type='number'
      name='level2'
      id='level2'
      value={skills.level2}
      className='text-[#0a4447] w-80 sm:w-[500px] border border-[#0a4447] p-2 rounded'
      placeholder='Select your skill level'
      onChange={handleChange}
      />
      </div>
       </div>
      
      <div className='md:grid grid-cols-2 sm:pt-[20px]'>
      <div>
      <label htmlFor='skill3'>Skill</label>
      <div></div>
      <input 
      type='text'
      name='skill3'
      id='skill3'
      value={skills.skill3}
      className='text-[#0a4447] w-80 sm:w-[500px] border border-[#0a4447] p-2 rounded'
      placeholder='e.g. HTML'
      onChange={handleChange}
      />
      </div>

      <div>
      <label htmlFor='level3'>Add more skills</label>
      <div></div>
      <input 
      type='text'
      name='level3'
      id='level3'
      value={skills.level3}
      className='text-[#0a4447] w-80 sm:w-[500px] border border-[#0a4447] p-2 rounded'
      placeholder='+ Add more skills.......'
      onChange={handleChange}
      />
     </div>

     

</div>
<div className='pl-20 pt-8 sm:pt-12 sm:pl-[800px]'>
  <button className='rounded-[10px] p-[6px] bg-white m-2 text-[#0a4447] sm:text-1xl border border-slate-300 hover:border-slate-400'
      onClick={() => navigate ('/experiences')}>
        Preview</button>
      <button className='rounded-[10px] p-[6px] bg-[#0a4447] m-2 text-white sm:text-1xl border border-slate-300 hover:border-slate-400'
      type='submit'>
        Submit & Download</button>
</div>


</form>
      </div>
      </div>

  )
}

export default Skills