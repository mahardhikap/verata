import React from 'react';

interface SearchCatalogProps {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

const SearchCatalog: React.FC<SearchCatalogProps> = ({ onChange, onKeyDown }) => {
  return (
    <div className='w-full'>
      <input
        className='py-1 ps-3 rounded-xl w-full bg-transparent border-2 border-premium outline-none placeholder-premium text-sm'
        placeholder='search...'
        onChange={onChange}
        onKeyDown={onKeyDown}
      />
    </div>
  );
};

export default SearchCatalog;