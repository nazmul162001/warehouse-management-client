import React from 'react';
import './Banner.css';
// import { MdOutlineAddShoppingCart } from 'react-icons/md';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation, Autoplay } from 'swiper';



const Banner = () => {
  return (
    <section className='banner'>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src="https://img.freepik.com/free-photo/colorful-veggies-frame-with-copy-space_23-2148290738.jpg?t=st=1651383103~exp=1651383703~hmac=ea6c02c97c062838db2583aae10b4ba97eec3adbc5bc6136d1e73302e4cf5b53&w=740"
            className="block w-full"
            alt="..."
          />
          <div className="content absolute">
            <h1 className="text-center text-3xl text-gray-500">100% FRESH & ORGANIC</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {' '}
          <img
            src="https://img.freepik.com/free-photo/flat-lay-composition-vegetables-with-copyspace_23-2148190210.jpg?w=740"
            className="block w-full"
            alt="..."
          />
        </SwiperSlide>
        <SwiperSlide>
          {' '}
          <img
            src="https://img.freepik.com/free-photo/flat-lay-composition-vegetables-with-copyspace_23-2148190211.jpg?w=740"
            className="block w-full"
            alt="..."
          />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Banner;
