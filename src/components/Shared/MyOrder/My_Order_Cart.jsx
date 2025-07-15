import React from "react";
import { MyOrderData } from "./My_Order_Mock";
import {
  My_Order_Btn_View,
  My_Order_Btn_ShoppingContinue,
} from "../../Ui/buttons/Order_Buttons";
const My_Order_Cart = () => {
  return (
    <div className="mx-auto rounded-xl bg-gray-100 px-4 py-16">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-gray-900">Your Orders</h1>
        <p className="text-lg text-gray-600">
          Browse your past orders and stay updated on the status.
        </p>
      </div>

      <div className="space-y-6">
        {/* Displaying each order as a vertical list */}
        {MyOrderData.map((item) => (
          <div
            key={item.id}
            className="rounded-lg bg-white p-6 shadow-md transition-shadow duration-300 hover:shadow-xl"
          >
            <div className="grid grid-cols-5 gap-4">
              <div className="col-span-1 max-lg:col-span-2 max-md:col-span-2">
                {/* Product Image */}
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-full w-full object-cover shadow-sm"
                />
              </div>
              <div className="col-span-2 max-lg:col-span-3 max-md:col-span-3">
                <h3 className="text-xl font-semibold text-gray-800">
                  {item.name}
                </h3>
                <p className="text-gray-600">Quantity: {item.quantity}</p>
                <p className="text-lg font-medium text-gray-900">
                  ${item.price.toFixed(2)}
                </p>
                <p
                  className={`text-sm font-medium ${item.status === "Delivered" ? "text-green-500" : "text-blue-500"}`}
                >
                  Status: {item.status}
                </p>
                <p className="mt-1 text-sm text-gray-500">
                  Order Date: {item.orderDate}
                </p>
                {/* Country of Origin and Ordered From */}
                <p className="mt-2 text-sm text-gray-600">
                  Country of Origin:{" "}
                  <span className="font-medium">{item.countryOfOrigin}</span>
                </p>
                <p className="text-sm text-gray-600">
                  Ordered From:{" "}
                  <span className="font-medium">{item.countryOrderedFrom}</span>
                </p>
              </div>
              {/* View Details Button */}
              <div className="col-span-2 mt-5 flex items-center justify-center max-lg:col-span-5">
                <My_Order_Btn_View />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <My_Order_Btn_ShoppingContinue />
      </div>
    </div>
  );
};

export default My_Order_Cart;
