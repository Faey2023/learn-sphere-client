import { createBrowserRouter } from "react-router-dom";
import MainPage from "../Layout/MainPage";
import Home from "../Pages/Home/Home";
import Error from "../error/Error";
import SignUp from "../Pages/Home/Account/SignUp";
import SignIn from "../Pages/Home/Account/SignIn";
import Teach from "../Pages/teaching/Teach";
import Dashboard from "../Layout/dashboard/Dashboard";
import Profile from "../Layout/dashboard/Profile/Profile";
import MyEnroll from "../Layout/dashboard/enroll/MyEnroll";
import Private from "../provider/Private";
import AllClasses from "../Layout/all classes/AllClasses";

const MyRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/classes",
        element: <AllClasses />,
      },
      {
        path: "/teaching",
        element: (
          <Private>
            <Teach />
          </Private>
        ),
      },
    ],
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "dashboard",
        element: <h1>Dashboard</h1>,
      },
      { path: "myenroll", element: <MyEnroll /> },
      { path: "profile", element: <Profile /> },
    ],
  },
]);

export default MyRouter;
