import { FaTrashAlt, FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { deletFavorite } from "../../../store/ReduxStore/favorite/FavoriteSlice";
import { Link } from "react-router-dom";

const Favorite = () => {
  const favoriteData = useSelector((state) => state.favoriteName.favoriteItems);
  const dispatch = useDispatch();
  return (
    <div className="mx-auto w-full max-w-[1200px] px-4 py-10">
      <h1 className="mb-6 text-center text-3xl font-bold text-gray-800">
        Your Favorite Picks
      </h1>
      {favoriteData.map((item) => (
        <div
          key={item.id}
          className="mt-4 flex flex-col items-center rounded-xl bg-white p-4 shadow-md transition-transform duration-300 hover:shadow-lg sm:flex-row"
        >
          {/* Product Image */}
          <Link to={`/singleProductPage/${item.id}`} className="flex-shrink-0">
            <img
              src={item.image}
              alt={item.title}
              className="h-36 w-36 rounded-lg object-contain"
            />
          </Link>

          {/* Product Info */}
          <div className="mt-4 flex w-full flex-grow flex-col sm:ml-5 sm:mt-0">
            <Link to={`/singleProductPage/${item.id}`}>
              <h2 className="text-xl font-semibold text-gray-900 transition duration-300 hover:text-sky-600">
                {item.title}
              </h2>
            </Link>
            <p className="my-2 line-clamp-2 text-gray-600">
              {item.description}
            </p>

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

            {/* Move Delete Button to Bottom on Mobile */}
            <div className="mt-4 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
              <span className="text-lg font-bold text-sky-500">
                ${item.price}
              </span>
              <button
                onClick={() => dispatch(deletFavorite(item.id))}
                className="flex w-full items-center justify-center gap-2 rounded-full bg-red-500 px-4 py-2 text-white shadow transition duration-300 hover:bg-red-600 sm:w-auto"
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
  );
};

export default Favorite;
