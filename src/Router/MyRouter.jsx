import React from "react";
import { createBrowserRouter } from "react-router-dom";
import MainPage from "../Layout/MainPage";
import Home from "../Pages/Home/Home";

const MyRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    children: [{ path: "/", element: <Home /> }],
  },
]);

export default MyRouter;
