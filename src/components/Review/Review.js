import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
// import './styles.css';
// import required modules
import { EffectCoverflow, FreeMode, Pagination } from 'swiper';
import './Review.css';

const Review = () => {
  return (
    <div>
      <h1 className="text-center text-5xl w-full mt-1">
        What Our Customer Say
      </h1>

      {/* swipper */}
      <Swiper
        slidesPerView={3}
        spaceBetween={20}
        freeMode={true}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam omnis voluptas suscipit eum iure laborum velit temporibus tenetur quas. Exercitationem fugit nemo laudantium quas saepe magnam totam corrupti a facilis molestiae, alias aliquam, iste labore nihil quo atque aspernatur repellat laborum ex voluptas voluptates? Commodi porro totam ea dicta animi!</p></SwiperSlide>
        <SwiperSlide>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab minima temporibus, aliquid est alias sint, vel debitis iste corporis magnam quasi neque fuga distinctio ipsum! Reiciendis, deleniti. A libero voluptate odio dolor suscipit unde eius sint ducimus facere ad vitae nobis consequuntur accusamus maiores atque, at dignissimos, nemo totam doloribus!</SwiperSlide>
        <SwiperSlide>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab minima temporibus, aliquid est alias sint, vel debitis iste corporis magnam quasi neque fuga distinctio ipsum! Reiciendis, deleniti. A libero voluptate odio dolor suscipit unde eius sint ducimus facere ad vitae nobis consequuntur accusamus maiores atque, at dignissimos, nemo totam doloribus!</SwiperSlide>
        <SwiperSlide>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab minima temporibus, aliquid est alias sint, vel debitis iste corporis magnam quasi neque fuga distinctio ipsum! Reiciendis, deleniti. A libero voluptate odio dolor suscipit unde eius sint ducimus facere ad vitae nobis consequuntur accusamus maiores atque, at dignissimos, nemo totam doloribus!</SwiperSlide>
        <SwiperSlide>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab minima temporibus, aliquid est alias sint, vel debitis iste corporis magnam quasi neque fuga distinctio ipsum! Reiciendis, deleniti. A libero voluptate odio dolor suscipit unde eius sint ducimus facere ad vitae nobis consequuntur accusamus maiores atque, at dignissimos, nemo totam doloribus!</SwiperSlide>
        <SwiperSlide>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab minima temporibus, aliquid est alias sint, vel debitis iste corporis magnam quasi neque fuga distinctio ipsum! Reiciendis, deleniti. A libero voluptate odio dolor suscipit unde eius sint ducimus facere ad vitae nobis consequuntur accusamus maiores atque, at dignissimos, nemo totam doloribus!</SwiperSlide>
        <SwiperSlide>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab minima temporibus, aliquid est alias sint, vel debitis iste corporis magnam quasi neque fuga distinctio ipsum! Reiciendis, deleniti. A libero voluptate odio dolor suscipit unde eius sint ducimus facere ad vitae nobis consequuntur accusamus maiores atque, at dignissimos, nemo totam doloribus!</SwiperSlide>
        <SwiperSlide>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab minima temporibus, aliquid est alias sint, vel debitis iste corporis magnam quasi neque fuga distinctio ipsum! Reiciendis, deleniti. A libero voluptate odio dolor suscipit unde eius sint ducimus facere ad vitae nobis consequuntur accusamus maiores atque, at dignissimos, nemo totam doloribus!</SwiperSlide>
        <SwiperSlide>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab minima temporibus, aliquid est alias sint, vel debitis iste corporis magnam quasi neque fuga distinctio ipsum! Reiciendis, deleniti. A libero voluptate odio dolor suscipit unde eius sint ducimus facere ad vitae nobis consequuntur accusamus maiores atque, at dignissimos, nemo totam doloribus!</SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Review;
