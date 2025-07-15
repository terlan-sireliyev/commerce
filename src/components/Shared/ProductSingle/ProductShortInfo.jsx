import { useState } from "react";
import { FaShare, FaRegHeart, FaShoppingCart } from "react-icons/fa";
import { SlLike, SlDislike } from "react-icons/sl";
import { CiBookmark } from "react-icons/ci";
import { GiVibratingSmartphone } from "react-icons/gi";
import { BsEnvelopePlus } from "react-icons/bs";

const ProductShortInfo = () => {
  const [likes, setLikes] = useState(120);
  const [dislikes, setDislikes] = useState(45);
  const [shares, setShares] = useState(30);
  const [bookmarks, setBookmarks] = useState(75);

  return (
    <div className="mx-auto mt-4 rounded-lg border border-gray-200 bg-white px-4 py-2 shadow-sm  ">
      <ul className="flex items-center justify-around">
        <li className="flex flex-col items-center">
          <div
            onClick={() => setLikes(likes + 1)}
            className="cursor-pointer rounded-full border border-gray-300 p-2 hover:bg-gray-100"
          >
            <SlLike className="text-xl text-blue-600" />
          </div>
          <span className="mt-1 text-sm text-gray-600">{likes}</span>
          <span className="text-xs text-gray-500">Like</span>
        </li>
        <li className="flex flex-col items-center">
          <div
            onClick={() => setDislikes(dislikes + 1)}
            className="cursor-pointer rounded-full border border-gray-300 p-2 hover:bg-gray-100"
          >
            <SlDislike className="text-xl text-red-600" />
          </div>
          <span className="mt-1 text-sm text-gray-600">{dislikes}</span>
          <span className="text-xs text-gray-500">Dislike</span>
        </li>
        <li className="flex flex-col items-center">
          <div
            onClick={() => setShares(shares + 1)}
            className="cursor-pointer rounded-full border border-gray-300 p-2 hover:bg-gray-100"
          >
            <FaShare className="text-xl text-purple-600" />
          </div>
          <span className="mt-1 text-sm text-gray-600">{shares}</span>
          <span className="text-xs text-gray-500">Share</span>
        </li>
        <li className="flex flex-col items-center">
          <div
            onClick={() => setBookmarks(bookmarks + 1)}
            className="cursor-pointer rounded-full border border-gray-300 p-2 hover:bg-gray-100"
          >
            <CiBookmark className="text-xl text-yellow-600" />
          </div>
          <span className="mt-1 text-sm text-gray-600">{bookmarks}</span>
          <span className="text-xs text-gray-500">Save</span>
        </li>
      </ul>
    </div>
  );
};

export default ProductShortInfo;
