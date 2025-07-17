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
    <div className="w-full px-2 mt-5">
      <Slider {...settings}>
        {/* "All" button */}
        <div
          className={`flex flex-col items-center justify-center gap-2 rounded-lg p-3 shadow-md transition duration-300 cursor-pointer ${
            activeCategory === null
              ? "border border-green-600 text-green-600"
              : "text-black hover:bg-blue-500 hover:text-white"
          }`}
          onClick={() => handleCategoryClick(null)}
        >
          <div className="flex h-[50px] w-[50px] items-center justify-center rounded-full shadow-lg bg-white">
            <span className="text-[30px]">
              <FaThLarge />
            </span>
          </div>
          <div className="text-center text-sm font-semibold mt-2">
            All ({pro.length})
          </div>
        </div>

        {/* Category buttons */}
        {category.map((cateItem, index) => (
          <div
            key={cateItem}
            onClick={() => handleCategoryClick(cateItem)}
            className={`flex flex-col items-center justify-center gap-2 rounded-lg p-3 shadow-md transition duration-300 cursor-pointer ${
              activeCategory === cateItem
                ? "border border-green-600 text-green-600"
                : "text-black hover:bg-blue-500 hover:text-white"
            }`}
          >
            <div className="flex h-[50px] w-[50px] items-center justify-center rounded-full shadow-lg bg-white">
              <span className="text-[35px]">{icons[index % icons.length]}</span>
            </div>
            <div className="text-center text-sm font-semibold mt-2 max-md:hidden">
              {cateItem}
            </div>
            <div className="text-center text-sm font-semibold mt-2 hidden max-md:block">
              {cateItem.slice(0, 10)}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Categories;
