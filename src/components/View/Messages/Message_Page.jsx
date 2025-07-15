import React from "react";
import Message_Left from "../../Shared/Message/Message_Left";
import Message_Right from "../../Shared/Message/Message_Right";


const MessagePage = () => {
  const withNavbar =
    "max-2xl:w-[1020px] max-xl:w-[1020px] max-md2:w-[710px] max-md:w-[640px] max-lg:w-[725px] max-sm:w-[600px] max-sm2:w-[550px] max-sm5:w-[470px] max-sm4:w-[500px] max-sm3:w-[540px]";

  return (
    <div
      className={`${withNavbar} m-auto mt-[90px] flex h-screen w-[1025px] overflow-hidden rounded-lg shadow-lg max-md3:w-[600px]`}
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      <Message_Left />
      <Message_Right />
    </div>
  );
};

export default MessagePage;
