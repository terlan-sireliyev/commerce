import React, { useContext, useState } from "react";
import { ApiContext } from "../../../contextStore/ApiProduct";

const User_Menu_Mobile_Inside = () => {
  const [searchInputValue, setSearchInputValue] = useState("");
  const [category, setCategory] = useState("");
  // const [priceRange, setPriceRange] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);

  const { products } = useContext(ApiContext);

  // Unikal kateqoriyalar
  const categoryOptions = [...new Set(products.map((p) => p.category))];

  // Seçilən kateqoriyaya uyğun məhsullar
  const filteredByCategory = category
    ? products.filter((p) => p.category === category)
    : products

  // Filter funksiyası
  const handleFilter = () => {
    let results = products;

    if (searchInputValue.trim() !== "") {
      results = results.filter((p) =>
        p.title.toLowerCase().includes(searchInputValue.toLowerCase())
      );
    }

    if (category) {
      results = results.filter((p) => p.category === category);
    }

   setFilteredResults(results);
  };

  // Filterləri sıfırlamaq
  const handleClearFilters = () => {
    setSearchInputValue("");
    setCategory("");
    // setPriceRange("");
    setFilteredResults([]);
  };

  return (
    <div className="mx-auto w-full max-w-3xl bg-white rounded-lg px-6 py-6 shadow">
      <h3 className="mb-6 text-center text-3xl font-semibold">
        Search Products
      </h3>

      {/* Search Input */}
      <div className="relative mb-4 flex items-center justify-between rounded-lg bg-gray-100">
        <input
          type="text"
          placeholder="Search for products"
          className="w-full bg-gray-100 p-3 text-gray-800 outline-none"
          value={searchInputValue}
          onChange={(e) => setSearchInputValue(e.target.value)}
        />
      </div>

      {/* Category Filter */}
      <div className="mb-4">
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full rounded-lg border bg-gray-100 p-3 text-gray-800"
        >
          <option value="">Select Category</option>
          {categoryOptions.map((cat, index) => (
            <option key={index} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      {/* Price Filter */}
      {/* <div className="mb-4">
        <select
          value={priceRange}
          onChange={(e) => setPriceRange(e.target.value)}
          className="w-full rounded-lg border bg-gray-100 p-3 text-gray-800"
        >
          <option value="">Select Price</option>
          {priceOptions.map((price, index) => (
            <option key={index} value={price}>
              ${price}
            </option>
          ))}
        </select>
      </div> */}

      {/* Buttons */}
      <div className="mb-4 grid grid-cols-2 gap-4">
        <button
          onClick={handleFilter}
          className="rounded-lg bg-blue-500 p-3 text-white transition hover:bg-blue-600"
        >
          Filter
        </button>
        <button
          onClick={handleClearFilters}
          className="rounded-lg bg-gray-300 p-3 text-gray-800 transition hover:bg-gray-400"
        >
          Clear Filters
        </button>
      </div>

      {/* Results */}
      <div>
        <h4 className="mb-2 text-xl font-semibold">Search Results</h4>
        {filteredResults.length > 0 ? (
          <ul className="list-none p-0">
            {filteredResults.map((product) => (
              <li
                key={product.id}
                className="cursor-pointer border-b border-gray-200 p-4 hover:bg-gray-50"
              >
                <h5 className="font-semibold text-gray-800">{product.title}</h5>
                <p className="text-sm text-gray-600">Category: {product.category}</p>
                <p className="text-sm text-gray-600">Price: ${product.price}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No products found.</p>
        )}
      </div>
    </div>
  );
};

export default User_Menu_Mobile_Inside;
