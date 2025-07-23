
const Profile_Header = () => {
  const gridHeaderClass = "max-md:col-span-5 max-lg:col-span-4 ";

  return (
    <>
      <div className="mt-4 flex justify-center pr-4 max-md:col-span-5">
    <img
  className="w-[300px] h-[160px] object-cover max-md:w-[300px] max-md:h-[160px]"
  src="https://media.istockphoto.com/id/1400577262/photo/happy-mature-african-american-man-standing-alone-against-a-red-background-in-a-studio-and.webp?a=1&b=1&s=612x612&w=0&k=20&c=oR0_NyouKgPESp508Bag8GEN_JbkIA3SJoYs4s_3iXI="
  alt="User Photo"
/>
      </div>
      <div
        className={`${gridHeaderClass} max-lg: col-span-2 my-auto max-lg:mt-4 max-lg:pl-2 max-md2:ml-2 max-md:ml-0`}
      >
        <h1>John Doe</h1>
        <p className="mt-1 flex items-center text-sm text-gray-500">
          Last logged in:
          <span className="font-medium">14-01-2017, 6:40 AM</span> <br />
          <span className="text-xs text-gray-400">
            [USA Time (GMT +6:00hrs)]
          </span>
        </p>
        <div className="mt-3 flex space-x-2">
          <span className="flex items-center rounded-full bg-yellow-500 px-2.5 py-0.5 text-xs font-semibold text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mr-1 h-4 w-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11h-2v2h2V7zm0 4h-2v4h2v-4z" />
            </svg>
            Paid Package
          </span>
          <span className="flex items-center rounded-full bg-green-500 px-2.5 py-0.5 text-xs font-semibold text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mr-1 h-4 w-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1-6V7h2v5H9zm2 2h-2v2h2v-2z" />
            </svg>
            Dealer
          </span>
        </div>
      </div>
      <div className="col-span-2 ml-auto flex items-center overflow-hidden text-center max-lg:col-span-5 max-lg:my-4 max-lg:w-full max-md2:col-span-5 max-md2:w-full max-md:rounded-none lg:gap-2">
        <div className="rounded-lg bg-gray-500 p-4 text-white max-lg:w-full max-lg:rounded-none max-md2:w-full max-xs:h-[105px]">
          <p className="text-xl font-bold">374</p>
          <p className="text-sm">ADD SOLD</p>
        </div>
        <div className="rounded-lg bg-blue-500 p-4 text-white max-lg:w-full max-lg:rounded-none max-md2:w-full max-xs:h-[105px]">
          <p className="text-xl font-bold">980</p>
          <p className="text-sm">TOTAL LISTINGS</p>
        </div>
        <div className="rounded-lg bg-green-500 p-4 text-white max-lg:w-full max-lg:rounded-none max-md2:w-full max-xs:h-[105px]">
          <p className="text-xl font-bold">413</p>
          <p className="text-sm">FAVOURITES ADS</p>
        </div>
      </div>
    </>
  );
};

export default Profile_Header;
