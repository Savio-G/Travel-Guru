// import { useEffect, useState } from "react";
// import { Slider } from "../Utilities/Slider/Swiper";
import { Link, useLoaderData } from "react-router-dom";
import Slider from "../Utilities/Slider/Swiper";
import HomeInfo from "./HomeInfo";
import { useContext } from "react";
import { BgProvider } from "../Layouts/Layout1";

const Home = () => {
  const loaderData = useLoaderData()
  const { bgImage } = useContext(BgProvider)

  return (
    <div className="grid grid-cols-4 p-[7rem] relative">
      <div className="col-span-2 text-white px-[5rem]">
        <h1 className="text-[5rem]">{bgImage.place_name}</h1>
        <p className="font-custom">{bgImage.destination_information}</p>
        <Link to={`/Booking/${bgImage?.id}`}>
          <button type="button" className="font-custom w-36 bg-yellow-300 mt-[1.5rem] hover:bg-orange-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm px-4 py-2 text-center mr-3 md:mr-0 text-black">Booking</button>
        </Link>
      </div>
      <div className="col-span-2">
        <Slider
          places={loaderData}
        ></Slider>
      </div>
    </div>
  );
};

export default Home;