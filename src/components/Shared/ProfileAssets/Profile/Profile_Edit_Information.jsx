import React from "react";
import Profile_Edit_Form from "./Profile_Edit_Form";
const Profile_Edit_Information = () => {
 const country = [
  { value: "1", label: "Turkey" },
  { value: "2", label: "Azerbaijan" },
  { value: "3", label: "Belarus" },
];

const city = [
  { value: "1", label: "Baku" },
  { value: "2", label: "Istanbul" },
  { value: "3", label: "Minsk" },
];
  return (
    <div className="mx-auto rounded-lg bg-white py-6">
      <h2 className="mb-4 text-2xl font-semibold text-gray-800">
  Personal Information
</h2>
<p className="text-gray-500">Keep your profile information accurate for better communication.</p>

      <Profile_Edit_Form country={country} city={city} />
    </div>
  );
};

export default Profile_Edit_Information;
