import IconsNavbar from "./IconsNavbar";
// import Logo from "../../Shared/Logo";

import Logo from "../../components/Shared/Logo"
import DinamicOpenFromRightMenu from "../../components/Shared/ForOpenMenu/DinamicOpenFromRightMenu";
import Notifications from "../../components/Shared/Inside_Icons_In_The_Navbar/Notification/Notifications";
import BasketCart from "../../components/Shared/Inside_Icons_In_The_Navbar/Basket/BasketCart";
import BarMenuInside from "../../components/Shared/Inside_Icons_In_The_Navbar/BarMenuInside";
import User_Menu_Mobile_Inside from "../../components/Shared/Inside_Icons_In_The_Navbar/User_Menu_Mobile_Inside";
import Bar_Menu_Message from "../../components/Shared/Inside_Icons_In_The_Navbar/Message/Bar_Menu_Message";
// import SaveNavbarİcon from "../../Shared/SaveNavbarİcon";

import SaveNavbarİcon from "../../components/Shared/SaveNavbarİcon";


const Navbar = () => {
  const widthNavbar =
    " max-2xl:w-[1020px] max-xl:w-[1020px] max-md2:w-[710px] max-md:w-[640px]   max-lg:w-[725px]   max-sm:w-[600px] max-sm2:w-[550px]  max-sm5:w-[470px] max-sm4:w-[500px] max-sm3:w-[540px]";
  const navbarGrid =
    " grid w-[1025px] grid-cols-4 bg-white max-xl:grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-3 max-md3:w-[600px] max-sm:grid-cols-3";
  return (
    <>
      <div className="fixed top-0 z-[9999] flex w-full bg-white font-bold max-sm:px-3">
        <div className={`${widthNavbar} ${navbarGrid} -z-10 m-auto`}>
          {/* Logo start */}
          <div className="justifiy-center col-span-2 flex items-center max-lg:col-span-1">
            <Logo />
          </div>

          <div className="col-span-2 flex items-center justify-end gap-4 max-lg:col-span-2">
            <IconsNavbar />
          </div>
        </div>

        <DinamicOpenFromRightMenu
          menuType="basket"
          textContent={<BasketCart />}
        />
        <DinamicOpenFromRightMenu menuType="save" textContent={<SaveNavbarİcon />} />

        <DinamicOpenFromRightMenu
          menuType="envelope"
          textContent={<Bar_Menu_Message />}
        />
        <DinamicOpenFromRightMenu
          menuType="notification"
          textContent={<Notifications />}
        />

        <DinamicOpenFromRightMenu
          menuType="bar"
          textContent={<BarMenuInside />}
        />
        <DinamicOpenFromRightMenu
          menuType="user"
          textContent={<User_Menu_Mobile_Inside />}
        />
      </div>
    </>
  );
};

export default Navbar;
