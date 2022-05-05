import useInventory from '../../Hooks/useInventory';
import InventoryItem from '../InventoryItem/InventoryItem';
import Spinner from '../Spinner/Spinner';

const Inventory = () => {
  const [inventory, setInventory]= useInventory();
  const newInventory = inventory.slice(0,6);


  return (
    <section className='w-full'>
      {
        inventory.length === 0 ? <Spinner></Spinner> : ''
      }
      <h1 className='text-5xl text-center py-3'>Inventory</h1>
      <div className="inventory px-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-5">
        {
          newInventory.map(item => <InventoryItem 
          key={item._id}
          item={item}
          />)
        }
      </div>
    </section>
  );
};

export default Inventory;