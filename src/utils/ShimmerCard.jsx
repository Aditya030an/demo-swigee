import React from 'react'

const ShimmerCard = () => {
  return (
    <>
    <div className=' flex flex-col'>

        <div className='border-2 border-gray-300 w-60 rounded-lg aspect-video bg-gray-300'>
        </div>
        <div className='border-2 border-gray-100 w-52 h-7 rounded-lg aspect-video bg-gray-200 shadow-2xl'>
        </div>
        <div className='border-2 border-gray-100 w-28 h-7 rounded-lg aspect-video bg-gray-200'>
        </div>
        <div className='border-2 border-gray-100 w-20 h-7 rounded-lg aspect-video bg-gray-200'>
        </div>
    </div>
    </>
  )
}

export default ShimmerCard;
