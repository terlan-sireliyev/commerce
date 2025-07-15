import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to={"/"}>
      <h1 className="text-1xl first-letter:text-2xl first-letter:text-red-500">
        Te-commerce
      </h1>
    </Link>
  );
};

export default Logo;
