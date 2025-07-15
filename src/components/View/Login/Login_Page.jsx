import React from "react";
import Social_Media_Login from "../../Shared/Social_Media_Login";
import Login_Common_Inputs from "./Login_Common_inputs";
import DontHaveAccount from "../../Shared/DontHaveAccount";
import { My_Login_Btn } from "../../Ui/buttons/Order_Buttons";

const Login_Page = () => {
  const [formLogin, setFormLogin] = React.useState({
    email: "",
    password: "",
  });

  const changeLoginInputs = (e) => {
    const { name, value } = e.target;
    setFormLogin((prevInpVal) => ({
      ...prevInpVal,
      [name]: value,
    }));
  };

  const loginSubmit = (e) => {
    e.preventDefault();
    console.log(formLogin);
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md space-y-8 rounded-lg bg-white p-8 shadow-md">
        <h2 className="text-center text-2xl font-bold text-gray-800">
          Sign In
        </h2>
        <form onSubmit={loginSubmit} className="space-y-6">
          <Login_Common_Inputs
            formLogin={formLogin}
            changeLoginInputs={changeLoginInputs}
          />
          <My_Login_Btn />
        </form>
        <DontHaveAccount
          dontHaceAccountContext={"Don’t have an account?"}
          sign={"Sign up"}
          link={"/Register_Page"}
        />
        <div className="mt-8 space-y-4">
          <Social_Media_Login />
        </div>
      </div>
    </div>
  );
};

export default Login_Page;
