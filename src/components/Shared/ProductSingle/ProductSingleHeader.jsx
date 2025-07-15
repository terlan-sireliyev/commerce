import React from "react";
import SingleProductHeaderPrice from "../../Ui/another/SingleProductHeaderPrice";

const ProductSingleHeader = ({ productData }) => {
  if (!productData) {
    return <div>Loading...</div>; // Or some other loading state
  }
  const gridOptions = "grid-cols-3 max-md:grid-cols-1 max-sm:grid-cols-1";
  return (
    <div
      className={` ${gridOptions} m-auto grid w-full  justify-between bg-white max-lg:grid-cols-3 max-sm:ml-1 max-xs:ml-1`}
    >
      <div className="  col-span-2 pt-4 max-lg:col-span-2">
        <h1 className="text-[26px] font-semibold text-[#232323]">
          {productData.title}
        </h1>
        <ul className="flex gap-4 text-[16px]">
          <li className="text-[#777]">June 20,2017</li>
          <li>
            <span className="text-[#777]">Category</span>:
            <b className="pl-1 text-[#E52D27]">{productData.category}</b>
          </li>
          <li>
            Views: <b>666</b>
          </li>
        </ul>
      </div>
      <div className="z-10 pt-4 text-right max-md:hidden max-sm:text-center">
        <SingleProductHeaderPrice price={productData.price} />
      </div>
    </div>
  );
};

export default ProductSingleHeader;
