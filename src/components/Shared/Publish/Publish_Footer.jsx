import React from "react";
import {
  My_Address,
  My_Email,
  My_Name_Nick,
  My_Phone,
  My_Zip_Code,
} from "../../Ui/inputs/Publish/Inputs";
import { My_Add_Publish } from "../../Ui/buttons/Publish/Publish_Btns";
import {
  Select_Publish_City,
  Select_Publish_Condition,
  Select_Publish_Country,
  Select_Publish_Transaction,
} from "../../Ui/selects/Select_Publish/Select_Publish";
import InputCheckBoxLogin from "../../Ui/inputs/InputCheckBoxLogin";

const Publish_Footer = () => {
  return (
    <>
      <div className="mx-auto mt-4 w-[90%]">
        <div className="mb-4 grid grid-cols-2 gap-4">
          <div className="relative">
            <i className="fas fa-exchange-alt absolute left-2 top-3 text-gray-500"></i>
            <Select_Publish_Transaction
              id={"transaction"}
              cls={
                "w-full rounded-lg border py-2 pl-8 pr-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              }
            />
          </div>
          <div className="relative">
            <i className="fas fa-tags absolute left-2 top-3 text-gray-500"></i>

            <Select_Publish_Condition
              id={"condition"}
              cls={
                "w-full rounded-lg border py-2 pl-8 pr-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              }
            />
          </div>
        </div>

        <div className="mb-4 grid grid-cols-2 gap-4">
          <div className="relative">
            <i className="fas fa-map-marker-alt absolute left-2 top-3 text-gray-500"></i>
            <Select_Publish_Country
              cls={
                "w-full rounded-lg border py-2 pl-8 pr-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              }
            />
          </div>
          <div className="relative">
            <i className="fas fa-city absolute left-2 top-3 text-gray-500"></i>
            <Select_Publish_City
              cls={
                "w-full rounded-lg border py-2 pl-8 pr-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              }
            />
          </div>
        </div>

        <div className="mb-4 grid grid-cols-2 gap-4">
          <div className="relative">
            <i className="fas fa-map-pin absolute left-2 top-3 text-gray-500"></i>
            <My_Zip_Code />
          </div>
          <div className="relative">
            <i className="fas fa-map absolute left-2 top-3 text-gray-500"></i>
            <My_Address />
          </div>
        </div>

        <div className="mb-4 grid grid-cols-2 gap-4">
          <div className="relative">
            <i className="fas fa-user absolute left-2 top-3 text-gray-500"></i>
            <My_Name_Nick />
          </div>
          <div className="relative">
            <i className="fas fa-phone absolute left-2 top-3 text-gray-500"></i>
            <My_Phone />
            <label className="mt-2 inline-flex items-center">
              <input
                type="checkbox"
                className="form-checkbox h-4 w-4 text-blue-600 focus:outline-none sm:placeholder:text-[12px]"
              />
              <span className="ml-2 text-sm text-gray-600">
                Phone visible on ad
              </span>
            </label>
          </div>
        </div>

        <div className="mb-6">
          <div className="relative">
            <i className="fas fa-envelope absolute left-2 top-3 text-gray-500"></i>
            <My_Email />
          </div>
          {/* <label className="mt-2 inline-flex items-center">
           
          </label> */}
          <InputCheckBoxLogin
            type={"checkbox"}
            checkBoxTextContent={"Email visible on ad"}
            className={
              "form-checkbox h-4 w-4 text-blue-600 focus:outline-none sm:placeholder:text-[12px]"
            }
            labelClassName={
              "mt-4 flex items-center gap-2 text-sm text-gray-600"
            }
            linkClassName={"text-sm text-blue-500 hover:underline"}
          />
        </div>

        <div className="text-right">
          <My_Add_Publish />
        </div>
      </div>
    </>
  );
};

export default Publish_Footer;
