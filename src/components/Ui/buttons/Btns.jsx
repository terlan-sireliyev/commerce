import React from "react";

const Btns = ({ btnText, btnClassName }) => {
  return (
    <>
      <button className={btnClassName}>{btnText}</button>
    </>
  );
};

export default Btns;
