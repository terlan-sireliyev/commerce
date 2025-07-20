import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductShortInfo from "../../Shared/ProductSingle/ProductShortInfo";
import ProductSingleHeader from "../../Shared/ProductSingle/ProductSingleHeader";
import ProductInformation from "../../Shared/ProductSingle/ProductInformation";
import ProductSingleDescription from "../../Shared/ProductSingle/ProductSingleDescription";
import ProductContactSeller from "../../Shared/ProductSingle/ProductContactSeller";
import ProductSingleSlider from "../../Shared/ProductSingle/ProductSingleSlider";
import ProductComment from "../../Shared/ProductSingle/ProductComment";

const ProductDetails = () => {
  const { productId } = useParams(); // Get productId from URL
  // const navigate = useNavigate(); // Navigation hook
  const [productData, setProductData] = useState(null); // Store product data
  // const [loading, setLoading] = useState(true); // Loading state
  // const [error, setError] = useState(null); // Error state

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products/" + productId).then((res) => {
      setProductData(res.data);
    });
  }, [productId]);

const WidthAllPage =
  "mx-auto w-full max-w-[1200px] px-4 sm:px-6 md:px-8"; // ekran ölçüsünə uyğun paddings və max-width

  return (
    <div className={`${WidthAllPage} mx-auto w-[1020px] `}>
      {/* Navbar and header */}
      <ProductSingleHeader productData={productData} />
      {/* Pass product data here */}
      <div
        className={`mt-3 grid grid-cols-3 max-xl:grid-cols-3 max-lg:grid-cols-1 max-md:grid-cols-1`}
      >
        {/* Left side - Product Image, Description, Info */}
        <div className="col-span-2">
          <ProductSingleSlider productData={productData} />
          {/* Pass product data */}
          <div className=" ">
            <ProductShortInfo productData={productData} />
            {/* Pass product data */}
            <ProductInformation productData={productData} />
            {/* Pass product data */}
            <ProductSingleDescription productData={productData} />
            {/* Pass product data */}
            <ProductComment />
            {/* Pass product data */}
          </div>
        </div>
        {/* Right side - Contact Seller */}
        <div className="max-sm:ml-0">
          <ProductContactSeller productData={productData} />
          {/* Pass product data */}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
