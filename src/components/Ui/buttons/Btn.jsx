import React from "react";

const Btn = ({ className, btnName,decrement}) => {
  return <button onClick={decrement} className={className}>{btnName}</button>;
};

export default Btn;
