import React from "react";
import { Link } from "react-router-dom";

const Login_Comp = ({ handleLinkClick }) => {
  return (
    <Link
      onClick={handleLinkClick}
      to={"/Login_Page"}
      className="flex w-full items-center justify-center space-x-3 rounded-lg bg-blue-600 py-2 text-lg text-white shadow-md transition duration-300 hover:bg-blue-700"
    >
      <span>Login</span>
    </Link>
  );
};

export default Login_Comp;
