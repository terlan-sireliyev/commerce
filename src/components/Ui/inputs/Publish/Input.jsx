import React from "react";
//in publish page input
const Input = ({ type, classNameInput, name, placeholder,changeTextMore,more}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={classNameInput}
      onChange={changeTextMore}
      value={more}
      name={name}
    />
  );
};

export default Input;
