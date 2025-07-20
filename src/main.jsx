import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import DinamicOpenMenu from "./contextStore/DinamicOpenMenu.jsx";
import ApiProductContext from "./contextStore/ApiProduct.jsx";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <DinamicOpenMenu>
       <ApiProductContext>
        <App />
      </ApiProductContext>
    </DinamicOpenMenu>
  </StrictMode>,
);
