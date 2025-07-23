import  { useContext } from "react";
import { IoClose } from "react-icons/io5";
import { saveContext } from "../../../store/contextStore/DinamicOpenMenu";
import styles from "../../../Layout/Navbar/navbar.module.css";

// eslint-disable-next-line react/prop-types
const DinamicOpenFromRightMenu = ({ menuType, textContent }) => {
  const {
    isNotificationMenuOpen,
    toggleNotificationMenu,
    isEnvelopeMenuOpen,
    toggleEnvelopeMenu,
    isBarMenuOpen,
    toggleBarMenu,
    isBasketMenuOpen,
    toggleBasketMenu,
    isUserMenuOpen,
    toggleUserMenu,
    isSaveOpen,
    toggleSave,
  } = useContext(saveContext);

  const getIsOpen = () => {
    if (menuType === "basket") return isBasketMenuOpen;
    if (menuType === "envelope") return isEnvelopeMenuOpen;
    if (menuType === "notification") return isNotificationMenuOpen;
    if (menuType === "bar") return isBarMenuOpen;
    if (menuType === "user") return isUserMenuOpen;
    if (menuType === "save") return isSaveOpen;
    return false;
  };

  const getToggleMenu = () => {
    if (menuType === "basket") return toggleBasketMenu;
    if (menuType === "envelope") return toggleEnvelopeMenu;
    if (menuType === "notification") return toggleNotificationMenu;
    if (menuType === "bar") return toggleBarMenu;
    if (menuType === "user") return toggleUserMenu;
    if (menuType === "save") return toggleSave;
    return false;
  };

const widthClass =
  menuType === "bar"
    ? "w-[400px] max-w-full sm:w-[400px]"
    : "w-[80%] lg:w-[30%]";

  return (
    <>
      <div
        className={`fixed right-0 top-0 z-50 h-full ${widthClass} bg-white text-black transition-transform duration-700 ease-in-out ${
          getIsOpen() ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="absolute -top-2 right-3 py-4 text-lg text-black">
          <IoClose
            className="cursor-pointer hover:rounded-full hover:bg-sky-700 hover:text-white"
            onClick={getToggleMenu()}
          />
        </div>
        <div
          className={`${styles.scrollbar_thin} ${styles.scrollbar} ${styles.scrollbar_track_slate_500} ${styles.scrollbar_thumb_rose_500} scrollbar-thumb-rose-500 scrollbar-track-slate-500 mt-6 h-full overflow-y-auto p-2 pb-8`}
        >
          {textContent}
        </div>
      </div>
      <div
        onClick={getToggleMenu()}
        className={`fixed left-0 top-0 h-full w-full bg-[#000000] opacity-[0.35] transition-transform duration-700 ease-in-out ${
          getIsOpen() ? "translate-x-0" : "translate-x-full"
        }`}
      ></div>
    </>
  );
};

export default DinamicOpenFromRightMenu;
