import React from "react";

const Contact_Text_Area = ({
  name,
  value,
  onChange,
  classNameInput,
  rows,
  placeholder,
}) => {
  return (
    <>
      {/* <label className="block text-sm font-medium text-gray-600">Message</label> */}
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        className={classNameInput}
        placeholder={placeholder}
        rows={rows}
      />
    </>
  );
};

export default Contact_Text_Area;
