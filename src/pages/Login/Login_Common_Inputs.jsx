import InputLogin from "../../components/Ui/inputs/InputLogin";
import InputCheckBoxLogin from "../../components/Ui/inputs/InputCheckBoxLogin";

// eslint-disable-next-line react/prop-types
const Login_Common_Inputs = ({ formLogin, changeLoginInputs }) => {
  return (
    <>
      <div className="flex flex-col">
        <InputLogin
          type={"email"}
          htmlFor={"email"}
          name={"email"}
          // eslint-disable-next-line react/prop-types
          value={formLogin.email}
          onChange={changeLoginInputs}
          classNameInput={
            "mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          }
          classNameLabel={"block text-sm font-medium text-gray-600"}
          labelText={"Email Address"}
          placeholder={"Enter your email"}
        />
      </div>
         <div className="flex flex-col">
         
      <InputLogin
        type={"password"}
        htmlFor={"password"}
        name={"password"}
        // eslint-disable-next-line react/prop-types
        value={formLogin.password}
        onChange={changeLoginInputs}
        classNameInput={
          "mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        }
        classNameLabel={"block text-sm font-medium text-gray-600"}
        labelText={"Password"}
        placeholder={"Enter your password"}
        />
        </div>
      <div className="flex items-center justify-between">
        <InputCheckBoxLogin
          type={"checkbox"}
          checkBoxTextContent={"Remember Me"}
          linkTextContent={"Forgot Password"}
          labelClassName={
            "flex -mt-4  items-center gap-2 text-sm text-gray-600"
          }
          linkClassName={"text-sm -mt-2 text-blue-500 hover:underline"}
        />
      </div>
    </>
  );
};

export default Login_Common_Inputs;
