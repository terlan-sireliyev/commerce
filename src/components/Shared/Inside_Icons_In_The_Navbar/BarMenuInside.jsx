import { useContext } from "react";
import { Link } from "react-router-dom";
import { saveContext } from "../../../store/contextStore/DinamicOpenMenu";
import Login_Comp from "../Login_Register/Login_Comp";
import Register_Comp from "../Login_Register/Register_Comp";
import Links from "../Links";
import { navigationLinks } from "../../../constants/navigation";

const BarMenuInside = () => {
  const { toggleBarMenu } = useContext(saveContext);

  const handleLinkClick = () => {
    toggleBarMenu();
  };

  return (
    <div className="flex flex-col space-y-4 rounded-lg bg-white px-6">
      {/* User Information */}
      <div className="mb-4 flex items-center space-x-4 border-b pb-4">
        <img
          src={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7NWttsEvAfBbaLehwK3oLrf_3AX_1tgfblg&s"
          }
          alt={`profile`}
          className="h-12 w-12 rounded-full border-2 border-gray-300 shadow-md"
        />
        <div>
          <h3 className="text-lg font-semibold text-gray-800">{"John Doe"}</h3>
          <p className="text-sm text-gray-500">Welcome back!</p>
        </div>
      </div>

      {/* Add New Listing Button */}
      <div className="w-full">
        <Link
          onClick={handleLinkClick}
          to={"/Publish_Page"}
          className="flex w-full items-center justify-center space-x-3 rounded-lg bg-blue-500 py-3 text-lg text-white shadow-md transition duration-300 hover:bg-blue-600"
        >
          <span>Add New Listing</span>
        </Link>
      </div>

      {/* Menu List */}
      <div className="w-full space-y-4">
        <ul className="m-0 list-none p-0">
          {navigationLinks.map((item) => {
            const Icon = item.icon;

            return (
              <Links
                key={item.id}
                routerLinks={item.href}
                LinkName={item.title}
                icons={<Icon className="text-xl" />}
                //  icons={item.icon}
                handleLinkClick={handleLinkClick}
              />
            );
          })}
        </ul>
      </div>

      {/* Login/Register Buttons */}
      <div className="w-full space-y-4">
        <Login_Comp handleLinkClick={handleLinkClick} />
        <Register_Comp handleLinkClick={handleLinkClick} />
      </div>
    </div>
  );
};

export default BarMenuInside;
