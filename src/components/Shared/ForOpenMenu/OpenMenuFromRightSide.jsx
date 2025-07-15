import React from "react";

const OpenMenuFromRightSide = ({ stateName, funtionName }) => {
  return (
    <>
      {stateName && (
        <div
          onClick={funtionName}
          className="fixed inset-0 -z-10 bg-black bg-opacity-50 transition-opacity duration-700 ease-in-out"
        ></div>
      )}
    </>
  );
};

export default OpenMenuFromRightSide;
