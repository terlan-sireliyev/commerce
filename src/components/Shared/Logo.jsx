import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to={"/"}>
      <h1 className="text-1xl max-md:text-[15px] first-letter:text-2xl first-letter:text-red-500">
        Te-commerce
      </h1>
    </Link>
  );
};

export default Logo;
