import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import ProductsContext from "./context/ProductProvider";
import Products from "./pages/Products";
import MainHandlers from "./context/ProductProvider";
import UserHandlers from "./context/UserContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <MainHandlers>
      <UserHandlers>
        <App />
      </UserHandlers>
    </MainHandlers>
  </BrowserRouter>
);
