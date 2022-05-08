import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import cart from '../../images/cart2.png';
import deliverIcon from '../../images/delivery.png';
import { FaArrowRight } from 'react-icons/fa';
import './InventoryDetails.css';
import { ToastContainer, toast, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const InventoryDetails = () => {
  const [item, setItem] = useState({});
  const { name, img, price, description, supplier, quantity, _id } = item;
  const { id } = useParams();

  const [reStack, setReStack] = useState(0);
  console.log(reStack);

  // handle quantity
  const handleInput = (e) => {
    // e.preventDefault();
    const re = /^[0-9\b]+$/;
    if (e.target.value === '' || re.test(e.target.value)) {
      setReStack(e.target.value);
      e.target.value = '';
    }
  };

  const handleQuantity = (e) => {
    e.preventDefault();
    const url = `https://agile-refuge-01523.herokuapp.com/service/${id}`;
    fetch(url, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ quantity: +reStack + +quantity }),
    });
    setReStack(0);
    toast.success('Successfully ReStock item');
  };

  useEffect(() => {
    fetch(`https://agile-refuge-01523.herokuapp.com/service/${id}`)
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, [id, item]);

  // handle deliver
  const handleDeliver = () => {
    if (quantity <= 0) {
      toast.error('This item is Sold out');
    } else {
      const oldQuantity = parseInt(quantity);
      const updateQuantity = oldQuantity - 1;
      const url = `https://agile-refuge-01523.herokuapp.com/service/${id}`;
      fetch(url, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ quantity: updateQuantity }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          toast.success('Deliver 1 item');
        });
    }
  };

  return (
    <div className="w-full h-auto overflow-x-hidden p-10">
      <div className="flex flex-col">
        <div className="overflow-x-hidden sm:-mx-6 lg:-mx-8">
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full border text-center">
                <tbody className="grid grid-cols-1 md:grid-cols-2">
                  <tr className="border-b">
                    <td
                      // colspan="2"
                      rowspan="3"
                      className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap text-center border-r w-1/2"
                    >
                      <div className="product-img flex justify-center items-center">
                        <img className="h-[430px]" src={img} alt="" />
                      </div>
                    </td>
                  </tr>
                  <div className="product-details">
                    <tr className="bg-white border-b">
                      <td
                        // colspan="2"
                        className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap text-center border-r h-auto w-52"
                      >
                        Name:
                      </td>
                      <td className="text-left text-sm text-gray-900 font-light px-6 py-4 ">
                        {name}
                      </td>
                    </tr>
                    <tr className="bg-white border-b">
                      <td
                        // colspan="2"
                        className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap text-center border-r h-auto w-52"
                      >
                        Id:
                      </td>
                      <td className="text-left text-sm text-gray-900 font-light px-6 py-4 ">
                        {_id}
                      </td>
                    </tr>
                    <tr className="bg-white border-b">
                      <td
                        // colspan="2"
                        className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap text-center border-r h-auto w-52"
                      >
                        Price:
                      </td>
                      <td className="text-left text-sm text-gray-900 font-light px-6 py-4 ">
                        {price}
                      </td>
                    </tr>
                    <tr className="bg-white border-b">
                      <td
                        // colspan="2"
                        className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap text-center border-r h-auto w-52"
                      >
                        Quantity:
                      </td>
                      <td className="text-left text-sm text-gray-900 font-light px-6 py-4 ">
                        {quantity}
                      </td>
                    </tr>
                    <tr className="bg-white border-b">
                      <td
                        // colspan="2"
                        className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap text-center border-r h-auto w-52"
                      >
                        Description:
                      </td>
                      <td className="text-left text-sm text-gray-900 font-light px-6 py-4 ">
                        {description}
                      </td>
                    </tr>
                    <tr className="bg-white border-b">
                      <td
                        // colspan="2"
                        className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap text-center border-r h-auto w-52"
                      >
                        Supplier:
                      </td>
                      <td className="text-left text-sm text-gray-900 font-light px-6 py-4 ">
                        {supplier}
                      </td>
                    </tr>
                    <tr className="bg-white border-b">
                      <td
                        // colspan="2"
                        className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap text-center border-r h-auto w-52"
                      >
                        Stock:
                      </td>
                      <td className="text-left text-sm text-gray-900 font-light px-6 py-4">
                        {quantity === 0 ? 'Sold' : 'Available'}
                      </td>
                    </tr>
                    <tr className="bg-white border-b deliver">
                      <td
                        onClick={handleDeliver}
                        colspan="2"
                        className="text-sm font-light px-6 py-4 whitespace-nowrap text-center border-r h-auto w-52 cursor-pointer "
                      >
                        <button
                          // onClick={handleDeliver}
                          className="mx-auto flex justify-center items-center text-xl text-gray-500"
                        >
                          Delivered{' '}
                          <img className="h-6 mx-3" src={deliverIcon} alt="" />{' '}
                        </button>
                      </td>
                    </tr>
                  </div>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* manage inventory  */}
      <div className="see-more  py-4 mr-14 flex items-center justify-end">
        <Link to="/manage" className="flex items-center hover:text-orange-500">
          {' '}
          <p className="pr-3 text-xl">Manage Inventories </p>
          <FaArrowRight />
        </Link>
      </div>
      {/* reStock form  */}
      <form onSubmit={handleQuantity} className="text-center">
        <div className="flex justify-center">
          <div className="mb-3 xl:w-96">
            <label
              for="exampleNumber0"
              className="form-label inline-block mb-2 text-gray-700"
            >
              <h1 className="text-2xl text-slate-600 mt-5">ReStock the item</h1>
            </label>
            <input
              onChange={handleInput}
              value={reStack}
              type="number"
              name="number"
              className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
              id="exampleNumber0"
              placeholder="add quantity"
              required
            />
          </div>
        </div>
        <div className="submit ">
          <button className="deliver flex justify-center items-center mx-auto h-14">
            <input
              className="py-2 px-5 rounded cursor-pointer"
              type="submit"
              value="ReStock items"
            />
            <img className="h-10 mr-3" src={cart} alt="" />
          </button>
        </div>
      </form>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        transition={Zoom}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default InventoryDetails;
