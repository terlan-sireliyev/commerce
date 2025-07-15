import React from "react";

const ProductInformation = () => {
  return (
    <div className="mt-4 ">
      <div>
        <ul className="mt-1 grid grid-cols-3 gap-2 max-xl:grid-cols-2 max-xs:grid-cols-1">
          <li className="mt-2 flex">
            <p className="w-[40%] bg-red-500 p-2 font-bold text-white">
              Country:
            </p>
            <p className="w-[60%] bg-gray-200 p-2">Azerbaycan:</p>
          </li>
          <li className="mt-2 flex">
            <p className="w-[40%] bg-red-500 p-2 font-bold text-white">City:</p>
            <p className="w-[60%] bg-gray-200 p-2">Baku</p>
          </li>
          <li className="mt-2 flex">
            <p className="w-[40%] bg-red-500 p-2 font-bold text-white">Zone:</p>
            <p className="w-[60%] bg-gray-200 p-2">Punjab</p>
          </li>
          <li className="mt-2 flex">
            <p className="w-[40%] bg-red-500 p-2 font-bold text-white">
              Address:
            </p>
            <p className="w-[60%] bg-gray-200 p-2">a 61 e south city</p>
          </li>
          <li className="mt-2 flex">
            <p className="w-[40%] bg-red-500 p-2 font-bold text-white">
              Model:
            </p>
            <p className="w-[60%] bg-gray-200 p-2">iPhone</p>
          </li>
          <li className="mt-2 flex">
            <p className="w-[40%] bg-red-500 p-2 font-bold text-white">City:</p>
            <p className="w-[60%] bg-gray-200 p-2">Baku</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProductInformation;
