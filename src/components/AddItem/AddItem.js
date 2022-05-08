import React from 'react';
import { toast } from 'react-toastify';
import './AddItem.css';

const AddItem = () => {
  const handleAddItem = (e) => {
    e.preventDefault();
    const supplier = e.target.suppliarName.value;
    const name = e.target.itemName.value;
    const email = e.target.email.value;
    const price = e.target.price.value;
    const quantity = e.target.quantity.value;
    const description = e.target.description.value;
    const img = e.target.imgUrl.value;

    // console.log(suppliarName, itemName, email, price, quantity, description, imgUrl);

    const url = `https://agile-refuge-01523.herokuapp.com/service`;
    fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        supplier,
        name,
        email,
        price,
        quantity,
        description,
        img,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        e.target.reset();
        toast.success('Item Successfully added');
      });
  };

  return (
    <div className="add-item w-full h-full mt-5">
      <form onSubmit={handleAddItem} className="w-full px-10 md:px-0 md:w-1/2 mx-auto">
        <h1 className="text-center text-2xl text-gray-500 mb-5">
          Add Your Item
        </h1>
        {/* name */}
        <div className="form-floating mb-3 w-full">
          <input
            type="text"
            name="suppliarName"
            className="form-control
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
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            id="floatingInput"
            placeholder="supplier name"
            required
          />
          <label htmlFor="floatingInput" className="text-gray-700">
            Supplier Name
          </label>
        </div>
        {/* Email  */}
        <div className="form-floating mb-3 w-full">
          <input
            type="email"
            name="email"
            className="form-control
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
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            id="floatingInput"
            placeholder="name@example.com"
            required
          />
          <label htmlFor="floatingInput" className="text-gray-700">
            Email address
          </label>
        </div>

        {/* item name  */}
        <div className="form-floating mb-3 w-full">
          <input
            type="text"
            name="itemName"
            className="form-control
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
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            id="floatingInput"
            placeholder="item name"
            required
          />
          <label htmlFor="floatingInput" className="text-gray-700">
            Item Name
          </label>
        </div>

        {/* Price  */}
        <div className="form-floating mb-3 w-full">
          <input
            type="number"
            name="price"
            className="form-control
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
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            id="floatingInput"
            placeholder="Price"
            required
          />
          <label htmlFor="floatingInput" className="text-gray-700">
            Price
          </label>
        </div>

        {/* quantity  */}
        <div className="form-floating mb-3 w-full">
          <input
            type="number"
            name="quantity"
            className="form-control
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
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            id="floatingInput"
            placeholder="quantity"
            required
          />
          <label htmlFor="floatingInput" className="text-gray-700">
            Quantity
          </label>
        </div>

        {/* Description  */}
        <div className="form-floating mb-3 w-full">
          <textarea
            type="text"
            name="description"
            className="form-control
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
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            id="floatingInput"
            placeholder="description"
            required
          />
          <label htmlFor="floatingInput" className="text-gray-700">
            Description
          </label>
        </div>

        {/* img url  */}
        <div className="form-floating mb-3 w-full">
          <input
            type="text"
            name="imgUrl"
            className="form-control
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
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            id="floatingInput"
            placeholder="image URL"
            required
          />
          <label htmlFor="floatingInput" className="text-gray-700">
            Image URL
          </label>
        </div>
        <div className="submit-form bg-gray-500 rounded-full">
          <input
            className="w-full py-2 text-white cursor-pointer"
            type="submit"
            value="Add Item"
          />
        </div>
      </form>
    </div>
  );
};

export default AddItem;
