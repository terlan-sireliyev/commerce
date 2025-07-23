/* eslint-disable react/prop-types */
import InputCheckBoxLogin from "../../components/Ui/inputs/InputCheckBoxLogin";
import InputLogin from "../../components/Ui/inputs/InputLogin";
const Register_Common_Inputs = ({ formRegister, changeRegisterInputs }) => {
  return (
    <>
      <InputLogin
        type={"text"}
        htmlFor={"name"}
        name={"name"}
        value={formRegister.name}
        onChange={changeRegisterInputs}
        classNameInput={
          "mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        }
        classNameLabel={"block text-sm font-medium text-gray-600"}
        labelText={"Name"}
        placeholder={"Enter your name"}
      />

      <InputLogin
        type={"text"}
        htmlFor={"username"}
        name={"username"}
        value={formRegister.username}
        onChange={changeRegisterInputs}
        classNameInput={
          "mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        }
        classNameLabel={"block text-sm font-medium text-gray-600"}
        labelText={"Username"}
        placeholder={"Enter your username"}
      />

      <InputLogin
        type={"email"}
        htmlFor={"email"}
        name={"email"}
        value={formRegister.email}
        onChange={changeRegisterInputs}
        classNameInput={
          "mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        }
        classNameLabel={"block text-sm font-medium text-gray-600"}
        labelText={"Email Address"}
        placeholder={"Enter your email"}
      />

      <InputLogin
        type={"tel"}
        htmlFor={"number"}
        name={"number"}
        value={formRegister.number}
        onChange={changeRegisterInputs}
        classNameInput={
          "mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        }
        classNameLabel={"block text-sm font-medium text-gray-600"}
        labelText={"Contact Number"}
        placeholder={"Enter your contact number"}
      />

      <InputLogin
        type={"text"}
        htmlFor={"country"}
        name={"country"}
        value={formRegister.country}
        onChange={changeRegisterInputs}
        classNameInput={
          "mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        }
        classNameLabel={"block text-sm font-medium text-gray-600"}
        labelText={"Country"}
        placeholder={"Enter your country"}
      />

      <InputLogin
        type={"password"}
        htmlFor={"password"}
        name={"password"}
        value={formRegister.password}
        onChange={changeRegisterInputs}
        classNameInput={
          "mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        }
        classNameLabel={"block text-sm font-medium text-gray-600"}
        labelText={"Password"}
        placeholder={"Enter your password"}
      />

      <InputLogin
        type={"password"}
        htmlFor={"confirmPassword"}
        name={"confirmPassword"}
        value={formRegister.confirmPassword}
        onChange={changeRegisterInputs}
        classNameInput={
          "mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        }
        classNameLabel={"block text-sm font-medium text-gray-600"}
        labelText={"Confirm Password"}
        placeholder={"Confirm your password"}
      />

      <InputCheckBoxLogin
        type={"checkbox"}
        checkBoxTextContent={"I agree to the Terms & Conditions"}
        labelClassName={"flex -mt-4  items-center gap-2 text-sm text-gray-600"}
        linkClassName={"text-sm -mt-2 text-blue-500 hover:underline"}
      />
    </>
  );
};

export default Register_Common_Inputs;
