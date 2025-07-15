import React from "react";
import { FaTrashAlt, FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { deletFavorite } from "../../../ReduxStore/favorite/FavoriteSlice";
import { Link } from "react-router-dom";

const Favorite = () => {
  const favoriteData = useSelector((state) => state.favoriteName.favoriteItems);
  const dispatch = useDispatch();

  return (
    <div className="w-full max-w-[1200px] mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Your Favorite Picks
      </h1>

      {favoriteData.length > 0 ? (
        <div className="space-y-4">
          {favoriteData.map((item) => (
            <div
              key={item.id}
              className="flex items-center bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-transform duration-300"
            >
              {/* Product Image */}
              <Link to={`/singleProductPage/${item.id}`} className="flex-shrink-0">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-36 h-36 object-contain rounded-lg"
                />
              </Link>

              {/* Product Info */}
              <div className="ml-5 flex flex-col flex-grow">
                <Link to={`/singleProductPage/${item.id}`}>
                  <h2 className="text-xl font-semibold text-gray-900 hover:text-sky-600 transition duration-300">
                    {item.title}
                  </h2>
                </Link>
                <p className="text-gray-600 my-2 line-clamp-2">{item.description}</p>

                <div className="grid grid-cols-5 gap-2 text-sm text-gray-500 max-md2:grid-cols-1">
                  <div className="col-span-1 flex items-center gap-1">
                    <FaMapMarkerAlt />
                    <span>Baku, Azerbaijan</span>
                  </div>
                  <div className="col-span-4 flex items-center gap-1">
                    <FaCalendarAlt />
                    <span>2024-12-22</span>
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <span className="text-lg font-bold text-sky-500">${item.price}</span>
                  <button
                    onClick={() => dispatch(deletFavorite(item.id))}
                    className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full shadow transition duration-300"
                    title="Remove from Favorites"
                  >
                    <FaTrashAlt className="text-lg" />
                    <span>Delete</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-xl text-gray-500 mt-16">
          You haven’t added any favorites yet.
        </p>
      )}
    </div>
  );
};

export default Favorite;
