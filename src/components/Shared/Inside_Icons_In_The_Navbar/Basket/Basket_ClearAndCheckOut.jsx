import React from "react";
import { globalBasketData } from "../../ProfileAssets";

const Basket_ClearAndCheckOut = () => {
  const { basketData, clearAll } = globalBasketData((state) => state);

  // Calculate total price
  const totalPrice = basketData.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  return (
    <>
      <div className="mt-6 flex items-center justify-between">
        {/* Total Price */}
        <div className="text-xl font-bold">Total: ${totalPrice.toFixed(2)}</div>

        {/* Buttons */}
        <div>
          <button
            onClick={clearAll}
            className="mr-4 rounded bg-red-500 p-2 text-white transition hover:bg-red-600"
          >
            Clear All
          </button>
          <button className="rounded bg-green-500 p-2 text-white transition hover:bg-green-600">
            Checkout
          </button>
        </div>
      </div>
    </>
  );
};

export default Basket_ClearAndCheckOut;
