import { FaHome } from 'react-icons/fa';
import { FaUsers } from 'react-icons/fa6';
import {  MdAccountCircle, MdPendingActions } from 'react-icons/md';
import { SiGoogleclassroom } from 'react-icons/si';
import { NavLink } from 'react-router-dom';

const AdminNav = () => {
    return (
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
            to="/dashboard/allclass"
            className={({ isActive }) =>
              isActive
                ? "text-[#DDA0DD] text-2xl font-medium"
                : "text-black text-2xl font-medium"
            }
          >
            <SiGoogleclassroom className="inline-block mr-2" />
            All class
          </NavLink>
        </div>
    );
};

export default AdminNav;