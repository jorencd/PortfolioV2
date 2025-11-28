import React from 'react'
import { Icon } from '@iconify/react';

function WorkNav() {
  return (
    <div className='mt-20 mb-5 gap-5 flex items-center justify-center'>
        <div className='py-1 px-4 border flex border-neutral-300 rounded-full text-neutral-600 gap-2 cursor-pointer items-center'>
            <Icon icon="lets-icons:filter" width="17" height="17" />
            <p className='hidden md:block lg:block'>Filter</p>
        </div>
        <div className='w-3/4 text-neutral-600 relative'>
        <input 
            type="text" 
            placeholder="Search works..." 
            className='w-full bg-neutral-100 px-10 py-2 rounded-full'  
        />
        <Icon 
            icon="proicons:search" 
            width="20" 
            height="20" 
            className='absolute left-3 top-1/2 transform -translate-y-1/2'
        />
    </div>
    </div>
  )
}

export default WorkNav