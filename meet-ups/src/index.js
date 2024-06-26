import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import { FavouritesContextProvider } from "./store/favourites-context";

document.title = "Meetups";

const root = ReactDOM.createRoot(document.getElementById("root")); // createRoot(container!) if you use TypeScript
root.render(
  <FavouritesContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </FavouritesContextProvider>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
