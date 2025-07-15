import React from "react";
import { Link } from "react-router-dom";

const Links = ({ handleLinkClick, routerLinks, icons, LinkName }) => {
  return (
    <Link to={routerLinks} onClick={handleLinkClick}>
      <li className="mt-2 flex cursor-pointer items-center text-lg text-gray-800 transition duration-300 hover:text-blue-500">
        <div className="mr-4 rounded-full bg-blue-100 p-3 text-blue-600">
          {icons}
        </div>
        {LinkName}
      </li>
    </Link>
  );
};

export default Links;
