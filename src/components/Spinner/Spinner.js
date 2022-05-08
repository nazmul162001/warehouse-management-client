import React from 'react';
import './Spinner.css'

const Spinner = () => {
  return (
    <div className="spinner flex justify-center items-center bg-white w-full h-screen">
      <img className='w-20 h-20' src="https://upload.wikimedia.org/wikipedia/commons/c/c7/Loading_2.gif?20170503175831" alt="" />
    </div>
  );
};

export default Spinner;
