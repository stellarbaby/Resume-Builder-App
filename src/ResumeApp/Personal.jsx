import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Personal = () => {
  const navigate = useNavigate();

  const [personalData, setPersonalData] = useState({
    firstName: '',
    surName: '',
    address: '',
    city: '',
    gender: '',
    emailAddress: '',
    phoneNumber: '',
  });

  const handleChange = (e) => {
    setPersonalData({
      ...personalData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      personalData.firstName &&
      personalData.surName &&
      personalData.address &&
      personalData.city &&
      personalData.emailAddress &&
      personalData.phoneNumber
    ) {
      navigate('/education');
    } else {
      alert('Please fill in all required fields');
    }
  };

  return (
    <div className='text-[#0a4447] font-bold h-[620px] w-[350px] sm:w-[1200px]'>
      <div>
        <button className='pl-4' onClick={() => navigate('/dashboard')}>
          DASHBOARD
        </button>
      </div>

      <div className='pl-4 sm:pl-14 pt-2 sm:pt-24'>
        <h1 className='font-Ubuntu text-2xl sm:text-5xl font-bold'>COMPLETE YOUR RESUME HEADING</h1>
        <h2 className='font-Ubuntu text-1xl sm:text-4xl font-bold'>
          Employers will use this information to contact you.
        </h2>

        <form onSubmit={handleSubmit}>
          <div className='md:grid grid-cols-2 sm:pt-[20px]'>
            <div>
              <label htmlFor='firstName'>First Name</label>
              <input
                className='text-[#0a4447] w-80 sm:w-[500px] border border-[#0a4447] p-2 rounded'
                type='text'
                name='firstName'
                id='firstName'
                placeholder='Stellar'
                value={personalData.firstName}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label htmlFor='surName'>Surname</label>
              <div>
              <input
                className='text-[#0a4447] w-80 sm:w-[500px] border border-[#0a4447] p-2 rounded'
                placeholder='Bhadmus'
                type='text'
                name='surName'
                id='surName'
                value={personalData.surName}
                onChange={handleChange}
                required
              />
              </div>
            </div>
          </div>

          <div className='sm:pt-[20px]'>
            <label htmlFor='address'>Address</label>
              <div>
                <input
              className='text-[#0a4447] w-80 sm:w-[1075px] border border-[#0a4447] p-2 rounded'
              placeholder='Block 10, Mirabel Street, Texas, Lagos State.'
              value={personalData.address}
              type='text'
              name='address'
              id='address'
              onChange={handleChange}
              required
            />
            </div>
          </div>

          <div className='md:grid grid-cols-2 sm:pt-[20px]'>
            <div>
              <label htmlFor='city'>Nationality</label>
              <div>
              <input
                className='text-[#0a4447] w-80 sm:w-[500px] border border-[#0a4447] p-2 rounded'
                placeholder='Nigeria'
                value={personalData.city}
                type='text'
                name='city'
                id='city'
                onChange={handleChange}
                required
              />
              </div>
            </div>

            <div>
            <label htmlFor='gender'>Gender</label>
           <div>
           <select
              className='text-[#0a4447] w-80 sm:w-[500px] border border-[#0a4447] p-2 rounded'
                id='gender' 
              name='gender'
              value={personalData.gender}
               onChange={handleChange}
                  >
            <option value='other'>Select</option>
            <option value='female'>Female</option>
              <option value='male'>Male</option>
              </select>
             </div>
            </div>
          </div>

          <div className='md:grid grid-cols-2 sm:pt-[20px]'>
            <div>
              <label htmlFor='emailAddress'>Email address</label>
              <div>
              <input
                className='text-[#0a4447] w-80 sm:w-[500px] border border-[#0a4447] p-2 rounded'
                placeholder=' example@gmail.com'
                type='text'
                name='emailAddress'
                id='emailAddress'
                required
                value={personalData.emailAddress}
                onChange={handleChange}
              />
              </div>
            </div>

            <div>
              <label htmlFor='phoneNumber'>Phone Number</label>
              <div>
              <input
                className='text-[#0a4447] w-80 sm:w-[500px] border border-[#0a4447] p-2 rounded'
                placeholder=' +234 012 345 6789'
                type='number'
                name='phoneNumber'
                id='phoneNumber'
                required
                value={personalData.phoneNumber}
                onChange={handleChange}
              />
              </div>
            </div>
          </div>

          <div className='pl-[85px] sm:pt-4 sm:pl-[840px]'>
            <button
              className='rounded-[10px] p-[6px] bg-white m-2 text-[#0a4447] sm:text-1xl border border-slate-300 hover:border-slate-400'
              onClick={() => navigate('/dashboard')}
            >
              Preview
            </button>
            <button
              className='rounded-[10px] p-[8px] bg-[#0a4447] m-2 text-white sm:text-1xl border border-slate-300 hover:border-slate-400'
              type='submit'
            >
              Next: Education
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Personal;
