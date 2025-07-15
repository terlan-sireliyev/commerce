import React, { useState } from "react";
import {
  Select_Publish_Category,
  Select_Publish_Sub_Category,
} from "../../Ui/selects/Select_Publish/Select_Publish";
import { My_Title } from "../../Ui/inputs/Publish/Inputs";
import Contact_Text_Area from "../../Ui/textArea/Contact_Text_Area";

const Publish_Header_Ui = () => {
  const [more,setMore] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    if (value.length <= 100) {
      setMore(value)
    }
  }
  return (
    <>
      <div className="grid grid-cols-2 pb-5">
        <div className="flex flex-col items-center">
          <Select_Publish_Category
            cls={"w-[80%] rounded-[3px] border py-2 pl-2 focus:outline-none"}
          />
        </div>
        <div className="flex flex-col items-center">
          <Select_Publish_Sub_Category
            cls={"w-[80%] rounded-[3px] border py-2 pl-2 focus:outline-none"}
          />
        </div>
      </div>
      <div className="mt-4">
        <h1 className="mb-1 ml-[33px]">Title</h1>
        <div className="relative flex items-center justify-center">
          <My_Title handleChange={handleChange} more={more} />
          <span className="absolute right-[34px] bg-gray-200 p-[8px] sm:right-[20px]">
                <p>{more.length} /100 characters</p>
          </span>
        </div>
      </div>
      <div className="mt-4">
        <h1 className="mb-1 ml-[33px]">Description</h1>
        <div className="flex items-center justify-center">
          <Contact_Text_Area
            classNameInput={
              "w-[90%] rounded-[3px] border px-2 py-[4px] focus:outline-none"
            }
            rows={"5"}
          />
        </div>
      </div>
    </>
  );
};

export default Publish_Header_Ui;
