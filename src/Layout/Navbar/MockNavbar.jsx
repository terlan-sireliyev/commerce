// import { FaRegMessage } from "react-icons/fa6";
import { CiBookmark } from "react-icons/ci";
import { MdFavoriteBorder } from "react-icons/md";
import { ImProfile } from "react-icons/im";
import { MdOutlineNotificationsNone } from "react-icons/md";
import { FaRegEnvelope } from "react-icons/fa6";
import { MdShoppingBasket } from "react-icons/md";
import { HiShoppingBag } from "react-icons/hi2";
import { MdOutlineLogout } from "react-icons/md";
import { IoHomeOutline } from "react-icons/io5";

export const NAV_LINK = [
  {
    id: 0,
    icon: <IoHomeOutline />,
    title: "Home",
    href: "/",
  },
  {
    id: 1,
    icon: <ImProfile />,
    title: "Profile",
    href: "/profile/Profile_Page",
  },
  {
    id: 2,
    icon: <MdFavoriteBorder />,
    title: "Favorite items",
    href: "/Favorite_Page",
  },
  {
    id: 3,
    icon: <CiBookmark />,
    title: "Saves items",
    href: "/Save_Page",
  },
  {
    id: 4,
    icon: <FaRegEnvelope />,
    title: "Messages",
    href: "/Message_Page",
  },
  {
    id: 5,
    icon: <MdOutlineNotificationsNone />,
    title: "My Basket",
    href: "/Basket_Page",
  },
  {
    id: 6,
    icon: <MdShoppingBasket />,
    title: "My Order",
    href: "/MyOrder_Page",
  },
  {
    id: 7,
    icon: <HiShoppingBag />,
    title: "My All Order",
    href: "/MyAllOrder_Page",
  },
  {
    id: 8,
    icon: <MdOutlineLogout />,
    title: "Logout",
    href: "/logOut",
  },
];
