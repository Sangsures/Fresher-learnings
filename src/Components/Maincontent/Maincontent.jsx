import React from 'react';

const Maincontent = () => {
  return (
    <div>
      <h2 className='text-4xl dark:text-black font-bold text-center mt-10 bg-[#EBEBEB]'>
        Cloud Monitoring
      </h2>
      <div className='flex justify-center items-center mt-20 bg-[#EBEBEB]'>
        <form className='max-w-[400px] w-full mx-auto rounded-lg bg-white p-8 px-8'>
          <div className='flex flex-col text-gray-950 py-2'>
            <label>Access Key</label>
            <input
              className='rounded-lg bg-gray mt-2 p-2 border border-black focus:bg-white focus:outline-none'
              type='text'
            />
          </div>
          <div className='flex flex-col text-gray-900 py-2'>
            <label>Secret Key</label>
            <input
              className='p-2 rounded-lg bg-gray mt-2 border border-black  focus:bg-white focus:outline-none'
              type='password'
            />
          </div>
          <div className='flex justify-between text-gray-900 py-2'></div>
          <button className='w-full my-5 py-2 bg-[#D89E8A] shadow-lg shadow-[#D89E8A] hover:shadow-[#D89E8A] text-white font-semibold rounded-lg'>
            Run Assessment
          </button>
        </form>
      </div>
    </div>
  );
};

export default Maincontent;
