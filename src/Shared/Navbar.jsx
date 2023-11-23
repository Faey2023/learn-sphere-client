import { Link, NavLink } from "react-router-dom";
import logo from "../assets/images/online-education-removebg-preview.png";
const Navbar = () => {
  const navLinks = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "text-[#DDA0DD]" : "")}
      >
        Home
      </NavLink>
      <NavLink
        to="/classes"
        className={({ isActive }) => (isActive ? "text-[#DDA0DD]" : "")}
      >
        All Classes
      </NavLink>
      <NavLink
        to="/teaching"
        className={({ isActive }) => (isActive ? "text-[#DDA0DD]" : "")}
      >
        Teach on Learn Sphere
      </NavLink>
    </>
  );
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          <div className="flex">
            <img className="w-20 h-20" src={logo} alt="logo" />
            <p className="text-3xl font-bold my-auto">Learn Sphere</p>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-5 text-xl">
            {navLinks}
          </ul>
        </div>
        <div className="navbar-end">
          <Link className="text-xl">Sign In</Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
