import React from 'react';
import Banner from '../Banner/Banner';
import Inventory from '../Inventory/Inventory';
import Review from '../Review/Review';
import Speciality from '../Speciality/Speciality';
import Stock from '../Stock/Stock';

const HomePage = () => {
  return (
    <section className=''>
      <Banner></Banner>
      <Inventory></Inventory>
      <Speciality></Speciality>
      <Review></Review>
      <Stock></Stock>
    </section>
  );
};

export default HomePage;