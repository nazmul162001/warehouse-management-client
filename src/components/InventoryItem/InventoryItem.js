import React from 'react';
import './InventoryItem.css';

const InventoryItem = (props) => {
  const { name, description, price, supplier, img, quantity } = props.item;
  return (
    <>
      <div className="rounded-md p-5 custom-shadow mt-20">
        <img className="rounded-xl mb-2" src={img} alt="" />
        <p>
          <strong>{name}</strong>
        </p>
        <p>Price: ${price}</p>
        <p>
          Quantity:{' '}
          <span
            style={{ backgroundColor: 'rgba(255, 0, 0, 0.20)' }}
            className="py-1 px-3 rounded-full"
          >
            {quantity}
          </span>{' '}
        </p>
        <p className="my-2 text-gray-500"> {description} </p>
        <p className="italic my-2"> Supplier: {supplier} </p>
        <div className="text-center">
          <button className="bg-slate-700 w-full py-2 px-5 rounded-md text-white">
            Stock Update
          </button>
        </div>
      </div>
    </>
  );
};

export default InventoryItem;
