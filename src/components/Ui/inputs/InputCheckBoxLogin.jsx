import React from "react";

const InputCheckBoxLogin = ({
  checkBoxTextContent,
  type,
  linkTextContent,
  className,
  labelClassName,
  linkClassName,
}) => {
  return (
    <>
      <label className={labelClassName}>
        <input type={type} className={className} />
        {checkBoxTextContent}
      </label>
      {/* text-sm text-blue-500 hover:underline */}
      <a href="#" className={linkClassName}>
        {linkTextContent}
      </a>
    </>
  );
};

export default InputCheckBoxLogin;
