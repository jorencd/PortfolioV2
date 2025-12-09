import React from 'react';
import { Icon } from '@iconify/react';

function WorkNav({ onSearch, searchQuery }) {
  const handleSearchChange = (e) => {
    onSearch(e.target.value);
  };

  return (
    <div className='mt-20 mb-5 gap-5 flex items-center justify-center'>
      <div className='w-3/4 text-neutral-600 relative'>
        <input 
          type="text" 
          placeholder="Search works..." 
          className='w-full bg-neutral-100 px-10 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-neutral-300 transition-all'  
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <Icon 
          icon="proicons:search" 
          width="20" 
          height="20" 
          className='absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400'
        />
        {searchQuery && (
          <button 
            onClick={() => onSearch('')}
            className='absolute right-3 top-1/2 transform -translate-y-1/2 text-neutral-400 hover:text-neutral-600'
          >
            <Icon icon="mdi:close" width="20" height="20" />
          </button>
        )}
      </div>
    </div>
  );
}

export default WorkNav;