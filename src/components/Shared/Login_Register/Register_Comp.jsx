import React from "react";
import { Link } from "react-router-dom";

const Register_Comp = ({ handleLinkClick }) => {
  return (
    <Link
      to={"/Register_Page"}
      onClick={handleLinkClick}
      className="flex w-full items-center justify-center space-x-3 rounded-lg bg-green-600 py-2 text-lg text-white shadow-md transition duration-300 hover:bg-green-700"
    >
      <span>Register</span>
    </Link>
  );
};

export default Register_Comp;
