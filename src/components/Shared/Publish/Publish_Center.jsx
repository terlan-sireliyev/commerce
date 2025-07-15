import React from "react";
import { Select_Publish_Price, Select_Publish_Valyuta } from "../../Ui/selects/Select_Publish/Select_Publish";

const Publish_Center = () => {
  return (
    <>
      <div className="m-auto mt-4 bg-green-200 px-8 py-4">
        <div className="m-auto grid grid-cols-2 gap-2 py-2">
          <div className="flex items-center rounded-md border bg-white">
            <span className="bg-gray-100 px-3 py-[8px] text-gray-600">
              <i className="fas fa-money-bill-alt"></i>
            </span>
            <div>
              <input
                type="text"
                className="py-2 pl-2 focus:outline-none"
                placeholder="Price"
              />
            </div>
            <div>
              <Select_Publish_Valyuta
                cls={"h-[40px] py-2 text-gray-600 focus:outline-none"}
              />
            </div>
          </div>

          <div className="flex items-center border bg-red-600 bg-white">
            <span className="bg-gray-100 px-3 py-[8px] text-gray-600">
              <i className="fas fa-pencil-alt"></i>
            </span>
            <div className="w-full">
              <Select_Publish_Price
                cls={"w-full py-2 pl-2 focus:outline-none"}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Publish_Center;
