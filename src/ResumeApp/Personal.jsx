import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Personal = () => {
  const navigate = useNavigate();

  const [personalData, setPersonalData] = useState({
    firstName: '',
    surName: '',
    address: '',
    city: '',
    country: '',
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
      personalData.country &&
      personalData.emailAddress &&
      personalData.phoneNumber
    ) {
      navigate('/education');
    } else {
      alert('Please fill in all required fields');
    }
  };

  return (
    <div className='bg-gradient-to-r from-cyan-900 via-[#496267] to-[#0a4447] text-white h-[620px] w-[350px] sm:w-[1200px]'>
      <div>
        <button className='pl-4' onClick={() => navigate('/dashboard')}>
          DASHBOARD
        </button>
      </div>

      <div className='pl-4 sm:pl-14 sm:pt-10'>
        <h1 className='text-1xl sm:text-5xl font-bold'>COMPLETE YOUR RESUME HEADING</h1>
        <h2 className='text-1xl sm:text-4xl font-bold'>
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
                placeholder='e.g. Stellar'
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
                placeholder='e.g. Oluwatobiloba'
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
              placeholder='e.g. Block 10, Adeyemi Street, Ikeja, Lagos State.'
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
                placeholder='e.g. Nigeria'
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
              <label htmlFor='country'>Gender</label>
              <div>
              <input
                className='text-[#0a4447] w-80 sm:w-[500px] border border-[#0a4447] p-2 rounded'
                placeholder='e.g. Female'
                value={personalData.country}
                type='text'
                name='country'
                id='country'
                onChange={handleChange}
                required
              />
              </div>
            </div>
          </div>

          <div className='md:grid grid-cols-2 sm:pt-[20px]'>
            <div>
              <label htmlFor='emailAddress'>Email address</label>
              <div>
              <input
                className='text-[#0a4447] w-80 sm:w-[500px] border border-[#0a4447] p-2 rounded'
                placeholder='e.g. stellarcryptos@gmail.com'
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
                placeholder='e.g. +2349040396645'
                type='text'
                name='phoneNumber'
                id='phoneNumber'
                required
                value={personalData.phoneNumber}
                onChange={handleChange}
              />
              </div>
            </div>
          </div>

          <div className='pl-24 sm:pt-4 sm:pl-[900px]'>
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
