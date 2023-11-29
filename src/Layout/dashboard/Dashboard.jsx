import { NavLink, Outlet } from "react-router-dom";
import logo from "../../assets/images/online-education-removebg-preview.png";
const Dashboard = () => {
  const links = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? "text-[#DDA0DD] text-xl font-medium"
            : "text-black text-xl font-medium"
        }
      >
        Home
      </NavLink>
      {/* admin*/}
      {/* student */}
      <NavLink
        to="/dashboard/profile"
        className={({ isActive }) =>
          isActive
            ? "text-[#DDA0DD] text-xl font-medium"
            : "text-black text-xl font-medium"
        }
      >
        My Profile
      </NavLink>
      <NavLink
        to="/dashboard/myenroll"
        className={({ isActive }) =>
          isActive
            ? "text-[#DDA0DD] text-xl font-medium"
            : "text-black text-xl font-medium"
        }
      >
        My Enroll
      </NavLink>
      {/* teacher */}
      <NavLink
        to="/dashboard/addclass"
        className={({ isActive }) =>
          isActive
            ? "text-[#DDA0DD] text-xl font-medium"
            : "text-black text-xl font-medium"
        }
      >
        Add Class
      </NavLink>
    </>
  );
  return (
    <>
      <div className="flex">
        <img className="w-20 h-20" src={logo} alt="logo" />
        <p className="text-3xl font-bold my-auto">Learn Sphere</p>
      </div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center space-y-5">
          {/* Page content here */}
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open dashboard settings
          </label>
          <Outlet />
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-sky-100">
            {/* Sidebar content here */}
            {links}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
