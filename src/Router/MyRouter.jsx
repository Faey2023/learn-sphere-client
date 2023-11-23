import React from "react";
import { createBrowserRouter } from "react-router-dom";
import MainPage from "../Layout/MainPage";
import Home from "../Pages/Home/Home";
import Error from "../error/Error";

const MyRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,errorElement:<Error/>,
    children: [{ path: "/", element: <Home /> }],
  },
]);

export default MyRouter;
