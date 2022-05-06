import React from 'react';
import './AddItem.css'

const AddItem = () => {
  return (
    <div className="add-item w-full h-full mt-5">
      <form className=" w-1/2 mx-auto">
        <h1 className="text-center text-2xl text-gray-500 mb-5">
          Add Your Item
        </h1>
        {/* name */}
        <div class="form-floating mb-3 w-full">
          <input
            type="text"
            class="form-control
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
          <label for="floatingInput" class="text-gray-700">
            Supplier Name
          </label>
        </div>
        {/* Email  */}
        <div class="form-floating mb-3 w-full">
          <input
            type="email"
            class="form-control
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
          <label for="floatingInput" class="text-gray-700">
            Email address
          </label>
        </div>

        {/* item name  */}
        <div class="form-floating mb-3 w-full">
          <input
            type="text"
            class="form-control
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
          <label for="floatingInput" class="text-gray-700">
            Item Name
          </label>
        </div>

        {/* Price  */}
        <div class="form-floating mb-3 w-full">
          <input
            type="number"
            class="form-control
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
          <label for="floatingInput" class="text-gray-700">
            Price
          </label>
        </div>

        {/* quantity  */}
        <div class="form-floating mb-3 w-full">
          <input
            type="number"
            class="form-control
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
          <label for="floatingInput" class="text-gray-700">
            Quantity
          </label>
        </div>

        {/* Description  */}
        <div class="form-floating mb-3 w-full">
          <textarea
            type="text"
            class="form-control
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
          <label for="floatingInput" class="text-gray-700">
            Description
          </label>
        </div>

        {/* img url  */}
        <div class="form-floating mb-3 w-full">
          <input
            type="text"
            class="form-control
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
          <label for="floatingInput" class="text-gray-700">
            Image URL
          </label>
        </div>
        <div className="submit-form bg-gray-500 rounded-full">
          <input className='w-full py-2 text-white' type="submit" value="Add Item" />
        </div>
      </form>
    </div>
  );
};

export default AddItem;
