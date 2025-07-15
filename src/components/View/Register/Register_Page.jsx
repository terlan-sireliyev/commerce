import React from "react";
import Social_Media_Login from "../../Shared/Social_Media_Login";
import DontHaveAccount from "../../Shared/DontHaveAccount";
import Register_Common_Inputs from "./Register_Common_Inputs";
import { My_Login_Btn } from "../../Ui/buttons/Order_Buttons";

const Register_Page = () => {
  const [formRegister, setFormRegister] = React.useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const changeRegisterInputs = (e) => {
    const { name, value } = e.target;
    setFormRegister((prevInpVal) => ({
      ...prevInpVal,
      [name]: value,
    }));
  };

  const registerSubmit = (e) => {
    e.preventDefault();
    console.log(formRegister);
  };

  return (
    <div className="flex items-center justify-center bg-gray-100 py-4">
      <div className="w-full max-w-md space-y-8 rounded-lg bg-white p-8 shadow-md">
        <h2 className="text-center text-2xl font-bold text-gray-800">
          Sign Up
        </h2>
        <form onSubmit={registerSubmit} className="space-y-6">
          <Register_Common_Inputs
            formRegister={formRegister}
            changeRegisterInputs={changeRegisterInputs}
          />
          <My_Login_Btn />
        </form>
        <DontHaveAccount
          dontHaceAccountContext={" Already have an account?"}
          sign={"Sign In"}
          link={"/Login_Page"}
        />
        <div className="mt-8 space-y-4">
          <Social_Media_Login />
        </div>
      </div>
    </div>
  );
};

export default Register_Page;
