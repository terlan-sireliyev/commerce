import axios from "axios";
import React, { useEffect, useState } from "react";
import Categories from "./Categories";

const Category = ({ setCategories }) => {
  const [category, setCategory] = useState([]);
  const [pro, setPro] = useState([]);
  const [activeCategory, setActiveCategory] = useState("");
  const [categoryCount, setCategoryCount] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const CategoryFetch = async () => {
      try {
        const { data } = await axios.get("https://fakestoreapi.com/products");
        setPro(data);

        const uniqueCategories = Array.from(
          new Set(data.map((item) => item.category))
        );
        setCategory(uniqueCategories);

        const counts = {};
        uniqueCategories.forEach((cat) => {
          counts[cat] = data.filter((item) => item.category === cat).length;
        });
        setCategoryCount(counts);
      } catch (error) {
        console.error("Error fetching categories", error);
      } finally {
        setLoading(false);
      }
    };

    CategoryFetch();
  }, []);

  const handleCategoryClick = (cateItem) => {
    setCategories(cateItem);
    setActiveCategory(cateItem);
  };

  return (
    <div className="mt-4">
      {!loading ? (
        <Categories
          handleCategoryClick={handleCategoryClick}
          category={category}
          activeCategory={activeCategory}
          pro={pro}
          categoryCount={categoryCount}
        />
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-4">
          {[...Array(4)].map((_, idx) => (
            <div
              key={idx}
              className="h-24 bg-gray-200 rounded-lg animate-pulse relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-[loading_1.2s_infinite]"></div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Category;
