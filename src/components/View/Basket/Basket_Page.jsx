import Basket_Cart_Inside from "../../Shared/Basket/Basket_Cart_Inside";
import { Basket_Cart_Footer } from "../../Shared/Basket/Basket_Cart_Footer";
import { Basket_Link } from "../../Shared/Basket/Basket_Mock";
import globalBasketData from "../../../store/zustandStore";
// import Basket_ClearAndCheckOut from "./Basket_ClearAndCheckOut";
const Basket_Page = () => {
   const { basketData, increment, decrement } = globalBasketData(
    (state) => state,
  );
  // const withNavbar =
  //   " max-2xl:w-[1020px] max-xl:w-[1020px] max-md2:w-[710px] max-md:w-[640px]   max-lg:w-[725px]   max-sm:w-[600px] max-sm2:w-[550px]  max-sm5:w-[470px] max-sm4:w-[500px] max-sm3:w-[540px]";
 const basketWidth =
  "mx-auto w-full max-w-[1200px] px-4 sm:px-6 md:px-8"; // ekran ölçüsünə uyğun paddings və max-width

    return (
    <div className={`${basketWidth} mx-auto   py-4 w-full`}>
      <h1 className="mb-10 text-center text-3xl font-bold">Your Basket</h1>
      <div className="grid gap-8 lg:grid-cols-2">
        {basketData.length > 0 ? (
          basketData.map((item) => (
            <Basket_Cart_Inside key={item.id} id={item.id} {...item} decrement={decrement} increment={increment}/>
          ))
        ) : (
          <p className="col-span-2 text-center text-lg text-gray-600">
            Your basket is empty.
          </p>
        )}
      </div>
      {Basket_Link.length > 0 && <Basket_Cart_Footer />}
    </div>
  );
};

export default Basket_Page;
