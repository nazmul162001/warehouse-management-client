import React from 'react';

const Stock = () => {
  return (
    <div>
      <section className="overflow-hidden text-gray-700">
      <h1 className="text-center text-5xl w-full my-10 text-gray-500 bottom-title relative">
        Availabe in our Stock
      </h1>
        <div className="container px-5 py-2 mx-auto lg:pt-24 lg:px-32">
          <div className="flex flex-wrap -m-1 md:-m-2">
            <div className="flex flex-wrap w-1/2">
              <div className="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src="https://gleeapp.in/product-images/2020/06/11/570/large/litchi-1kg-1.jpeg"
                />
              </div>
              <div className="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src="https://149449856.v2.pressablecdn.com/wp-content/uploads/2018/01/Summer-Grocery.jpg"
                />
              </div>
              <div className="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src="https://cdn6.dissolve.com/p/D1062_20_204/D1062_20_204_1200.jpg"
                />
              </div>
            </div>
            <div className="flex flex-wrap w-1/2">
              <div className="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src="https://static.onecms.io/wp-content/uploads/sites/9/2017/08/attractive-produce-aisle-ft-blog0817.jpg"
                />
              </div>
              <div className="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src="https://www.foodnavigator-usa.com/var/wrbm_gb_food_pharma/storage/images/_aliases/wrbm_large/publications/food-beverage-nutrition/foodnavigator-usa.com/news/markets/nielsen-we-expect-consumers-focus-on-fresh-to-sharpen/9196666-1-eng-GB/Nielsen-We-expect-consumers-focus-on-fresh-to-sharpen.jpg"
                />
              </div>
              <div className="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src="https://www.mashed.com/img/gallery/the-disturbing-truth-of-your-grocery-stores-produce-department/intro-1558031259.jpg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Stock;
