import { useEffect, useState } from "react";
import { Slider } from "../Utilities/Slider/Swiper";

const Home = () => {
  const [places, setPlaces] = useState([])

  useEffect(() => {
    fetch('http://localhost:5000/places')
      .then(res => res.json())
      .then(data => console.log(data))
  }, [])

  return (
    <div className="w-5/6 mx-auto border border-green-800 grid grid-cols-4">
      <div className="col-span-2 border border-blue-950">
        content here
      </div>
      <div className="col-span-2">
        <Slider></Slider>
      </div>
    </div>
  );
};

export default Home;