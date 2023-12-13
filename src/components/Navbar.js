import React from 'react';

const Navbar = () => {
    return (
      
        <div class="flex  flex-row justify-end border-b-2  h-[70px]  pr-11 py-2 gap-2">
            <div className='flex flex-col '><span className='font-medium text-lg'>Anitha Dharavth </span><span className='text-[#90A0B7]'>anitha.dharavath@gmail.com</span></div><div className=' flex items-center '><img src='/user.png' width="40px" height="40px" alt='user' className='rounded-full'></img></div>
 
</div>
    );
};

export default Navbar; 