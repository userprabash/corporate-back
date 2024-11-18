import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "./style.scss";
import Header from "./Component/Header.jsx";
import { BrowserRouter } from "react-router-dom";
import Footer from "./Component/Footer.jsx";
import ScrollToTopButton from "./Component/ScrollToTopButton.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <ScrollToTopButton />

      <App />
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);
