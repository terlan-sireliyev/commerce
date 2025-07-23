import { useSelector, useDispatch } from "react-redux";
import { deleteBookmark } from "../../store/ReduxStore/bookmark/Bookmark";
import { Link } from "react-router-dom";

const SaveNavbarIcon = () => {
  const bookmarks = useSelector((state) => state.bookmarkName.bookmarks);
  const dispatch = useDispatch();

  const handleClearAll = () => {
    bookmarks.forEach((item) => {
      dispatch(deleteBookmark(item.id));
    });
  };

  return (
    <div className="mx-auto mt-8 rounded-2xl border border-gray-200 bg-gradient-to-br from-white to-gray-50 p-4 shadow-md">
      <div className="mb-5 flex items-center justify-between border-b pb-3">
        <h2 className="text-xl font-bold text-gray-800">Bookmarks</h2>
        {bookmarks.length > 0 && (
          <button
            onClick={handleClearAll}
            className="rounded-md border border-red-300 px-3 py-1 text-xs text-red-600 transition duration-200 hover:bg-red-600 hover:text-white"
          >
            Clear All
          </button>
        )}
      </div>

      {bookmarks.length === 0 ? (
        <p className="py-6 text-center text-sm text-gray-500">
          No bookmarked items.
        </p>
      ) : (
        <ul className="space-y-4">
          {bookmarks.map((item) => (
            <li
              key={item.id}
              className="flex cursor-pointer items-center gap-3 rounded-xl border border-gray-200 bg-white p-3 shadow-sm transition duration-200 hover:shadow-md"
            >
              <Link to={`/singleProductPage/${item.id}`}>
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-16 w-16 rounded-lg border border-gray-300 object-cover"
                />
              </Link>

              <div className="flex-1">
                <p className="line-clamp-2 text-sm font-medium text-gray-800">
                  {item.title}
                </p>
                <p className="mt-1 text-xs text-gray-500">${item.price}</p>
              </div>
              <button
                onClick={() => dispatch(deleteBookmark(item.id))}
                className="rounded-md border border-red-300 px-2.5 py-1 text-xs text-red-500 transition hover:bg-red-500 hover:text-white"
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
