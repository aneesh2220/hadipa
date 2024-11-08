import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/login.jsx";
import Catalog from "./components/catalog.jsx";
import Interface from "./components/interface.jsx";
import Signup from "./components/signup.jsx";

const router = createBrowserRouter(
  [
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/catalog",
    element: <Catalog/>,
  },
  {
    path: "/interface/:i",
    element: <Interface/>,
  },
  {
    path: "/signup",
    element: <Signup/>,
  }
]
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <Signup/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();