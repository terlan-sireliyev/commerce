import React, { useState } from "react";
import { FaBell, FaTrash, FaCheckCircle, FaInfoCircle } from "react-icons/fa";

const initialNotifications = [
  {
    id: 1,
    title: "Welcome to our platform!",
    message: "Thanks for signing up. Start exploring your dashboard now.",
    date: "2024-07-13T14:00:00",
    read: false,
    type: "info",
  },
  {
    id: 2,
    title: "Subscription Payment",
    message: "Your payment of $29.99 has been successfully processed.",
    date: "2024-07-12T10:30:00",
    read: true,
    type: "success",
  },
  {
    id: 3,
    title: "New Feature Released!",
    message: "Check out the new dark mode in your profile settings.",
    date: "2024-07-10T16:45:00",
    read: false,
    type: "info",
  },
];

const getTypeIcon = (type) => {
  switch (type) {
    case "success":
      return <FaCheckCircle className="text-green-500 text-lg" />;
    case "info":
    default:
      return <FaInfoCircle className="text-blue-500 text-lg" />;
  }
};

const formatDate = (dateString) => {
  const options = { month: "short", day: "numeric", hour: "2-digit", minute: "2-digit" };
  return new Date(dateString).toLocaleString("en-US", options);
};

const Profile_Notification = () => {
  const [notifications, setNotifications] = useState(initialNotifications);

  const markAsRead = (id) => {
    setNotifications((prev) =>
      prev.map((n) =>
        n.id === id ? { ...n, read: true } : n
      )
    );
  };

  const deleteNotification = (id) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  };

  return (
    <div className="max-w-3xl mx-auto p-4 sm:p-6 lg:p-8">
      <div className="bg-white shadow-md rounded-xl p-6 space-y-6">
        <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
          <FaBell className="text-yellow-500" /> Notifications
        </h2>

        {notifications.length === 0 ? (
          <p className="text-gray-500 text-sm">You have no notifications.</p>
        ) : (
          <ul className="space-y-4">
            {notifications.map((notif) => (
              <li
                key={notif.id}
                className={`flex items-start justify-between p-4 border rounded-lg ${
                  notif.read ? "bg-gray-50" : "bg-yellow-50"
                }`}
              >
                <div className="flex gap-4">
                  {getTypeIcon(notif.type)}
                  <div>
                    <h3 className="font-semibold text-gray-800">{notif.title}</h3>
                    <p className="text-sm text-gray-600">{notif.message}</p>
                    <p className="text-xs text-gray-400 mt-1">
                      {formatDate(notif.date)}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-2">
                  {!notif.read && (
                    <button
                      onClick={() => markAsRead(notif.id)}
                      className="text-blue-500 text-xs hover:underline"
                    >
                      Mark as read
                    </button>
                  )}
                  <button
                    onClick={() => deleteNotification(notif.id)}
                    className="text-red-500 hover:text-red-700 transition"
                    title="Delete"
                  >
                    <FaTrash />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Profile_Notification;
