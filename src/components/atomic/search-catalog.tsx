import React from 'react';

const SearchCatalog: React.FC = () => {
  return (
    <div className='w-1/2'>
      <input className='py-1 ps-3 rounded-xl w-full bg-transparent border-2 border-premium outline-none placeholder-premium' placeholder='search'/>
    </div>
  );
};

export default SearchCatalog;
