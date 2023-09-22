import React from 'react';

export default function Page() {
  return (
    <main id='contact' className='contact relative w-full h-[100vh] flex justify-center'>
      <div className='absolute w-full h-full bg-dark'>
        <div className='absolute w-1/2 h-full left-0 bg-[#3d87c7]'></div>  {/* flex items-center justify-center */}
        <div className='absolute flex items-center justify-center w-full h-full'>
          <div className='absolute w-[75vw] h-[70vh] rounded-[5px] bg-dark'>

            <div className='absolute w-1/2 h-full right-0 bg-[#3d87c7]'></div>

          </div>
        </div>

      </div>
    </main>
  )
};
