import React from "react";

const Profile_Tabs = ({ setActiveTab, activeTab }) => {
  return (
    <div className="grid grid-cols-4 text-sm font-semibold text-gray-600">
      {["Profile", "Edit Profile", "Payments", "Notification Settings"].map(
        (tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-2 ${activeTab === tab ? "border-b-2 border-green-500 bg-[#F3F4F6] py-3 text-blue-500" : "border-b-2 border-gray-300 py-3 hover:text-blue-500"}`}
          >
            {tab}
          </button>
        ),
      )}
    </div>
  );
};

export default Profile_Tabs;
