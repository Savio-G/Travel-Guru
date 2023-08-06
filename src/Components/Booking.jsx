import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Booking = () => {
  const data = useLoaderData()
  console.log(data)

  return (
    <div className='grid grid-cols-4 w-[80vw] mx-auto mt-28'>

      <div className='col-span-2 text-white'>
        <h1 className='text-[5rem]'>
          {data.place_name}
        </h1>
        <p className='font-custom'>{data.place_description}</p>
      </div>
      <div className='col-span-2 border border-red-800'>

      </div>
    </div>
  );
};

export default Booking;