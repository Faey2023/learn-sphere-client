import { FaHome } from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md";
import { NavLink } from "react-router-dom";
const StudentDashboard = () => {
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
          to="/dashboard/myenroll"
          className={({ isActive }) =>
            isActive
              ? "text-[#DDA0DD] text-2xl font-medium"
              : "text-black text-2xl font-medium"
          }
        >
          <FaHome className="inline-block mr-2" />
          My Enroll
        </NavLink>
      </div>
    </>
  );
};

export default StudentDashboard;
