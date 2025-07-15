import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteBookmark } from "../../../ReduxStore/bookmark/Bookmark";

const Save_Page = () => {
  const bookmarks = useSelector((state) => state.bookmarkName.bookmarks);
  const dispatch = useDispatch();

  return (
    <div className="max-w-[1200px] mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">
        Saved Products
      </h1>

      {bookmarks.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {bookmarks.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-4 flex flex-col min-h-[350px]"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-[180px] object-cover rounded-xl mb-4"
              />
              <h2 className="text-lg font-semibold mb-2 text-gray-700 line-clamp-2">
                {item.title}
              </h2>
              <p className="text-gray-600 mb-3">{item.price} AZN</p>

              <div className="mt-auto">
                <button
                  onClick={() => dispatch(deleteBookmark(item.id))}
                  className="w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-xl transition duration-300"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center mt-20 text-gray-500 animate-pulse">
          You have no saved products.
        </div>
      )}
    </div>
  );
};

export default Save_Page;