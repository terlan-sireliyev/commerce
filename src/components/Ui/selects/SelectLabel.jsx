import React from "react";

const SelectLabel = ({ htmlFor, labelContent, labelClass }) => {
  return (
    <label className={labelClass} htmlFor={htmlFor}>
      {labelContent}
    </label>
  );
};
export default SelectLabel;
