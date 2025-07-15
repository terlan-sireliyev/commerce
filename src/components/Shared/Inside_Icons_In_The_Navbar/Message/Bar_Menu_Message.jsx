import React from "react";
import { FiSearch, FiMoreVertical, FiRefreshCw } from "react-icons/fi";
import { messages, user } from "./Message_Mock";

const Bar_Menu_Message = () => {
  return (
    <div className="overflow-y-auto  h-full bg-white" style={{ maxHeight: "calc(100vh - 0px)" }}>
      {/* User Profile Section */}
      <div className="flex items-center gap-4 border-b bg-white px-5 py-5 shadow-sm">
        <div className="relative">
          <img
            src={user.avatar}
            alt={user.name}
            className="h-14 w-14 rounded-full border-2 border-indigo-500"
          />
          {user.online && (
            <span className="absolute bottom-1 right-1 h-3 w-3 rounded-full border border-white bg-green-500"></span>
          )}
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-medium text-gray-700">{user.name}</h3>
          <p className="text-sm text-gray-500">
            {user.online ? "Online" : "Offline"}
          </p>
        </div>
      </div>

      {/* Header */}
      <div className="flex items-center justify-between border-b bg-white px-5 py-3 shadow-sm">
        <h2 className="text-xl font-semibold text-gray-700">Messages</h2>
        <div className="flex items-center gap-3">
          <FiRefreshCw className="cursor-pointer text-gray-500 hover:text-indigo-600" />
          <FiMoreVertical className="cursor-pointer text-gray-500 hover:text-indigo-600" />
        </div>
      </div>

      {/* Search Bar */}
      <div className="border-b bg-white px-5 py-3">
        <div className="flex items-center rounded-lg bg-gray-100 px-4 py-2">
          <FiSearch className="text-gray-500" />
          <input
            type="text"
            placeholder="Search messages..."
            className="ml-3 w-full bg-transparent text-sm text-gray-700 outline-none"
          />
        </div>
      </div>

      {/* Tabs */}
      <div className="flex justify-around bg-white">
        <button className="flex-1 border-b-4 border-indigo-500 py-3 text-center text-indigo-600">
          Sorted
        </button>
        <button className="flex-1 py-3 text-center text-gray-500 hover:text-gray-700">
          Other
        </button>
      </div>

      {/* Messages List */}
      <div className="overflow-y-auto bg-white">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className="flex cursor-pointer items-center gap-4 px-5 py-4 hover:bg-indigo-50"
          >
            <div className="relative">
              <img
                src={msg.avatar}
                alt={msg.name}
                className="h-12 w-12 rounded-full border-2 border-gray-300"
              />
              {msg.online && (
                <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border border-white bg-green-500"></span>
              )}
            </div>
            <div className="flex-1">
              <div className="flex justify-between">
                <h3 className="text-sm font-semibold text-gray-700">
                  {msg.name}
                </h3>
                <span className="text-xs text-gray-400">{msg.timestamp}</span>
              </div>
              <p className="truncate text-sm text-gray-500">{msg.message}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bar_Menu_Message;
