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
    <div className='px-10'>
      <h1 className="text-center text-5xl w-full my-10 text-gray-500 bottom-title relative">
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
        <SwiperSlide className='review p-3 rounded-md bg-gray-100'>
          <img style={{width: '130px', height: '130px', marginTop: '-50px', border: '10px solid white'}} className='mx-auto rounded-full h-20' src="https://media.istockphoto.com/photos/portrait-of-a-handsome-black-man-picture-id1289461335?b=1&k=20&m=1289461335&s=170667a&w=0&h=7L30Sh0R-0JXjgqFnxupL9msH5idzcz0xZUAMB9hY_k=" alt="" />

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo fuga quisquam quod minima dolore distinctio nemo eligendi maiores vitae sequi. Deleniti delectus incidunt hic aperiam.</p>
          <span className="pt-5 inline-block pr-5 text-orange-500 text-md">Abdul Alim</span>
          <span className="italic">co-founder Pran</span>
        </SwiperSlide>
        <SwiperSlide className='review p-3 rounded-md bg-gray-100'>
          <img style={{width: '130px', height: '130px', marginTop: '-50px', border: '10px solid white'}} className='mx-auto rounded-full h-20' src="https://images.thestar.com/1LKda5vkeCkkTLgLgQpspScXhmI=/650x650/smart/filters:cb(1620313720633)/https://www.thestar.com/content/dam/thestar/news/canada/2021/05/05/this-black-man-was-stopped-by-police-for-jaywalking-a-human-rights-commission-has-called-it-racist-and-awarded-him-15000/gyasi_symonds.jpg" alt="" />

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo fuga quisquam quod minima dolore distinctio nemo eligendi maiores vitae sequi. Deleniti delectus incidunt hic aperiam.</p>
          <span className="pt-5 inline-block pr-5 text-orange-500 text-md">Abdul Alim</span>
          <span className="italic">co-founder Pran</span>
        </SwiperSlide>
        <SwiperSlide className='review p-3 rounded-md bg-gray-100'>
          <img style={{width: '130px', height: '130px', marginTop: '-50px', border: '10px solid white'}} className='mx-auto rounded-full h-20' src="https://www.mantruckandbus.com/fileadmin/_processed_/7/1/csm_Richard_von_Braunschweig_4e4e3bd591.jpeg" alt="" />

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo fuga quisquam quod minima dolore distinctio nemo eligendi maiores vitae sequi. Deleniti delectus incidunt hic aperiam.</p>
          <span className="pt-5 inline-block pr-5 text-orange-500 text-md">Abdul Alim</span>
          <span className="italic">co-founder Pran</span>
        </SwiperSlide>
        <SwiperSlide className='review p-3 rounded-md bg-gray-100'>
          <img style={{width: '130px', height: '130px', marginTop: '-50px', border: '10px solid white'}} className='mx-auto rounded-full h-20' src="https://www.mantruckandbus.com/fileadmin/_processed_/2/b/csm_19-09_startseite_interviewkachel_324_224_3_726a3e77d5.jpg" alt="" />

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo fuga quisquam quod minima dolore distinctio nemo eligendi maiores vitae sequi. Deleniti delectus incidunt hic aperiam.</p>
          <span className="pt-5 inline-block pr-5 text-orange-500 text-md">Abdul Alim</span>
          <span className="italic">co-founder Pran</span>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Review;
