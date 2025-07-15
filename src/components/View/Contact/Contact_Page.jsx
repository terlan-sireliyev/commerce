import React from "react";
import Contact_Common_İnputs from "./Contact_Common_İnputs";
import Contact_Address from "../../Shared/Contact_Address";
import { My_Contact_Btn } from "../../Ui/buttons/Order_Buttons";

const Contact_Page = () => {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-2xl space-y-8 rounded-lg bg-white p-8 shadow-md">
        <h2 className="text-center text-3xl font-bold text-gray-800">
          Contact Us
        </h2>
        <Contact_Address />
        <form onSubmit={handleSubmit} className="space-y-6">
          <Contact_Common_İnputs
            formLogin={formData}
            changeLoginInputs={handleChange}
          />
          <My_Contact_Btn />
        </form>
      </div>
    </div>
  );
};

export default Contact_Page;
