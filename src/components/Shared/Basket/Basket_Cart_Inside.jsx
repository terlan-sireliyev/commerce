/* eslint-disable react/prop-types */
import {
  My_Basket_Delet_Btn,
  My_Basket_decrement_Btn,
  My_Basket_increment_Btn,
} from "../../Ui/buttons/Order_Buttons"

import { My_increment_decrement_Input } from "../../Ui/inputs/Inputs";
import { globalBasketData } from "../ProfileAssets";

const BasketCartItem = ({ title, price, image, id }) => {
  const { basketData } = globalBasketData((state) => state);
  const currentItem = basketData.find((item) => item.id === id);
  const quantity = currentItem?.quantity >= 0 ? currentItem.quantity : 0;

  return (
    <div className="w-full max-w-2xl mx-auto mb-6 rounded-2xl border border-gray-300 bg-gradient-to-br from-white to-gray-50 shadow-lg overflow-hidden transition-transform hover:scale-[1.01]">
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 p-4 sm:p-6 relative">

        {/* Product Image */}
        <img
          src={image}
          alt={title}
          className="w-32 h-32 rounded-xl object-cover border border-gray-200 shadow-sm"
        />

        {/* Product Details */}
        <div className="flex-1 w-full">
          {/* Title and Price */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg sm:text-xl font-bold text-gray-800">
              {title}
            </h3>
            <p className="text-sm text-gray-500 mt-1">${price.toFixed(2)}</p>
          </div>

          {/* Quantity Controls */}
          <div className="mt-4 flex justify-center sm:justify-start items-center gap-3">
            <My_Basket_decrement_Btn itemId={id} />
            <My_increment_decrement_Input qnt={id} />
            <My_Basket_increment_Btn itemId={id} />
          </div>

          {/* Total Price */}
          <div className="mt-3 text-center sm:text-left">
            <p className="text-base sm:text-lg font-semibold text-indigo-600">
              Total: ${quantity >= 0 ? (price * quantity).toFixed(2) : "0.00"}
            </p>
          </div>
        </div>

        {/* Delete Button (Responsive) */}
        <div className="absolute top-2 right-2 sm:static sm:mt-0 sm:self-start">
          <My_Basket_Delet_Btn itemId={id} />
        </div>
      </div>
    </div>
  );
};

export default BasketCartItem;
