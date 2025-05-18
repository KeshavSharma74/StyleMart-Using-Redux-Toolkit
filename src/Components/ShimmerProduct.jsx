import React from 'react';

const ShimmerProduct = () => {
  return (
    <div className='flex animate-pulse gap-4'>
      {/* Image Placeholder */}
      <div className='w-1/2'>
        <div className='h-[400px] w-full bg-gray-300 rounded-xl'></div>
      </div>

      {/* Details Placeholder */}
      <div className='w-full space-y-4 p-4'>
        <div className='h-10 bg-gray-300 rounded w-3/4'></div>
        <div className='space-y-2'>
          <div className='h-4 bg-gray-300 rounded w-full'></div>
          <div className='h-4 bg-gray-300 rounded w-[90%]'></div>
          <div className='h-4 bg-gray-300 rounded w-[80%]'></div>
          <div className='h-4 bg-gray-300 rounded w-[70%]'></div>
        </div>
        <div className='h-8 bg-gray-300 rounded w-[120px]'></div>
        <div className='flex gap-2'>
          {[...Array(5)].map((_, index) => (
            <div key={index} className='h-5 w-5 bg-gray-300 rounded'></div>
          ))}
          <div className='h-5 w-12 bg-gray-300 rounded'></div>
        </div>
        <div className='h-10 bg-gray-300 rounded w-[150px]'></div>
      </div>
    </div>
  );
};

export default ShimmerProduct;
