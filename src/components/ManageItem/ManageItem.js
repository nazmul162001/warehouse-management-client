import React from 'react';
import { Link } from 'react-router-dom';
import useInventory from '../../Hooks/useInventory';
import AllInventory from '../AllInventory/AllInventory';
import {MdAddCircleOutline} from 'react-icons/md'

const ManageItem = () => {
  const [item, setItem] = useInventory();

  return (
    <section className="w-full">
      <div className="manage-inventory text-center">
        <h1 className="text-center text-5xl w-full my-10 text-gray-500 bottom-title relative">
          Manage Inventory
        </h1>
        <Link
          className="mx-auto py-2 rounded-md bg-red-400 flex justify-center items-center w-56"
          to="/additem"
        >
          Add New Item <MdAddCircleOutline className='ml-2 text-xl'/>
        </Link>
      </div>
      <div className="inventory px-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-5">
        {item.map((item) => (
          <AllInventory key={item._id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default ManageItem;
