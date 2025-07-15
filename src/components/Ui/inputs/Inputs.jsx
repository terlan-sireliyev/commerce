import globalBasketData from "../../../zustandStore";
import Input from "./Input";

const My_increment_decrement_Input = ({ qnt }) => {
   const { basketData } = globalBasketData((state) => state);

  const currentItem = basketData.find((item) => item.id === qnt);

const quantity =
    currentItem && currentItem.quantity > 0 ? currentItem.quantity : 0;

  return (
    <Input
      type="number"
      quantity={quantity}
      name="quantity"
      classNameInput="w-12 rounded-md border border-gray-300 text-center"
    />
  );
};

export { My_increment_decrement_Input };
