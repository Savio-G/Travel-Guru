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
      {/* Booking form div */}
      <div className='col-span-2'>


        <form className='bg-white p-[2rem] w-[75%] mx-auto rounded-[10px] '>
          <div className="mb-6">
            <label for="Place" className="block mb-2 text-sm font-medium text-black dark:text-white font-custom">Origin</label>
            <input type="text" id="place" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light font-custom font-extrabold " required />
          </div>
          <div className="mb-6">
            <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white font-custom">Destination</label>
            <input type="password" id="password" className="font-custom shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light font-extrabold" required />
          </div>
          <button type="submit" className="text-black bg-yellow-300 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 font-custom block w-[100%] ">Start Booking</button>
        </form>


      </div>
    </div>
  );
};

export default Booking;