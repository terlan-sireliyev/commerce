import React from "react";
import Btn from "./Btn";
import globalBasketData from "../../../zustandStore";
// Function 1: My_Order_Btn_View
const My_Order_Btn_View = () => {
  return (
    <Btn
      className={
        "rounded-full bg-blue-600 px-6 py-2 text-sm text-white transition-all hover:bg-blue-500"
      }
      btnName={"View Details"}
    />
  );
};

// Function 2: My_Order_Btn_ShoppingContinue
const My_Order_Btn_ShoppingContinue = () => {
  return (
    <Btn
      btnName="Continue Shopping"
      className="rounded-full bg-green-600 px-12 py-3 text-xl font-semibold text-white transition-all hover:bg-green-500"
    />
  );
};

// Function 3: My_Login
const My_Login_Btn = () => {
  return (
    <Btn
      btnName="Sign In"
      className="w-full rounded-lg bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:bg-blue-700 focus:outline-none"
    />
  );
};

// Function 4: Contact send message btn
const My_Contact_Btn = ({ decrement }) => {
  return (
    <Btn
      decrement={decrement}
      btnName="Send Message"
      className="w-full rounded-lg bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:bg-blue-700 focus:outline-none"
    />
  );
};
// Function 5: Contact send message btn
const My_Basket_Delet_Btn = ({itemId}) => {
  const { removeFromCart } = globalBasketData((state) => state);

  const handleDelet = () => {
    removeFromCart(itemId); // məhsulun ID-si ilə azaldırıq
  };
  return (
    <Btn
      // id={id}
      decrement={handleDelet}
      btnName="Remove"
      className="ml-4 rounded-md bg-red-500 px-4 py-2 text-white hover:bg-red-600"
    />
  );
};

// Function 6: Incriment button click
const My_Basket_increment_Btn = ({ itemId }) => {
  const { increment } = globalBasketData((state) => state);

  const handleIncrement = () => {
    increment(itemId); // məhsulun ID-si ilə azaldırıq
  };
  return (
    <Btn
      decrement={handleIncrement}
      btnName="+"
      className="rounded-md bg-gray-200 px-3 py-2 hover:bg-gray-300"
    />
  );
};

// Function 7:  decrement_Btn button click
const My_Basket_decrement_Btn = ({ itemId }) => {
  const { decrement } = globalBasketData((state) => state);

  const handleDecrement = () => {
    decrement(itemId); // məhsulun ID-si ilə azaldırıq
  };
  return (
    <Btn

      decrement={handleDecrement}
      btnName="-"
      className="rounded-md bg-gray-200 px-3 py-2 hover:bg-gray-300"
    />
  );
};

//Function 8:Shopping
const My_Shopping_Btn = () => {
  return (
    <Btn
      btnName="Continue Shopping"
      className="w-full rounded-md bg-gray-400 px-6 py-3 text-white hover:bg-gray-500"
    />
  );
};

//Function 9:Proceed to Continue
const My_Continue_Btn = () => {
  return (
    <Btn
      btnName="Proceed to Checkout"
      className="w-full rounded-md bg-green-500 px-6 py-3 text-white hover:bg-green-600"
    />
  );
};

export {
  My_Order_Btn_View,
  My_Order_Btn_ShoppingContinue,
  My_Login_Btn,
  My_Contact_Btn,
  My_Basket_Delet_Btn,
  My_Basket_increment_Btn,
  My_Basket_decrement_Btn,
  My_Shopping_Btn,
  My_Continue_Btn,
};
