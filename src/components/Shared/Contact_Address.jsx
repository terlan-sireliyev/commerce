import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact_Address = () => {
  return (
    <div className="grid grid-cols-1 gap-2 text-gray-600">
      <div className="flex items-center gap-2">
        <FaPhone className="text-lg text-blue-500" />
        <p>+(994 50) 695-55-89</p>
      </div>
      <div className="flex items-center gap-2">
        <FaEnvelope className="text-lg text-blue-500" />
        <p>tnberries@email.com</p>
      </div>
      <div className="flex items-center gap-2">
        <FaMapMarkerAlt className="text-lg text-blue-500" />
        <p>Atatürk pr 48 A</p>
      </div>
    </div>
  );
};

export default Contact_Address;
