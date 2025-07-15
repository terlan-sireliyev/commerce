import React from "react";
import Favorite from "../../Shared/Inside_Icons_In_The_Navbar/Favorite";

const Favorite_Page = () => {
  const WidthAllPage =
  "mx-auto w-full max-w-[1200px] px-2 sm:px-6 md:px-8"; 

  return (
    <>
      <div className={`${WidthAllPage}`}>
        <Favorite />
      </div>
    </>
  );
};

export default Favorite_Page;
