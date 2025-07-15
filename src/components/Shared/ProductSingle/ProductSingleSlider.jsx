import React from "react";

const ProductSingleSlider = ({ productData }) => {
  if (!productData) {
    return <div>Loading...</div>; // Or some other loading state
  }
  return (
    <div className="relative overflow-hidden rounded-lg px-1 max-xl:h-[350px] max-xl:w-[100%]">
      {/* <!-- Overlay for a more stylish effect --> */}
      <div className="absolute z-10"></div>

      {/* <!-- Image --> */}
      <div className="m-auto h-[400px] w-[50%]">
        <img
          className="object-cover transition-transform duration-300 max-xl:h-[100%] max-xl:w-[100%]"
          src={productData.image}
          alt={productData.title}
        />
      </div>

      {/* <!-- Price tag --> */}
      <p className="absolute left-3 top-3 z-20 hidden rounded-full bg-gradient-to-r from-indigo-600 to-blue-400 px-6 py-2 text-lg font-semibold text-white shadow-md max-md:block">
        ${productData.price} per month
      </p>
    </div>
  );
};

export default ProductSingleSlider;
