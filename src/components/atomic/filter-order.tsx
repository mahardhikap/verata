import React from 'react'

const FilterOrder:React.FC = () => {
  return (
    <div className='bg-premium rounded-xl absolute right-0 -bottom-20 z-10 w-20 overflow-hidden'>
      <div className='flex flex-col text-white'>
        <div className='text-center cursor-pointer hover:bg-second py-1'>A-Z</div>
        <div className='text-center cursor-pointer hover:bg-second py-1'>Z-A</div>
      </div>
    </div>
  )
}

export default FilterOrder
