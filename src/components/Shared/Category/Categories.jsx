import React from "react";

import {
  IoIosWoman,
  IoMan,
  GiJewelCrown,
  IoLogoElectron,
  FaThLarge,
} from "./index";

const Categories = ({ category, handleCategoryClick, pro, activeCategory }) => {
  const icons = [
    <IoIosWoman />,
    <GiJewelCrown />,
    <IoLogoElectron />,
    <IoMan />,
  ];
 
    const categoryGrid =
    "grid-cols-5 gap-4  max-xl:grid-cols-5  max-lg:grid-cols-5  max-md:grid-cols-5 max-sm:grid-cols-5 max-sm:gap-1";
  return (
    <div
      className={`${categoryGrid} w-full  m-auto grid   `}
    >
      {/* "All" category button */}
      <div
        className={`mt-8 flex flex-col items-center justify-center gap-2 rounded-lg shadow-lg transition-colors duration-300 ease-in-out max-sm:mt-0 ${
          activeCategory === null
            ? "border border-green-600 text-green-600"
            : "text-black hover:bg-blue-500 hover:text-white"
        } flex flex-col items-center justify-center gap-2`}
        onClick={() => handleCategoryClick(null)}
      >
        <ul className="flex h-[50px] w-[50px] cursor-pointer items-center justify-center rounded-full p-1 shadow-lg transition-colors duration-300 ease-in-out">
          <li className="flex h-full w-full items-center justify-center rounded-full text-center text-sm">
            <span className="text-[30px]">
              <FaThLarge />
            </span>
          </li>
        </ul>
        <div className="mb-2 mt-1 w-full rounded-md text-center font-bold text-black max-lg:text-[13px]">
          All ({pro.length})
        </div>
      </div>

      {/* Individual category buttons with icons */}
      {category.map((cateItem, index) => (
        <div
          key={cateItem}
          onClick={() => handleCategoryClick(cateItem)}
          className={`mt-4 flex cursor-pointer flex-col items-center justify-center gap-2 rounded-lg shadow-lg transition-colors duration-300 ease-in-out max-sm:mt-0 ${
            activeCategory === cateItem
              ? "border border-green-600 text-green-600"
              : "text-black hover:bg-blue-500 hover:text-white"
          }`}
        >
          <ul className="mt-2 flex h-[50px] w-[50px] items-center justify-center rounded-full p-1 shadow-lg">
            <li className="flex h-full w-full items-center justify-center rounded-full text-center text-sm">
              <span className="text-[40px]">{icons[index % icons.length]}</span>
            </li>
          </ul>
          <div className="mb-2 mt-1 w-full rounded-md text-center font-bold text-black max-lg:text-[13px] max-md:hidden">
            {cateItem}
          </div>
          <div className="mb-2 mt-1 hidden w-full rounded-md text-center font-bold text-black max-lg:text-[13px] max-md:block">
            {cateItem.slice(0, 10)}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Categories;
