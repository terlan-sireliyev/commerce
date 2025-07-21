import { useSelector } from "react-redux";
import globalBasketData from "../../../zustandStore";
import { MdOutlineLogout, NAV_LINK, NavLink } from "./index";
import { useLocation } from "react-router";
import { useEffect } from "react";
const UserOpenMenuIcon = ({
  // eslint-disable-next-line react/prop-types
  menuRef,
  // eslint-disable-next-line react/prop-types
  toggleMenu,
  // eslint-disable-next-line react/prop-types
  isOpen,
  // eslint-disable-next-line react/prop-types
  userName = "John Doe",
}) => {
  const favoriteData = useSelector((state) => state.favoriteName.favoriteItems);
  const bookmarks = useSelector((state) => state.bookmarkName.bookmarks);
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const { basketData } = globalBasketData((state) => state);
  return (
    <div className="relative" ref={menuRef}>
      <img
        className="h-[40px] w-[40px] cursor-pointer rounded-full border-2 border-gray-300 shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg"
        src="https://cdn-icons-png.flaticon.com/512/219/219988.png"
        alt="User Icon"
        onClick={toggleMenu}
      />

      {isOpen && (
        <div className="absolute right-0 z-10 mt-3 w-64 origin-top-right scale-95 transform rounded-lg border border-gray-200 bg-white shadow-lg transition-all duration-300">
          <div className="flex items-center border-b border-gray-200 p-3">
            <img
              className="h-10 w-10 rounded-full border-2 border-blue-500"
              src="https://cdn-icons-png.flaticon.com/512/219/219988.png"
              alt="User"
            />
            <span className="ml-2 font-semibold text-gray-800">{userName}</span>
          </div>

          <ul className="p-2">
            {NAV_LINK.filter((link) => link.title !== "Logout").map((link) => (
              <li
                key={link.id}
                className={`my-1 ${link.title === "Home" ? "hidden max-sm:block" : ""}`}
              >
                <NavLink
                  onClick={toggleMenu}
                  to={link.href}
                  className={({ isActive }) =>
                    isActive
                      ? "block font-semibold text-blue-600"
                      : "block text-gray-700 transition-colors duration-300 hover:text-blue-500"
                  }
                >
                  <div className="flex items-center gap-3 rounded-md px-3 py-2 transition-all duration-200 hover:bg-blue-100">
                    <span className="text-[25px] text-blue-400">
                      {link.icon}
                    </span>
                    <span>{link.title}</span>
                    {link.title === "Favorite items" &&
                      favoriteData.length > 0 && (
                        <span className="ml-auto rounded-full bg-blue-200 px-2 py-0.5 text-xs text-gray-600">
                          {favoriteData.length}
                        </span>
                      )}
                    {link.title === "My Basket" && basketData.length > 0 && (
                      <span className="ml-auto rounded-full bg-blue-200 px-2 py-0.5 text-xs text-gray-600">
                        {basketData.length}
                      </span>
                    )}
                    {link.title === "Saves items" && bookmarks.length > 0 && (
                      <span className="ml-auto rounded-full bg-blue-200 px-2 py-0.5 text-xs text-gray-600">
                        {bookmarks.length}
                      </span>
                    )}
                  </div>
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Logout Button */}
          <div className="border-t border-gray-200">
            <button className="w-full p-3 text-left text-red-600 transition-colors duration-300 hover:bg-red-50">
              <p className="flex items-center gap-3 rounded-md px-3 py-2">
                <span>
                  <MdOutlineLogout />
                </span>
                <span>Logout</span>
              </p>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserOpenMenuIcon;
