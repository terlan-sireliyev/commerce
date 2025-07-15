import React from "react";
import { LiaEyeSolid } from "react-icons/lia";
const ProductSingleUnderSlider = () => {
  return (
    <>
      <div className="mx-1 mt-4 grid grid-cols-2">
        <div className="flex items-center gap-2 text-gray-400">
          <p>
            <LiaEyeSolid />
          </p>
          <p>223 views</p>
        </div>
        <div className="flex items-center justify-end">
          <p className="rounded-lg bg-[#E7291E] px-2 py-1 text-[13px] text-white">
            New
          </p>
        </div>
      </div>
      <div>
        <div className="relative mt-2 inline-flex items-center bg-pink-500 px-2 py-2 text-lg font-semibold text-white">
          <span className="">$15,000 per month</span>
        </div>
      </div>
    </>
  );
};

export default ProductSingleUnderSlider;
