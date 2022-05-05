import React from 'react';
import { Link } from 'react-router-dom';
import './InventoryItem.css';
import { RiChatHeartLine } from 'react-icons/ri';

const InventoryItem = (props) => {
  const { name, description, price, supplier, img, quantity , _id } = props.item;
  return (
    <>
      <div className="rounded-md p-5 custom-shadow mt-20">
        <div className="product-img flex justify-center">
          <img className="rounded-xl mb-2" src={img} alt="" />
        </div>
        <p>
          <strong>{name}</strong>
        </p>
        <div className="product-info flex justify-between py-3">
          <p className="font-bold price">${price}</p>
          <p className="quantity text-gray-800">
            <strong className="text-2xl">Q</strong> uantity:{' '}
            <span
              style={{ backgroundColor: 'rgba(255, 0, 0, 0.20)' }}
              className="py-1 px-3 rounded-full"
            >
              {quantity}
            </span>{' '}
          </p>
        </div>
        <p className="my-2 text-gray-500"> {description} </p>
        <div className="supplier flex items-center justify-between pb-5">
          <p className="italic my-2"> Supplier: {supplier} </p>
          <p>
            {' '}
            <Link to='/login'><RiChatHeartLine className='text-3xl mr-3 text-orange-500' /></Link>{' '}
          </p>
        </div>
        <div className="text-center w-full">
          <Link
            to={`inventory/${_id}`}
            className="bg-slate-700 w-full py-2 px-5 rounded-md text-white"
          >
            Stock Update
          </Link>
        </div>
      </div>
    </>
  );
};

export default InventoryItem;
