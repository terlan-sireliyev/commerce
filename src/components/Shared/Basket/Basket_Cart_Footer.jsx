import {
  My_Continue_Btn,
  My_Shopping_Btn,
} from "../../Ui/buttons/Order_Buttons";
import globalBasketData from "../../../store/zustandStore";
import { FaReceipt, FaMoneyBill, FaTags } from "react-icons/fa";

export const Basket_Cart_Footer = () => {
  const { basketData } = globalBasketData((state) => state);

  const subtotal = basketData.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const tax = subtotal * 0.1;
  const total = subtotal + tax;

  return (
    <div className="mt-10 rounded-2xl bg-white p-8 shadow-xl border border-gray-200 transition-all duration-300 hover:shadow-2xl">
      <div className="mb-6 flex items-center justify-between border-b pb-4">
        <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
          <FaReceipt className="text-blue-600" />
          Price Breakdown
        </h3>
      </div>

      <div className="space-y-3 text-lg text-gray-800">
        <div className="flex justify-between items-center">
          <span className="flex items-center gap-2">
            <FaTags className="text-green-500" />
            Subtotal:
          </span>
          <span className="font-medium">${subtotal.toFixed(2)}</span>
        </div>

        <div className="flex justify-between items-center">
          <span className="flex items-center gap-2">
            <FaMoneyBill className="text-yellow-500" />
            Tax (10%):
          </span>
          <span className="font-medium">${tax.toFixed(2)}</span>
        </div>

        <div className="flex justify-between items-center text-xl font-bold text-gray-900 pt-3 border-t mt-4">
          <span>Total:</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </div>

      <div className="flex justify-between gap-4 mt-6">
        <My_Shopping_Btn />
        <My_Continue_Btn />
      </div>
    </div>
  );
};
