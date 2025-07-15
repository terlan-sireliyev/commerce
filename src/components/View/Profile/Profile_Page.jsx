import React, { useState } from "react";
import Profile_Header from "../../Shared/ProfileAssets/Profile/Profile_Header";
import Profile_Tabs from "../../Shared/ProfileAssets/Profile/Profile_Tabs";
import Profile_Page_Information from "../../Shared/ProfileAssets/Profile/Profile_Page_Information";
import Profile_Edit_Information from "../../Shared/ProfileAssets/Profile/Profile_Edit_Information";
import ProfilePaymentsInformation from "../../Shared/ProfileAssets/Profile/Profile_Payments_Information";
import Profile_Notification from "../../Shared/ProfileAssets/Profile/Profile_Notification";

const Profile_Page = () => {
  const [activeTab, setActiveTab] = useState("Profile");

  const renderTabContent = () => {
    switch (activeTab) {
      case "Profile":
        return <Profile_Page_Information />;
      case "Edit Profile":
        return <Profile_Edit_Information />;
      case "Payments":
        return <ProfilePaymentsInformation />;
      case "Notification Settings":
        return <Profile_Notification/>
      default:
        return null;
    }
  };
  const gridClass =
    " max-md2:gird-cols-2 grid grid-cols-5 max-xl:grid-cols-5 max-md:grid-cols-5 max-sm:grid-cols-1 ";
  const withNavbar =
    " max-2xl:w-[1020px] max-xl:w-[1020px] max-md2:w-[710px] max-md:w-[640px]   max-lg:w-[725px]   max-sm:w-[600px] max-sm2:w-[550px]  max-sm5:w-[470px] max-sm4:w-[500px] max-sm3:w-[540px]";
     const WidthMyOrderPage =
  "mx-auto w-full max-w-[1200px] px-2 sm:px-6 md:px-8";

    return (
    <div
      className={`${WidthMyOrderPage}  overflow-hidden`}
    >
      {/* User Info Section */}
      <div className={`${gridClass} border-b max-lg:pr-0`}>
        <Profile_Header />
      </div>

      {/* Navigation Tabs */}
      <div className="border-b">
        <Profile_Tabs setActiveTab={setActiveTab} activeTab={activeTab} />
      </div>

      {/* Tab Content */}
      <div className="px-2 py-6">{renderTabContent()}</div>
    </div>
  );
};

export default Profile_Page;
