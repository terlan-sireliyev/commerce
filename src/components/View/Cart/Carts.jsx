import  { useState } from "react";
import { Link } from "react-router-dom";
import { FaRegHeart, FaRegComment, FaRegBookmark } from "react-icons/fa";
import globalBasketData from "../../../zustandStore";
import { useDispatch } from "react-redux";
import { addFavorite } from "../../../ReduxStore/favorite/FavoriteSlice";
import { addBookmark } from "../../../ReduxStore/bookmark/Bookmark";

const CartItem = (products) => {
  const {
    id,
    title,
    price,
    description,
    image,
    likes: initialLikes = 0,
  } = products;

  const obj = { id, title, price, description, image };
  const { addBasketData } = globalBasketData((state) => state);
  const dispatch = useDispatch();
  const [likes, setLikes] = useState(initialLikes);

  const handleAddToBasket = () => {
    addBasketData(obj);
  };

  const handleAddFavorite = () => {
    dispatch(addFavorite(obj));
    setLikes((prevLikes) => prevLikes + 1);
  };

  const handleAddBookmark = () => {
    dispatch(addBookmark(obj));
  };

  return (
    <div className="flex flex-col overflow-hidden rounded-xl bg-white shadow-lg transition-transform duration-300 hover:scale-[1.01]">
      {/* User Info */}
      <div className="flex items-center gap-3 bg-gray-100 p-4">
        <Link to={`/singleProductPage/${id}`} className="h-[40px] w-[46px]">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7NWttsEvAfBbaLehwK3oLrf_3AX_1tgfblg&s"
            alt="User Avatar"
            className="h-full w-full rounded-full object-cover"
          />
        </Link>

        <div className="flex w-full flex-col">
          <div className="flex justify-between items-center">
            <span className="text-sm font-semibold text-gray-800">John Doe</span>
            <span className="text-sm text-gray-500">2024-11-18, 14:00</span>
          </div>
          <span className="text-sm text-gray-500">Baku, Azerbaijan</span>
        </div>
      </div>

      {/* Product Image */}
      <Link to={`/singleProductPage/${id}`}>
        <img
          src={image || "/default-product.png"}
          alt={title}
          className="h-56 w-full object-cover"
        />
      </Link>

      {/* Product Info */}
      <div className="p-4">
        <h2 className="line-clamp-1 text-xl font-semibold text-gray-800">{title}</h2>
        <p className="mt-2 text-sm text-gray-600 line-clamp-1">{description}</p>

        <div className="mt-3 flex items-center justify-between">
          <span className="text-lg font-bold text-gray-900">${price}</span>
          <div className="flex gap-3">
            <button
              onClick={handleAddFavorite}
              className="text-red-500 hover:text-red-600 transition"
              title="Add to Favorites"
            >
              <FaRegHeart />
            </button>
            <button
              className="text-gray-500 hover:text-gray-700 transition"
              title="Comment"
            >
              <FaRegComment />
            </button>
            <button
              onClick={handleAddBookmark}
              className="text-blue-500 hover:text-blue-600 transition"
              title="Add to Bookmarks"
            >
              <FaRegBookmark />
            </button>
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
          <span>Likes: {likes}</span>
          <button
            onClick={handleAddToBasket}
            className="rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 transition"
          >
            Add to Basket
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
