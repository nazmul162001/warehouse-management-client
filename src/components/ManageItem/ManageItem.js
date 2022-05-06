import React from 'react';
import useInventory from '../../Hooks/useInventory';
import AllInventory from '../AllInventory/AllInventory';

const ManageItem = () => {
const [item, setItem]= useInventory();


  
  return (
<section className='w-full'>
      <h1 className='text-5xl text-center py-3'>Manage Inventory</h1>
      <div className="inventory px-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-5">
        {
          item.map(item => <AllInventory 
          key={item._id}
          item={item}
          />)
        }
      </div>
    </section>
  );
};

export default ManageItem;