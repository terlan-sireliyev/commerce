import { BsEnvelopePlus } from "react-icons/bs";
import { GiVibratingSmartphone } from "react-icons/gi";

const ProductContactSeller = () => {
    return (
    <div className="mx-auto overflow-hidden mt-2 rounded-lg border border-gray-300 bg-white shadow-md">
      {/* Seller Information */}
      <div className="flex items-center bg-gray-50 p-5">
        <img
          src="https://templates.scriptsbundle.com/carspot/demos/images/users/3.jpg"
          alt="Seller"
          className="mr-4 h-14 w-14 rounded-full"
        />
        <div>
          <h2 className="text-lg font-semibold text-gray-700">Sonu Monu</h2>
          <p className="text-sm text-gray-500">Published on: 10 Dec 2017</p>
          <a href="#" className="text-sm text-blue-500 hover:underline">
            More Ads
          </a>
        </div>
      </div>

      {/* Contact Options */}
      <div className="space-y-3 p-5">
        <div className="flex items-center rounded-lg border p-3 transition hover:bg-gray-100">
          <BsEnvelopePlus className="mr-3 text-2xl text-green-500" />
          <span className="font-medium text-gray-700">
            Contact seller via email
          </span>
        </div>

        <div className="flex items-center rounded-lg border p-3 transition hover:bg-gray-100">
          <GiVibratingSmartphone className="mr-3 text-2xl text-purple-500" />
          <span className="font-medium text-gray-700">+994-50-899-69-55</span>
        </div>

        <button className="flex w-full items-center justify-center gap-2 rounded-md bg-blue-500 py-3 text-white transition hover:bg-blue-600">
          <span className="font-semibold">Contact seller</span>
        </button>
      </div>
    </div>
  );
};

export default ProductContactSeller;
