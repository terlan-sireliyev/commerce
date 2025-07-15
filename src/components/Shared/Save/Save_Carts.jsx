// import React from "react";
// import { FaTrashAlt, FaShareAlt, FaRegEye } from "react-icons/fa";
// import { Link } from "react-router-dom";

// const Save_Carts = ({
//   id,
//   saveImage,
//   saveName,
//   saveData,
//   saveDescription,
//   country,
//   city,
// }) => {
//   return (
//     <div className="relative overflow-hidden rounded-lg bg-white shadow-lg transition-transform duration-300 hover:shadow-xl">
//       <button className="absolute right-4 top-4 z-10 flex items-center justify-center gap-2 rounded-full bg-red-500 px-4 py-2 text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-red-600">
//         <FaTrashAlt className="text-xl" />
//         <span className="text-sm">Remove</span>
//       </button>

//       <Link to={`/singleProductPage/${id}`}>
//         <img
//           src={saveImage}
//           alt={`page`}
//           className="h-48 w-full rounded-t-lg object-cover"
//         />
//       </Link>

//       <div className="flex flex-col p-4">
//         <Link to={`/singleProductPage/${id}`}>
//           <h2 className="text-lg font-semibold text-gray-900 transition-colors hover:text-sky-600">
//             {saveName}
//           </h2>
//         </Link>
//         <p className="mb-4 line-clamp-2 text-gray-600">{saveDescription}</p>

//         {/* Country and City Info */}
//         <div className="mb-2 text-sm text-gray-500">
//           <span>Location: </span>
//           <span className="font-semibold">
//             {city}, {country}
//           </span>
//         </div>

//         <div className="mt-auto flex items-center justify-between text-gray-500">
//           <span>{`Saved on: ${saveData}`}</span>
//         </div>

//         {/* Action Buttons placed at the bottom */}
//         <div className="mt-4 flex items-center justify-between">
//           <button className="flex items-center gap-2 text-sky-500 hover:text-sky-600">
//             <FaShareAlt /> Share
//           </button>
//           <button className="flex items-center gap-2 text-gray-500 hover:text-gray-600">
//             <FaRegEye /> View
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Save_Carts;
