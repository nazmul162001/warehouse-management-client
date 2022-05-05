import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const InventoryDetails = () => {
  const [item, setItem] = useState({});
  const { name, img, price, description, supplier, quantity } = item;
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:5000/service/${id}`)
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, [id]);

  return (
    <div className="w-full h-auto overflow-x-hidden">
      <div className="flex flex-col">
        <div className="overflow-x-hidden sm:-mx-6 lg:-mx-8">
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full border text-center">
                <tbody className='grid grid-cols-1 md:grid-cols-2'>
                  <tr className="border-b">
                    <td
                      // colspan="2"
                      rowspan="3"
                      className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap text-center border-r w-1/2"
                    >
                      <div className="product-img flex justify-center items-center">
                        <img
                        className='h-96'
                         src={img} alt="" />
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
                        Sold:
                      </td>
                      <td className="text-left text-sm text-gray-900 font-light px-6 py-4">
                        Sold
                      </td>
                    </tr>
                  </div>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InventoryDetails;
