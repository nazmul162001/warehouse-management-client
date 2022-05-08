import React from 'react';
import { Link } from 'react-router-dom';
import { RiChatHeartLine } from 'react-icons/ri';
import useInventory from '../../Hooks/useInventory';

const MyItemInfo = (props) => {
  const { name, description, price, supplier, img, quantity , _id } = props.item;
  const [services, setServices] = useInventory();
  // console.log(services);

  // handle delete 
  const handleDelete = id => {
    const proceed = window.confirm('Are You Sure?')
    if(proceed){
      const url = `http://localhost:5000/service/${id}`
      fetch(url, {
        method: 'DELETE'
      })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        const remaining = services.filter(service => service._id !== id)
        setServices(remaining);
      })
    }
  }
  
  
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
        <div className="w-full flex justify-between items-center">
          <button onClick={()=>handleDelete(_id)}  className=" bg-red-600 w-full py-2 px-5 rounded-md text-white ml-1">Delete</button>
        </div>
      </div>
    </>
  );
};

export default MyItemInfo;