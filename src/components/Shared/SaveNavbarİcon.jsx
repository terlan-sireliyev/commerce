import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteBookmark } from "../../ReduxStore/bookmark/Bookmark";

const SaveNavbarIcon = () => {
  const bookmarks = useSelector((state) => state.bookmarkName.bookmarks);
  const dispatch = useDispatch();

  const handleClearAll = () => {
    bookmarks.forEach((item) => {
      dispatch(deleteBookmark(item.id));
    });
  };

  return (
    <div className="p-4 max-w-md mx-auto bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-md border border-gray-200 mt-8">
      <div className="flex justify-between items-center mb-5 border-b pb-3">
        <h2 className="text-xl font-bold text-gray-800">Bookmarks</h2>
        {bookmarks.length > 0 && (
          <button
            onClick={handleClearAll}
            className="text-xs text-red-600 hover:text-white hover:bg-red-600 border border-red-300 px-3 py-1 rounded-md transition duration-200"
          >
            Clear All
          </button>
        )}
      </div>

      {bookmarks.length === 0 ? (
        <p className="text-gray-500 text-sm text-center py-6">
          No bookmarked items.
        </p>
      ) : (
        <ul className="space-y-4">
          {bookmarks.map((item) => (
            <li
              key={item.id}
              className="flex cursor-pointer items-center gap-3 bg-white border border-gray-200 rounded-xl p-3 shadow-sm hover:shadow-md transition duration-200"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-16 h-16 object-cover rounded-lg border border-gray-300"
              />
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-800 line-clamp-2">
                  {item.title}
                </p>
                <p className="text-xs text-gray-500 mt-1">${item.price}</p>
              </div>
              <button
                onClick={() => dispatch(deleteBookmark(item.id))}
                className="text-xs text-red-500 hover:text-white hover:bg-red-500 border border-red-300 px-2.5 py-1 rounded-md transition"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SaveNavbarIcon;