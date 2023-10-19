import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import LanguageContextProvider from "./contexts/LanguageContext.jsx";
import CartContextProvider from "./contexts/CartContext.jsx";

import "react-lazy-load-image-component/src/effects/blur.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LanguageContextProvider>
      <CartContextProvider>
        <App />
      </CartContextProvider>
    </LanguageContextProvider>
  </React.StrictMode>
);
