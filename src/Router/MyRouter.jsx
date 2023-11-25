import { createBrowserRouter } from "react-router-dom";
import MainPage from "../Layout/MainPage";
import Home from "../Pages/Home/Home";
import Error from "../error/Error";
import SignUp from "../Pages/Home/Account/SignUp";
import SignIn from "../Pages/Home/Account/SignIn";

const MyRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    errorElement: <Error />,
    children: [{ path: "/", element: <Home /> }],
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
]);

export default MyRouter;
