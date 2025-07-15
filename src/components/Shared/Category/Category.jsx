import axios from "axios";
import React, { useEffect, useState } from "react";
import Categories from "./Categories";

const Category = ({ setCategories }) => {
  const [category, setCategory] = useState([]);
  const [pro, setPro] = useState([]);
  const [activeCategory, setActiveCategory] = useState("");
  const [categoryCount, setCategoryCount] = useState({});

  useEffect(() => {
    const CategoryFetch = async () => {
      try {
        const categoryAxios = await axios.get(
          "https://fakestoreapi.com/products",
        );
        await axios.get("https://fakestoreapi.com/products").then((res) => {
          setPro(res.data);
        });

        const ct = Array.from(
          new Set(categoryAxios.data.map((item) => item.category)),
        );
        setCategory(ct);

        const counts = {};
        ct.map((category) => {
          counts[category] = categoryAxios.data.filter(
            (item) => item.category === category,
          ).length;
        });
        setCategoryCount(counts);
      } catch (error) {
        console.error("Error fetching categories", error);
      }
    };
    CategoryFetch();
  }, []);

  const handleCategoryClick = (cateItem) => {
    setCategories(cateItem);
    setActiveCategory(cateItem);
  };

  return (
    <>
      <div>
        <Categories
          handleCategoryClick={handleCategoryClick}
          category={category}
          activeCategory={activeCategory}
          pro={pro}
          categoryCount={categoryCount}
        />
      </div>
    </>
  );
};

export default Category;
