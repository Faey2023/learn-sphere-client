import { NavLink, Outlet } from "react-router-dom";
import { FaHome, FaDownload } from "react-icons/fa";
import {
  MdAccountCircle,
  MdPendingActions,
  MdOutlineDataThresholding,
} from "react-icons/md";
import { SiGoogleclassroom } from "react-icons/si";
import { IoIosAddCircle } from "react-icons/io";
import { FaUsers } from "react-icons/fa6";
import logo from "../../assets/images/online-education-removebg-preview.png";
const Dashboard = () => {
  const links = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? "text-[#DDA0DD] text-2xl font-medium"
            : "text-black text-2xl font-medium"
        }
      >
        <FaHome className="inline-block mr-2" />
        Home
      </NavLink>
      <NavLink
        to="/dashboard/profile"
        className={({ isActive }) =>
          isActive
            ? "text-[#DDA0DD] text-2xl font-medium"
            : "text-black text-2xl font-medium"
        }
      >
        <MdAccountCircle className="inline-block mr-2" />
        My Profile
      </NavLink>
      {/* admin*/}
      <div className="flex flex-col">
        <NavLink
          to="/dashboard/request"
          className={({ isActive }) =>
            isActive
              ? "text-[#DDA0DD] text-2xl font-medium"
              : "text-black text-2xl font-medium"
          }
        >
          <MdPendingActions className="inline-block mr-2" />
          Teacher Request
        </NavLink>
        <NavLink
          to="/dashboard/users"
          className={({ isActive }) =>
            isActive
              ? "text-[#DDA0DD] text-2xl font-medium"
              : "text-black text-2xl font-medium"
          }
        >
          <FaUsers className="inline-block mr-2" />
          Total users
        </NavLink>

        <NavLink
          to="/dashboard/allclass"
          className={({ isActive }) =>
            isActive
              ? "text-[#DDA0DD] text-2xl font-medium"
              : "text-black text-2xl font-medium"
          }
        >
          <SiGoogleclassroom className="inline-block mr-2" />
          All classes
        </NavLink>
      </div>
      {/* student */}
      <div className="flex flex-col">
        <NavLink
          to="/dashboard/myenroll"
          className={({ isActive }) =>
            isActive
              ? "text-[#DDA0DD] text-2xl font-medium"
              : "text-black text-2xl font-medium"
          }
        >
          <MdOutlineDataThresholding className="inline-block mr-2" />
          My Enroll
        </NavLink>
      </div>
      {/* teacher */}
      <div className="flex flex-col">
        <NavLink
          to="/dashboard/addclass"
          className={({ isActive }) =>
            isActive
              ? "text-[#DDA0DD] text-2xl font-medium"
              : "text-black text-2xl font-medium"
          }
        >
          <IoIosAddCircle className="inline-block mr-2" />
          Add Class
        </NavLink>
        <NavLink
          to="/dashboard/myclass"
          className={({ isActive }) =>
            isActive
              ? "text-[#DDA0DD] text-2xl font-medium"
              : "text-black text-2xl font-medium"
          }
        >
          <FaDownload className="inline-block mr-2" />
          My Class
        </NavLink>
      </div>
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
