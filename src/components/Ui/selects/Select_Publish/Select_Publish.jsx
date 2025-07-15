import React from "react";
import Option_Publish from "./Option_Publish";

// Function 1: Select_Publish_Category
const Select_Publish_Category = ({ cls }) => {
  const categories = ["Technology", "Health", "Business", "Education", "Travel"];
  return (
    <select name="" className={cls}>
      {categories.map((option) => (
        <Option_Publish key={option} option={option} />
      ))}
    </select>
  );
};
// Function 2: Select_Publish_Sub_Category
const Select_Publish_Sub_Category = ({ cls }) => {
  const subcategories = ["Web Development", "Mental Health", "Startups", "E-learning", "Adventure"];
  return (
    <>
      <select name="" className={cls}>
        {subcategories.map((option) => (
          <Option_Publish key={option} option={option} />
        ))}
      </select>
    </>
  );
};
// Function 3:Select_Publish_Price
const Select_Publish_Price = ({ cls }) => {
  const options = ["Any price", "free", "check seller"];
  return (
    <>
      <select name="" className={cls}>
        {options.map((option) => (
          <Option_Publish key={option} option={option} />
        ))}
      </select>
    </>
  );
};
// Function 4:Select_Publish_Valyuta
const Select_Publish_Valyuta = ({ cls }) => {
  const options = ["USD ($)", "EUR (€)"];
  return (
    <>
      <select name="" className={cls}>
        {options.map((option) => (
          <Option_Publish key={option} option={option} />
        ))}
      </select>
    </>
  );
};
//Function 5:Select_Publish_Transaction
const Select_Publish_Transaction = ({ cls, id }) => {
  const options = ["Any-Transaction", "Sell", "Buyu", "Rent", "Exchange"];
  return (
    <>
      <select name="" id={id} className={cls}>
        {options.map((option) => (
          <Option_Publish key={option} option={option} />
        ))}
      </select>
    </>
  );
};
//Function 6:Select_Publish_Condition
const Select_Publish_Condition = ({ cls, id }) => {
  const options = ["Any-Condition", "New", "Used"];
  return (
    <>
      <select name="" id={id} className={cls}>
        {options.map((option) => (
          <Option_Publish key={option} option={option} />
        ))}
      </select>
    </>
  );
};

//Function 7:Select_Publish_Country
const Select_Publish_Country = ({ cls, id }) => {
  const countries = [
    "Azerbaijan",
    "Turkey",
    "Belarus",
    "United States",
    "Germany",
    "France",
    "United Kingdom",
    "Canada",
    "Australia",
    "Russia"
  ];  return (
    <>
      <select name="" id={id} className={cls}>
        {countries.map((option) => (
          <Option_Publish key={option} option={option} />
        ))}
      </select>
    </>
  );
};

//Function 8:Select_Publish_City
const Select_Publish_City = ({ cls, id }) => {
 const cities = [
    "Baku",
    "Istanbul",
    "Minsk",
    "New York",
    "Berlin",
    "Paris",
    "London",
    "Toronto",
    "Sydney",
    "Moscow"
  ];  return (
    <>
      <select name="" id={id} className={cls}>
        {cities.map((option) => (
          <Option_Publish key={option} option={option} />
        ))}
      </select>
    </>
  );
};
export {
  Select_Publish_Category,
  Select_Publish_Sub_Category,
  Select_Publish_Price,
  Select_Publish_Transaction,
  Select_Publish_Condition,
  Select_Publish_Valyuta,
  Select_Publish_Country,
  Select_Publish_City,
};
