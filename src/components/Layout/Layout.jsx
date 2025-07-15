import React from "react";
import Navbar from "./Navbar/index";
import { Outlet, useLocation } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persist, store } from "../../ReduxStore/index";
import Footer from "./Footer/index";

const Layout = () => {
  const location = useLocation();

  const isPublishingPage = location.pathname === "/Publish_Page";
  const isLoginPage = location.pathname === "/Login_Page";
  const isSinglePage = /^\/singleProductPage\/[^/]+$/.test(location.pathname);

  const isFullWidth = isPublishingPage || isLoginPage;

  return (
    <div className="relative mt-14">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persist}>
          <Navbar />
          <Outlet />
          <Footer
            isPublishingPage={isFullWidth}
            isFullSinglePage={isSinglePage}
          />
        </PersistGate>
      </Provider>
    </div>
  );
};

export default Layout;
