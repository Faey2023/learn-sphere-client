import { FaDownload, FaHome } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { IoIosAddCircle } from "react-icons/io";
import { MdAccountCircle } from "react-icons/md";
const TeacherDashboard = () => {
  return (
    <>
      <div className="flex flex-col">
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
};

export default TeacherDashboard;
