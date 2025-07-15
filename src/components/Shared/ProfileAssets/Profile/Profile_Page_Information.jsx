import React from "react";

const Profile_Page_Information = () => {
  const userInfo = [
    { label: "Your name", value: "John Doe" },
    { label: "Email Address", value: "contact@scriptsbundle.com" },
    { label: "Phone Number", value: "(0423) 12-2345-789" },
    { label: "Country", value: "England" },
    { label: "City", value: "London" },
    { label: "You are a", value: "Dealer" },
    { label: "Address", value: "Lahore, PK" },
  ];
  return (
    <div className="mx-auto">
      <h2 className="text-lg font-semibold">
        Manage Your Name, ID And Email Addresses.
      </h2>
      <p className="mb-4 text-sm text-gray-600">
        Below are the name and email addresses on file for your account.
      </p>

      <div className="space-y-2">
        {userInfo.map((item, index) => (
          <div key={index} className="flex justify-between border-b py-2">
            <span className="font-semibold text-gray-700">{item.label}</span>
            <span className="text-gray-800">{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profile_Page_Information;
