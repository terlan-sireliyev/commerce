import { useEffect, useState } from "react";
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

  return (
    <div>
      <div className="mt-[80px]">
        <Category setCategories={setCategories} />
      </div>
      <div
        className={`${CartGrid} m-auto mt-4 grid w-full max-sm5:grid-cols-1`}
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
