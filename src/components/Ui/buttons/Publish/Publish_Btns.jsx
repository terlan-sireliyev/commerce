import React from "react";
import Btn from "./Btn";

// Function 1:Add publish
const My_Add_Publish = () => {
  return (
    <Btn
      className={
        "rounded-lg bg-blue-500 px-6 py-2 text-white hover:bg-blue-600"
      }
      btnName={"Add publish"}
    />
  );
};

export { My_Add_Publish };
