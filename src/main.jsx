import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import DinamicOpenMenu from "./store/contextStore/DinamicOpenMenu.jsx";
// import DinamicOpenMenu from "./
// 
// ";
import ApiProductContext from "./store/contextStore/ApiProduct.jsx";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <DinamicOpenMenu>
       <ApiProductContext>
        <App />
      </ApiProductContext>
    </DinamicOpenMenu>
  </StrictMode>,
);
