import React from "react";
import My_Order_Cart from "../../Shared/MyOrder/My_Order_Cart";

const MyOrder_Page = () => {
 
    const WidthMyOrderPage =
  "mx-auto w-full max-w-[1200px] px-2 sm:px-6 md:px-8"; // ekran ölçüsünə uyğun paddings və max-width

  return (
    <div className={`${WidthMyOrderPage} m-auto mt-[90px] w-[1025px] bg-white`}>
      <My_Order_Cart />
    </div>
  );
};

export default MyOrder_Page;
