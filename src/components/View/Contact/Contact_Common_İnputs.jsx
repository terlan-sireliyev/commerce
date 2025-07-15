import React from "react";
import InputLogin from "../../Ui/inputs/InputLogin";
import Contact_Text_Area from "../../Ui/textArea/Contact_Text_Area";

const Contact_Common_İnputs = ({ formLogin, changeLoginInputs }) => {
  return (
    <>
      <InputLogin
        type={"text"}
        htmlFor={"name"}
        name={"name"}
        value={formLogin.name}
        onChange={changeLoginInputs}
        classNameInput={
          "mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        }
        classNameLabel={"block text-sm font-medium text-gray-600"}
        labelText={"Name"}
        placeholder={"Enter your name"}
      />

      <InputLogin
        type={"email"}
        htmlFor={"email"}
        name={"email"}
        value={formLogin.email}
        onChange={changeLoginInputs}
        classNameInput={
          "mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        }
        classNameLabel={"block text-sm font-medium text-gray-600"}
        labelText={"Password"}
        placeholder={"Enter your email address"}
      />
      <Contact_Text_Area
        name={"message"}
        placeholder={"Your message"}
        value={formLogin.message}
        onChange={changeLoginInputs}
        classNameInput={
          "mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        }
        rows={"4"}
      />
    </>
  );
};

export default Contact_Common_İnputs;
