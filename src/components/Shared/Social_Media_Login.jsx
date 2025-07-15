import React from "react";
import { FaFacebook, FaGoogle, FaTwitter } from "react-icons/fa";

const Social_Media_Login = () => {
  return (
    <>
      <p className="text-center text-sm text-gray-600">Or login with:</p>
      <div className="flex justify-center space-x-4">
        <button className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500 text-white transition duration-200 hover:bg-blue-600 focus:outline-none">
          <FaFacebook className="text-2xl" />
        </button>
        <button className="flex h-12 w-12 items-center justify-center rounded-full bg-red-500 text-white transition duration-200 hover:bg-red-600 focus:outline-none">
          <FaGoogle className="text-2xl" />
        </button>
        <button className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-400 text-white transition duration-200 hover:bg-blue-500 focus:outline-none">
          <FaTwitter className="text-2xl" />
        </button>
      </div>
    </>
  );
};

export default Social_Media_Login;
