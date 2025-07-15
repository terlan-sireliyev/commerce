import React from "react";
const Option_List = ({ options }) => {
  return options.map((opt) => (
    <option key={opt.value} value={opt.value}>
      {opt.label}
    </option>
  ));
};

export default Option_List;
