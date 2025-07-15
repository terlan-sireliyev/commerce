import React from "react";
import { notifications } from "./Notification_Mock";

const Notification = () => {
  return (
    <div className="mx-auto max-w-md overflow-hidden rounded-lg bg-white">
      <div className="bg-blue-600 p-4 text-center text-lg font-semibold text-white">
        Notifications
      </div>

      <div className="">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className="mt-2 flex cursor-pointer items-start rounded-lg border border-gray-200 bg-gray-50 p-4 shadow-sm transition duration-200 hover:bg-gray-100"
          >
            <img
              src={notification.image}
              alt="Notification Icon"
              className="mr-4 h-12 w-12 rounded-full border-2 border-blue-500"
            />
            <div className="flex-1">
              <p className="font-medium text-gray-800">
                {notification.message}
              </p>
              <p className="mt-1 text-xs text-gray-500">{notification.time}</p>
            </div>
            <div className="ml-4 h-3 w-3 rounded-full bg-blue-500"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notification;
