/* eslint-disable react-refresh/only-export-components */
// import { NAV_LINK } from "../../Layout/Navbar/MockNavbar";

import { NAV_LINK } from "../../../Layout/Navbar/MockNavbar";

import { NavLink } from "react-router-dom";
import { MdOutlineLogout } from "react-icons/md";
import { useSelector } from "react-redux";
import globalBasketData from "../../../store/zustandStore";

export { NAV_LINK, NavLink, MdOutlineLogout, useSelector, globalBasketData };
