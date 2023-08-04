import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import './slider.css'


import { Navigation } from 'swiper/modules';

export const Slider = () => {

  return (
    <>
      <Swiper spaceBetween={50}
        slidesPerView={3}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper h-96">
        <SwiperSlide className='border border-red-500 '>Slide 2</SwiperSlide>
        <SwiperSlide className='border border-red-500'>Slide 3</SwiperSlide>
        <SwiperSlide className='border border-red-500'>Slide 4</SwiperSlide>
        <SwiperSlide className='border border-red-500'>Slide 5</SwiperSlide>
        <SwiperSlide className='border border-red-500'>Slide 1</SwiperSlide>
        <SwiperSlide className='border border-red-500'>Slide 6</SwiperSlide>
        <SwiperSlide className='border border-red-500'>Slide 7</SwiperSlide>
        <SwiperSlide className='border border-red-500'>Slide 8</SwiperSlide>
        <SwiperSlide className='border border-red-500'>Slide 9</SwiperSlide>
      </Swiper >
    </>
  )
}