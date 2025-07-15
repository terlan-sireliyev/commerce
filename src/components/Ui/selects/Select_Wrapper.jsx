import React from "react";
import Option_List from "./Option_List";
import SelectLabel from "./SelectLabel";

const Select_Wrapper = ({ selectClass, labelContent, labelClass, country }) => {
  return (
    <>
      <SelectLabel
        labelContent={labelContent}
        labelClass={labelClass}
        htmlFor="mySelect"
      />
      <select className={selectClass}>
        <Option_List options={country} />
      </select>
    </>
  );
};
export default Select_Wrapper;
