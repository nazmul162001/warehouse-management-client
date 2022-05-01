import React from 'react';
import './Banner.css'

const Banner = () => {
  return (
    <section className="banner w-full h-4/5">
      <div
        id="carouselExampleCaptions"
        class="carousel slide relative"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner relative w-full overflow-hidden">
          <div class="carousel-item active relative float-left w-full">
            <img
              src="https://img.freepik.com/free-photo/flat-lay-composition-vegetables-with-copyspace_23-2148190210.jpg?w=740"
              class="block w-full"
              alt="..."
            />
            <div class="carousel-caption md:block absolute text-center top-1/3">
              <h1 class="text-6xl mb-2 title">100% Fresh & Organic</h1>
              <p className='py-3 hidden md:block'>
              Organic and responsibly sourced food is what the modern <br /> customer demands. These name suggestions have the flexibility to provide you <br /> with ideas for an organic packaged good product, restaurant, food truck other anything else.
              </p>
              <button className='px-10 py-2 bg-yellow-400 text-black rounded-full'>Order Now</button>
            </div>
          </div>
          <div class="carousel-item relative float-left w-full">
            <img
              src="https://img.freepik.com/free-photo/flat-lay-composition-vegetables-with-copyspace_23-2148190211.jpg?w=740"
              class="block w-full"
              alt="..."
            />
            <div class="carousel-caption md:block absolute text-center top-1/3">
              <h5 class="text-xl">Second slide label</h5>
              <p>
                Some representative placeholder content for the second slide.
              </p>
            </div>
          </div>
          <div class="carousel-item relative float-left w-full">
            <img
              src="https://img.freepik.com/free-photo/colorful-veggies-frame-with-copy-space_23-2148290738.jpg?t=st=1651383103~exp=1651383703~hmac=ea6c02c97c062838db2583aae10b4ba97eec3adbc5bc6136d1e73302e4cf5b53&w=740"
              class="block w-full"
              alt="..."
            />
            <div class="carousel-caption md:block absolute text-center top-1/3 text-black">
              <h5 class="text-xl">Third slide label</h5>
              <p>
                Some representative placeholder content for the third slide.
              </p>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            class="carousel-control-prev-icon inline-block bg-no-repeat"
            aria-hidden="true"
          ></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            class="carousel-control-next-icon inline-block bg-no-repeat"
            aria-hidden="true"
          ></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
};

export default Banner;
