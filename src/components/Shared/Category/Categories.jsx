import React from "react";
import Slider from "react-slick"; // SLIDER İMPORTU

import {
  IoIosWoman,
  IoMan,
  GiJewelCrown,
  IoLogoElectron,
  FaThLarge,
} from "./index";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Categories = ({ category, handleCategoryClick, pro, activeCategory }) => {
  const icons = [
    <IoIosWoman />,
    <GiJewelCrown />,
    <IoLogoElectron />,
    <IoMan />,
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 100,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1280,
        settings: { slidesToShow: 5 },
      },
      {
        breakpoint: 1024,
        settings: { slidesToShow: 4 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 3 },
      },
    ],
  };

  return (
    <div className="mt-5 w-full px-2">
      <Slider {...settings}>
        {/* "All" button */}
        <div
         className={`mx-[7.5px] flex flex-col items-center justify-center gap-2 border-l-2 p-3 transition duration-300 cursor-pointer ${
    activeCategory === null
      ? "border-green-600 text-green-600"
      : "text-black hover:bg-blue-500 hover:text-white"
  }`}
          onClick={() => handleCategoryClick(null)}
        >
          <div className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-white shadow-lg">
            <span className="text-[30px]">
              <FaThLarge />
            </span>
          </div>
          <div className="mt-2 text-center text-sm font-semibold">
            All ({pro.length})
          </div>
        </div>

        {/* Category buttons */}
        {category.map((cateItem, index) => (
          <div
            key={cateItem}
            onClick={() => handleCategoryClick(cateItem)}
            className={`mx-[7.5px] flex cursor-pointer flex-col gap-2 border-l-2 p-3 transition duration-300 ${
              activeCategory === cateItem
                ? "border-green-600 text-green-600"
                : "text-black hover:bg-blue-500 hover:text-white"
            }`}
          >
            <div className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-white shadow-lg">
              <span className="text-[35px]">{icons[index % icons.length]}</span>
            </div>
            <div className="mt-2 text-center text-sm font-semibold max-md:hidden">
              {cateItem}
            </div>
            <div className="mt-2 hidden text-center text-sm font-semibold max-md:block">
              {cateItem.slice(0, 10)}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Categories;
