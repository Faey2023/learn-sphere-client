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
import ClassDetails from "../Layout/all classes/ClassDetails";
import AddClass from "../Pages/dahsboard teacher/AddClass";

const MyRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/class",
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
      {
        path: "/class/:id",
        element: (
          <Private>
            <ClassDetails />
          </Private>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/class/${params.id}`),
      },
      { path: "/addclass", element: <AddClass /> },
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
