import React, { useContext, useEffect, useRef, useState } from 'react';
import { Navigation } from "swiper/modules";
import { BsArrowRight, BsArrowLeft } from 'react-icons/bs';

import { Swiper, SwiperSlide } from "swiper/react";
import './slider.css'
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { BgProvider } from '../../Layouts/Layout1';




const Slider = ({ places }) => {
  const swiperRef = useRef();
  const [index, setIndex] = useState(0)
  const { bgImage, setbgImage } = useContext(BgProvider)
  useEffect(() => {
    setbgImage(places[index])
  }, [index])
  return (
    <>
      <Swiper
        // install Swiper modules
        modules={[Navigation,]}
        navigation
        centeredSlides={true}
        loop={true}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        className='box-border'
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          480: {
            slidesPerView: 2,
            spaceBetween: 10
          },
          760: {
            slidesPerView: 2,
            spaceBetween: 10
          }

        }}
        onSlideChange={(swiper) => setIndex(swiper.realIndex)}


      >
        {places.map(place => <SwiperSlide key={place.id} className={`rounded-xl overflow-hidden ${index === place.id - 1 ? "border-[4px] border-yellow-300" : "border border-0 "}`}><div className='h-[40vh]'>

          <img className='h-[100%] w-[100%] object-cover absolute bottom-0' src={place.image} alt="" />
        </div>
          <h1 className='text-white absolute bottom-4 left-4 text-4xl'>{place.place_name}</h1>
        </SwiperSlide>)}

      </Swiper>
      <button className='prev-btn bg-yellow-300 p-4 rounded-[50%]' onClick={() => swiperRef.current.slidePrev()}>
        <BsArrowLeft></BsArrowLeft>
      </button>
      <button className='next-btn bg-yellow-300 p-4 rounded-[50%]' onClick={() => swiperRef.current.slideNext()}>
        <BsArrowRight></BsArrowRight>
      </button>
    </>
  );
};

export default Slider;