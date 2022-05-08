import React from 'react';
import './Banner.css';
import { AiOutlineYoutube } from 'react-icons/ai';
// import { MdOutlineAddShoppingCart } from 'react-icons/md';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation, Autoplay } from 'swiper';
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <section className="banner">
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
            className="block w-full blur-sm"
            alt="..."
          />
          <div className="content absolute w-full md:w-3/4">
            <h1 className="text-center text-3xl md:text-4xl text-gray-500">
              100% FRESH & ORGANIC
            </h1>
            <p className="">
              Organic and responsibly sourced food is what the modern customer
              demands. These name suggestions have the flexibility to provide
              you with ideas for an organic packaged good product, restaurant,
              food truck other anything else.
            </p>
            <div className="button py-5 flex justify-center items-center">
              <Link
                className="py-3 px-14 mx-5 bg-yellow-500 rounded-full "
                to="/"
              >
                Join Us
              </Link>
              <a
                className="py-2 mx-3 px-5 rounded-full flex justify-center items-center border-2 border-orange-500 border-opacity-50"
                href="https://youtu.be/Rmfjc-JrCS0"
                target="_blank"
              >
                {' '}
                <AiOutlineYoutube className="text-3xl text-orange-500 mr-2" />{' '}
                Warehouse
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {' '}
          <img
            src="https://img.freepik.com/free-photo/flat-lay-composition-vegetables-with-copyspace_23-2148190210.jpg?w=740"
            className="block w-full blur-sm"
            alt="..."
          />
          <div className="content absolute w-full md:w-3/4">
            <h1 className="text-center text-3xl md:text-4xl text-white">
              PURE DELICIOUSNESS
            </h1>
            <p className=" text-white">
              Diet and lifestyle are not only related to wellbeing but also have
              dramatic effects on the burdens of ill health and non-communicable
              diseases. Drawing upon anthropological evidence for human
              evolution and the chemistry of the brain, as well on the
              physiology of taste, a brief review is provided on the effects of
              food composition and food flavor on health, wellbeing, and the
              quality of life.
            </p>
            <div className="button py-5 flex justify-center items-center">
              <Link
                className="py-3 px-14 mx-5 bg-yellow-500 rounded-full"
                to="/"
              >
                Join Us
              </Link>
              <a
                className="py-2 mx-3 px-5 rounded-full flex justify-center items-center border-2 border-orange-500 border-opacity-50 text-white"
                href="https://youtu.be/Rmfjc-JrCS0"
                target="_blank"
              >
                {' '}
                <AiOutlineYoutube className="text-3xl text-orange-500 mr-2" />{' '}
                Warehouse
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {' '}
          <img
            src="https://img.freepik.com/free-photo/flat-lay-composition-vegetables-with-copyspace_23-2148190211.jpg?w=740"
            className="block w-full blur-sm"
            alt="..."
          />
          <div className="content absolute w-full md:w-3/4">
            <h1 className="text-center text-3xl md:text-4xl text-white">
              CHEMICAL-FREE CUISINE
            </h1>
            <p className=" text-white">
              More and more organic foods are showing up in the produce aisles
              of local grocery stores. It can be confusing to know when to buy
              organic versions of your favorite foods. Many people buy organic
              food because they are worried about the environment. And many
              people buy organic food to avoid chemicals, especially pesticides,
              in their food.
            </p>
            <div className="button py-5 flex justify-center items-center">
              <Link
                className="py-3 px-14 mx-5 bg-yellow-500 rounded-full"
                to="/"
              >
                Join Us
              </Link>
              <a
                className="py-2 mx-3 px-5 rounded-full flex justify-center items-center border-2 border-orange-500 border-opacity-50 text-white"
                href="https://youtu.be/Rmfjc-JrCS0"
                target="_blank"
              >
                {' '}
                <AiOutlineYoutube className="text-3xl text-orange-500 mr-2" />{' '}
                Warehouse
              </a>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Banner;
