import React, { useEffect, useState } from "react";
import Carts from "./Carts";
import axios from "axios";
import Category from "../../Shared/Category/Category";
const Cart = () => {
  const [product, setProduct] = useState(null);
  const [categories, setCategories] = useState(null);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      setProduct(res.data);
    });
  }, []);

  const filterCategory = categories
    ? product.filter((item) => item.category === categories)
    : product;

  const CartGrid =
    "grid-cols-3 gap-4 max-xl:grid-cols-3 max-sm:grid-cols-2 max-lg:grid-cols-3 max- max-md:grid-cols-2";
  const cartWidth =
    "max-lg:w-[725px] max-md:w-[620px] max-sm:w-[580px] max-sm2:w-[560px] max-sm5:w-[460px] max-sm4:w-[500px] max-sm3:w-[545px] max-2xl:w-[1010px] max-xl:w-[1000px] ";

  return (
    <div>
      <div className="mt-[80px]">
        <Category setCategories={setCategories} />
      </div>
      <div
        className={`${CartGrid} m-auto mt-4 grid max-sm5:grid-cols-1 w-full`}
      >
        {product ? (
          filterCategory?.map((data) => (
            <Carts
              key={data.id}
              id={data.id}
              title={data.title}
              price={data.price}
              description={data.description}
              image={data.image}
            /> 
          ))
        ) : (
          <div>Loading</div>
        )}
      </div>
    </div>
  );
};

export default Cart;
