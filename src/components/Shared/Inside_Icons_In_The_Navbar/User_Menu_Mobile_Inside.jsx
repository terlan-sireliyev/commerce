import React, { useContext, useState } from "react";
import { ApiContext } from "../../../contextStore/ApiProduct";

const User_Menu_Mobile_Inside = () => {
  // Set up state for each dropdown if they need to be controlled
  const [searchİnputValue, setSearchİnputValue] = useState("");
  const [category, setCategory] = useState("");
  const [subcategory, setSubcategory] = useState("");
  const [priceRange, setPriceRange] = useState("");

  const { products } = useContext(ApiContext);

  // Təkrarlanmayan kategoriyaları al
  const categoryOptions = [...new Set(products.map((p) => p.category))];

  const filteredProducts = category
    ? products.filter((p) => p.category === category)
    : [];

  // const priceOptions = [...new Set(filteredProducts.map((p) => p.price))].sort((a, b) => a - b);


  return (
    <div className="mx-auto w-full max-w-3xl bg-red-600 rounded-lg bg-white px-6">
      <h3 className="mb-6 text-center text-3xl font-semibold">
        Search Products
      </h3>

      {/* Search Bar */}
      <div className="relative mb-4 flex items-center justify-between overflow-hidden rounded-lg bg-gray-100 shadow-md">
        <input
          type="text"
          placeholder="Search for products"
          className="w-full rounded-lg border-none bg-gray-100 p-3 pl-2 text-gray-800 transition-all duration-300"
          onChange={(e) => setSearchİnputValue(e.target.value)}
        />
        <button className="absolute right-3 text-gray-500">Search</button>
      </div>

      {/* Filter Options */}
      <div className="mb-6">
        {/* Category Filter */}
        <div className="mb-4 flex gap-4">
          <div className="w-full">

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


        </div>

        {/* Price Range Filter */}
        <div className="mb-4 flex gap-4">
          <div className="w-full">
            <select
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
              className="w-full rounded-lg border bg-gray-100 p-3 text-gray-800"
            >
              <option value="">Select Product & Price</option>
              {filteredProducts.map((product, index) => (
                <option key={index} value={product.price}>
                  {product.title} — ${product.price}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Filter and Clear Buttons */}
        <div className="mb-4 text-center">
          <button className="w-full rounded-lg bg-blue-500 p-3 text-white transition duration-200 hover:bg-blue-600">
            Filter
          </button>
        </div>

        <div className="text-center">
          <button className="w-full rounded-lg bg-gray-300 p-3 text-gray-800 transition duration-200 hover:bg-gray-400">
            Clear Filters
          </button>
        </div>
      </div>

      {/* Search Results Placeholder */}
      <div>
        <h4 className="mb-2 text-xl font-semibold">Search Results</h4>
        <ul className="list-none p-0">
          <li className="cursor-pointer border-b border-gray-200 p-4 hover:bg-gray-50">
            <h5 className="font-semibold text-gray-800">Example Product</h5>
            <p className="text-sm text-gray-600">Category: Electronics</p>
            <p className="text-sm text-gray-600">Subcategory: Smartphones</p>
            <p className="text-sm text-gray-600">Price: $299</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default User_Menu_Mobile_Inside;
