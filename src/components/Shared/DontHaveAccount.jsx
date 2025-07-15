import React from "react";
import { Link } from "react-router-dom";

const DontHaveAccount = ({ dontHaceAccountContext, sign, link }) => {
  return (
    <div className="mt-6">
      <p className="text-center text-sm text-gray-600">
        {dontHaceAccountContext}
        <Link to={link} className="text-blue-500 hover:underline">
          {sign}
        </Link>
      </p>
    </div>
  );
};

export default DontHaveAccount;
