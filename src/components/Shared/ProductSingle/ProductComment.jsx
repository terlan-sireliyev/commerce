import React from "react";

const ProductComment = () => {
  return (
    <div className="mx-auto     rounded-lg mt-2 p-4 border border-gray-300 bg-white shadow-md  ">
      {/* Comment Header */}
      <h2 className="mb-4 text-xl font-bold text-gray-800">Product Comments</h2>

      {/* Comment Input Section */}
      <div className="mb-6">
        <form>
          <textarea
            className="w-full rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
            rows="4"
            placeholder="Write your comment here..."
          ></textarea>
          <button className="mt-2 rounded-lg bg-blue-500 px-4 py-2 text-white transition hover:bg-blue-600">
            Post Comment
          </button>
        </form>
      </div>

      {/* Comment List */}
      <div className="mt-4 space-y-4">
        <div className="flex items-start space-x-4">
          <div className="h-12 w-12 flex-shrink-0 rounded-full bg-gray-300"></div>

          <div className="flex-1">
            <div className="flex items-center justify-between">
              <h4 className="font-bold text-gray-800">John Doe</h4>
              <span className="text-sm text-gray-500">
                {new Date().toLocaleTimeString()}
              </span>
            </div>
            <p className="mt-1 text-gray-700">Lorem</p>

            <div className="mt-2 flex space-x-4 text-sm text-gray-500">
              <button className="hover:underline">Reply</button>
              <button className="hover:underline">Edit</button>
              <button className="hover:underline">Delete</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductComment;
