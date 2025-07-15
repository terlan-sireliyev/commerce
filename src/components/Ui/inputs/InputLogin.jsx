import React from "react";

const InputLogin = ({
  classNameInput,
  classNameLabel,
  type = "text",
  htmlFor,
  labelText,
  placeholder,
  onChange,
  value,
  name,
}) => {
  return (
    <>
      {" "}
      {labelText && (
        <label className={classNameLabel} htmlFor={htmlFor}>
          {labelText}
        </label>
      )}
      <input
        type={type}
        className={classNameInput}
        placeholder={placeholder}
        id={htmlFor}
        value={value}
        name={name}
        onChange={onChange}
      />
    </>
  );
};

export default InputLogin;
