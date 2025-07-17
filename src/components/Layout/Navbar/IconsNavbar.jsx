import React, { useContext, useState, useEffect, useRef } from "react";
import { FaBars, FaPaperPlane, FaSignInAlt } from "react-icons/fa";
import { MdOutlineNotificationsNone, MdViewList } from "react-icons/md";
import { CiBookmark } from "react-icons/ci";
import { FaRegEnvelope } from "react-icons/fa6";
import { HiShoppingCart } from "react-icons/hi";
import { saveContext } from "../../../contextStore/DinamicOpenMenu";
import globalBasketData from "../../../zustandStore";
import UserOpenMenuIcon from "../../Shared/ProfileAssets/UserOpenMenuIcon";
import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { useSelector } from "react-redux";

const IconsNavbar = () => {
  const {
    toggleNotificationMenu,
    toggleEnvelopeMenu,
    toggleBarMenu,
    toggleListMenu,
    toggleBasketMenu,
    toggleUserMenu,
    // isSaveOpen,
    toggleSave,
  } = useContext(saveContext);

  const { basketData } = globalBasketData((state) => state);
    const bookmarks = useSelector((state) => state.bookmarkName.bookmarks);

  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="border-grau-500 mr-4 flex gap-5 border-r-2 py-2 pr-10 max-sm:hidden">
        {/*HiShoppingCart*/}
        <div className="relative">
          <HiShoppingCart
            className="cursor-pointer text-[20px]"
            onClick={toggleBasketMenu}
          />
          <span className="absolute -bottom-[13px] -right-2 flex items-center justify-center rounded-full bg-[#E55934] px-[5px] text-sm text-white">
            {basketData.length}
          </span>
        </div>
        <div className="relative">
          <CiBookmark
            className="cursor-pointer text-[20px]"
            onClick={toggleSave}
          />
          <span className="absolute -bottom-[13px] -right-2 flex items-center justify-center rounded-full bg-[#E55934] px-[5px] text-sm text-white">
            {bookmarks.length}
          </span>
        </div>

        {/* FaRegEnvelope */}
        <div onClick={toggleEnvelopeMenu} className="relative">
          <FaRegEnvelope className="cursor-pointer text-[20px]" />
          <span className="absolute -bottom-[13px] -right-2 flex items-center justify-center rounded-full bg-[#80FA23] px-[5px] text-sm text-white">
            0
          </span>
        </div>
        {/* MdOutlineNotificationsNone */}
        <div className="relative">
          <MdOutlineNotificationsNone
            onClick={toggleNotificationMenu}
            className="cursor-pointer text-2xl"
          />
          <span className="absolute -bottom-[10px] -right-[9px] flex items-center justify-center rounded-full bg-[#FA7921] px-[6px] text-sm text-white">
            0
          </span>
        </div>
        {/* MdViewList */}
        {/* <div className="relative">
          <MdViewList
            onClick={toggleListMenu}
            className="cursor-pointer text-2xl"
          />
          <span className="absolute -bottom-[10px] -right-2 flex items-center justify-center rounded-full bg-[#EDD840] px-[5px] text-sm text-white">
            6
          </span>
        </div> */}
      </div>

      <div className="flex items-center gap-4 rounded-lg bg-white p-2">
        {/* Sign In Button */}
        <Link
          to={"/Login_Page"}
          className="flex h-[40px] w-[80px] items-center rounded-md bg-blue-600 font-medium text-white hover:scale-105 max-md:hidden"
        >
          <FaSignInAlt className="mr-1" /> {/* Sign In Icon */}
          Sign In
        </Link>

        <UserOpenMenuIcon
          isOpen={isOpen}
          menuRef={menuRef}
          toggleMenu={toggleMenu}
        />

        {/* Publish Button */}
        <Link
          to={"/Publish_Page"}
          className="flex h-[40px] w-[80px] items-center rounded-md bg-green-600 font-medium text-white transition-transform duration-300 ease-in-out hover:scale-105 max-md:hidden"
        >
          <FaPaperPlane className="mr-1" />
          Publish
        </Link>
        {/* user Navbar menu */}
        <button
          className="flex hidden h-[40px] w-[30px] items-center justify-center text-gray-600 transition-transform duration-300 hover:scale-110 max-md:block"
          onClick={toggleUserMenu}
          aria-label="User Menu"
        >
          <FiSearch className="ml-2 text-[20px]" /></button>

        {/* Hamburger Menu Icon */}
        <button
          className="flex hidden h-[40px] items-center justify-center text-gray-600 transition-transform duration-300 hover:scale-110 max-md:block"
          onClick={toggleBarMenu}
          aria-label="Toggle Menu"
        >
          <FaBars className="text-[24px]" />
        </button>
      </div>
    </>
  );
};

export default IconsNavbar;
