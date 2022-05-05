import React from 'react';
import { Link } from 'react-router-dom';
import './Speciality.css';
import { FaArrowRight } from 'react-icons/fa';

const Speciality = () => {
  return (
    <div className="our-speciality px-16">
      <div className="see-more  py-4 mr-14 flex items-center justify-end">
        <Link to='/manage' className='flex items-center hover:text-orange-500'>
          {' '}
          <p className="pr-3 text-xl">
            Manage Inventories{' '}
          </p>
          <FaArrowRight />
        </Link>
      </div>
      <h1 className="text-5xl text-center w-full  my-10">Our Speciality </h1>
      <div className="food-content grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <div className="food-item">
          <img
            className="rounded-xl"
            src="http://st3.depositphotos.com/8000700/13130/i/450/depositphotos_131305574-Close-up-of-fresh-ripe-tomatoes-eggplant-and-parsley-Group-of-tomatoes-eggplant-and-parsley-Red-and-yellow-tomatoes-tomatoes-and-parsley-in-drops-of-water.jpg"
            alt=""
          />
          <h2 className="text-2xl py-3">Natural Radiance</h2>
          <p className="text-gray-500">
            A regulatory framework is most important when consumers and farmers
            are geographically separated, and such a framework is likely to
            cater to larger-scale producers who participate in a more industrial
            system. This regulatory approach does not necessarily match
            consumers’ assumptions about organic food production, which
            typically include images of small family farms and the humane
            treatment of animals.
          </p>
        </div>
        <div className="food-item">
          <img
            className="rounded-xl"
            src="https://media-exp1.licdn.com/dms/image/C4E12AQGfpTZRLTLLkA/article-cover_image-shrink_720_1280/0/1634835177119?e=2147483647&v=beta&t=qRyRzxImCCThsXwpMsovUN4IoweNAH0mFl89ztGgEug"
            alt=""
          />
          <h2 className="text-2xl py-3">Healthy Fridge</h2>
          <p className="text-gray-500">
            Healthy eating would be a lot easier if someone would clean out the
            refrigerator, get rid of the junk, and stock the shelves with
            nutritious choices. If high-fat, high-salt, low-fiber foods aren't
            in sight (Chubby Hubby, anyone?), they are more likely to be out of
            mind―and out of mouth. But until you find a
            nutritionist-slash―personal assistant to do the job for you, take a
            peek into this healthy refrigerator. Look at it again before you
            head to the supermarket―it might keep you away from the Cool Whip.
          </p>
        </div>
        <div className="food-item">
          <img
            className="rounded-xl"
            src="https://miro.medium.com/max/1400/1*yBF7ZSAbDxPmm6W4D6M2Sw.jpeg"
            alt=""
          />
          <h2 className="text-2xl py-3">Bountiful Harvest</h2>
          <p className="text-gray-500">
            Sales of both seed packets and small transplant-sized starts of
            tomatoes, peppers, cucumbers, squash and other summer vegetables
            soared this spring as stay-at-home and safe-at-home guidelines
            changed the way we all live and work. Sheltering in place turned out
            to be the inspiration for so many new vegetable gardens that the
            National Garden Bureau, which is celebrating 100 years of promoting
            home gardening, launched a modern Victory Garden campaign based on
            the World War II backyard-gardening initiative.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Speciality;
