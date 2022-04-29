import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className='text-center'>
      <h2 className='text-5xl'>Sorry Page Not found</h2>
      <button className='text-3xl px-8 py-1 my-3 bg-green-500 rounded-b-full'> <Link to='/'> Go Home</Link> </button>
    </div>
  );
};

export default NotFound;