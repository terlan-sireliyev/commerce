import React from "react";

const Message_Left = () => {
  return (
    <div className="w-1/3 bg-gradient-to-br from-blue-100 to-blue-300 p-6 text-gray-700 md:w-1/4">
      <h2 className="mb-4 text-2xl font-bold">Contacts</h2>

      <input
        type="text"
        placeholder="Search users..."
        className="mb-4 w-full rounded-full border border-blue-400 bg-blue-50 p-3 text-blue-700 placeholder-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-300"
      />

      <ul className="space-y-3 overflow-y-auto max-h-[calc(100vh-150px)] pr-1">
        {[
          { name: "James Carter", img: "https://randomuser.me/api/portraits/men/32.jpg" },
          { name: "Emma Johnson", img: "https://randomuser.me/api/portraits/women/45.jpg" },
          { name: "Michael Smith", img: "https://randomuser.me/api/portraits/men/53.jpg" },
          { name: "Sophia Williams", img: "https://randomuser.me/api/portraits/women/65.jpg" },
          { name: "Daniel Brown", img: "https://randomuser.me/api/portraits/men/41.jpg" },
          { name: "Olivia Davis", img: "https://randomuser.me/api/portraits/women/34.jpg" },
          { name: "William Jones", img: "https://randomuser.me/api/portraits/men/26.jpg" },
          { name: "Isabella Garcia", img: "https://randomuser.me/api/portraits/women/29.jpg" },
          { name: "Ethan Martinez", img: "https://randomuser.me/api/portraits/men/77.jpg" },
          { name: "Mia Rodriguez", img: "https://randomuser.me/api/portraits/women/12.jpg" },
        ].map((user, index) => (
          <li
            key={index}
            className="flex cursor-pointer items-center space-x-3 rounded-lg px-2 py-3 transition-all duration-200 ease-in-out hover:bg-blue-200"
          >
            <img
              src={user.img}
              alt={user.name}
              className="h-10 w-10 rounded-full border-2 border-white shadow-md"
            />
            <span className="text-lg font-medium">{user.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Message_Left;
