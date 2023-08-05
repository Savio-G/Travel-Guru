// import { useEffect, useState } from "react";
// import { Slider } from "../Utilities/Slider/Swiper";
import { useLoaderData } from "react-router-dom";
import Slider from "../Utilities/Slider/Swiper";
import HomeInfo from "./HomeInfo";

const Home = () => {
  const loaderData = useLoaderData()
  return (
    <>
      {/* {
        places.map(place => <HomeInfo
          key={place.id}
          place={place}
        ></HomeInfo>)
      } */}
      <Slider
        places={loaderData}
      ></Slider>
    </>
  );
};

export default Home;