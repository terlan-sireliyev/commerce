import React, { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import globalBasketData from "../../../../zustandStore";
import Basket_ClearAndCheckOut from "./Basket_ClearAndCheckOut";
import { Link } from "react-router-dom";
const BasketCart = () => {
  // const [openCheckOut, setOpenCheckOut] = useState(false);
  const { basketData, increment, decrement, removeFromCart } = globalBasketData(
    (state) => state,
  );

  return (
    <div className="">
      <div className="px-6 py-8">
        <h1 className="mb-4 text-2xl font-semibold">Your Cart</h1>
        <div>
          {basketData.length < 0 ? (
            <div className="text-center text-gray-500">Your cart is empty.</div>
          ) : (
            basketData.map((item) => (
              <div
                key={item.id}
                className="mb-4 flex items-center justify-between bg-white p-4 shadow-sm"
              >
                <Link to={`/singleProductPage/${item.id}`}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-20 w-20 rounded-md object-cover"
                  />
                </Link>
                <div className="ml-4 flex-1">
                  <h2 className="text-lg font-medium">{item.title}</h2>
                  <p className="text-gray-500">${item.price}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => decrement(item.id)}
                    className="rounded-full bg-gray-300 p-2"
                    // disabled={item.quantity === 1}
                  >
                    -
                  </button>
                  <span className="text-xl">{item.quantity}</span>
                  <button
                    onClick={() => increment(item.id)}
                    className="rounded-full bg-green-500 p-2 text-white"
                  >
                    +
                  </button>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500"
                  >
                    <FaTrashAlt />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
        {/* {basketData.length > 0 && (
          <div className="mt-6 flex justify-between">
            <div className="text-xl font-bold">
              Total: ${totalPrice.toFixed(2)}
            </div>
            <div>
              <button
                onClick={clearAll}
                className="mr-4 rounded bg-red-500 p-2 text-white"
              >
                Clear All
              </button>
              <button className="rounded bg-green-500 p-2 text-white">
                Checkout
              </button>
            </div>
          </div>
        )} */}
        <Basket_ClearAndCheckOut />
      </div>
    </div>
  );
};

export default BasketCart;
