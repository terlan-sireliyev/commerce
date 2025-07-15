import React from "react";
import Publish_Header_Ui from "../../Shared/Publish/Publish_Header_Ui";
import Publish_Center from "../../Shared/Publish/Publish_Center";
import Publish_Footer from "../../Shared/Publish/Publish_Footer";

const PublishPage = () => (
  <div
    className="flex min-h-screen flex-col items-center bg-center"
    style={{
      backgroundImage:
        "url('https://veronika.mb-themes.com/oc-content/themes/veronika/images/auth-bg.jpg')",
    }}
  >
    <div className="mt-8 w-full max-w-2xl space-y-6 rounded-lg bg-white pb-8 shadow-md sm:rounded-none">
      <h2 className="rounded-tl-lg rounded-tr-lg bg-gray-200 p-6 text-lg font-bold">
        Publish Content
      </h2>
      <form>
        <p className="mb-1 ml-9">Category</p>
        <Publish_Header_Ui />

        <Publish_Center />

        <Publish_Footer />
      </form>
    </div>
  </div>
);

export default PublishPage;
