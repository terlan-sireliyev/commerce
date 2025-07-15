import React from "react";

const SingleProductHeaderPrice = ({ price }) => {
  return (
    <div
      className="relative inline-flex items-center bg-red-700 px-8 py-2 text-xl font-bold text-white"
      style={{
        clipPath: "polygon(20px 0, 100% 0, 100% 100%, 20px 100%, 0 50%)",
      }}
    >
      <span
        className="absolute left-3 top-1/2 h-2 w-2 rounded-full bg-white"
        style={{ transform: "translateY(-50%)" }}
      ></span>

      <span className="ml-4 mr-2">$ {price}</span>
      <span className="text-sm font-normal">(Fixed)</span>
    </div>
  );
};

export default SingleProductHeaderPrice;
