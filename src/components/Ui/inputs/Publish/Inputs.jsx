import Input from "./Input";

// Function 1: in publish page My_Zip_Code
const My_Zip_Code = () => {
  return (
    <Input
      type={"text"}
      name={"text"}
      placeholder={"Zip Code"}
      classNameInput={
        "w-full rounded-lg border py-2 pl-8 focus:outline-none focus:ring-2 focus:ring-blue-500 sm:placeholder:text-[12px]"
      }
    />
  );
};

// Function 2: in publish page My_Address
const My_Address = () => {
  return (
    <Input
      type={"text"}
      name={"text"}
      placeholder={"Street and location of item..."}
      classNameInput={
        "w-full rounded-lg border py-2 pl-8 focus:outline-none focus:ring-2 focus:ring-blue-500 sm:placeholder:text-[12px]"
      }
    />
  );
};

// Function 3:in publish page My_Address
const My_Name_Nick = () => {
  return (
    <Input
      type={"text"}
      name={"text"}
      placeholder={"Your name or nick..."}
      classNameInput={
        "w-full rounded-lg border py-2 pl-8 focus:outline-none focus:ring-2 focus:ring-blue-500 sm:placeholder:text-[12px]"
      }
    />
  );
};
// Function 4: in publish page My_Phone
const My_Phone = () => {
  return (
    <Input
      type={"text"}
      name={"text"}
      placeholder={"Mobile phone to contact you..."}
      classNameInput={
        "w-full rounded-lg border py-2 pl-8 focus:outline-none focus:ring-2 focus:ring-blue-500 sm:placeholder:text-[12px]"
      }
    />
  );
};

// Function 4: in publish page My_Phone
const My_Email = () => {
  return (
    <Input
      type={"email"}
      name={"email"}
      placeholder={"Mail to contact you..."}
      classNameInput={
        "w-full rounded-lg border py-2 pl-8 focus:outline-none focus:ring-2 focus:ring-blue-500 sm:placeholder:text-[12px]"
      }
    />
  );
};
// Function 5: in publish page Title
const My_Title = ({handleChange,more}) => {
  return (
    <Input
      type={"text"}
      name={"title"}
      placeholder={"Short title for listing..."}
      changeTextMore={handleChange}
      more={more}
      classNameInput={
        "w-[90%] rounded-[3px] border py-2 pl-2 focus:outline-none"
      }
    />
  );
};

export { My_Zip_Code, My_Address, My_Name_Nick, My_Phone, My_Email, My_Title };
