import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./Layout/Layout";
import Home_Page from "./pages/Home/Home_Page";
import Profile_Page from "./components/View/Profile/Profile_Page";
import Search from "./components/View/Search/Search-page";
import Message_Page from "./components/View/Messages/Message_Page";
import Basket_Page from "./components/View/Basket/Basket_Page";
import Favorite_Page from "./pages/Favorite/Favorite_Page";
import Save_Page from "./components/View/Save/Save_Page";
import MyOrder_Page from "./components/View/MyOrder/MyOrder_Page";
import MyAllOrder_Page from "./components/View/MyAllOrder/MyAllOrder_Page";
import Checkout from "./components/View/Checkout/Checkout-page";
import Login_Page from "./pages/Login/Login_Page";
// import Register_Page from "./components/View/Register/Register_Page";

import Register_Page from "./pages/Register/Register_Page";

import Contact_Page from "./pages/Contact/Contact_Page";
import About_Page from "./pages/About/About_Page";
import SingleProductPage from "./components/View/Products/SingleProductPage";
import Publish_Page from "./pages/Publish/Publish_Page";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home_Page />} />
          <Route path="/profile/Profile_Page" element={<Profile_Page />} />
          <Route path="search" element={<Search />} />
          <Route path="Message_Page" element={<Message_Page />} />
          <Route path="Basket_Page" element={<Basket_Page />} />
          <Route path="Favorite_Page" element={<Favorite_Page />} />
          <Route path="Save_Page" element={<Save_Page />} />
          <Route path="MyOrder_Page" element={<MyOrder_Page />} />
          <Route path="MyAllOrder_Page" element={<MyAllOrder_Page />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="Login_Page" element={<Login_Page />} />
          <Route path="Register_Page" element={<Register_Page />} />
          <Route path="Contact_Page" element={<Contact_Page />} />
          <Route path="About_Page" element={<About_Page />} />
          <Route path="Publish_Page" element={<Publish_Page />} />
          <Route path="singleProductPage" element={<SingleProductPage />} />
          <Route path="/singleProductPage/:productId" element={<SingleProductPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
