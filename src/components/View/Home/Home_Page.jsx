import Cart from "../Cart/Cart-page";

const Home = () => {
const WidthAllPage =
  "mx-auto w-full max-w-[1200px] px-4 sm:px-6 md:px-8"; // ekran ölçüsünə uyğun paddings və max-width


    return (
    <div className={`${WidthAllPage}   mx-auto w-[1020px]`}>
      <Cart />
    </div>
  );
};

export default Home;
