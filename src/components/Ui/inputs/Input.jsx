import React from "react";

const Input = ({ type, classNameInput, name, quantity }) => {
  return (
    <div className="flex flex-col">
      <input
        type={type}
        className={classNameInput}
        value={quantity}
        readOnly
        min="0"
        name={name}
      />
    </div>
  );
};

export default Input;
