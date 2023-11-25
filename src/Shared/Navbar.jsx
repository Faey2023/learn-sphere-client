import { Link, NavLink } from "react-router-dom";
import logo from "../assets/images/online-education-removebg-preview.png";
import UseAuth from "../hooks/UseAuth";
import toast from "react-hot-toast";
const Navbar = () => {
  const { user, logout } = UseAuth();
  const handleLogout = () => {
    logout()
      .then((res) => {
        toast.success("Logged out successfully");
      })
      .catch((err) => {
        toast.error(err.code);
      });
  };
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
          {user ? (
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img alt="user image" src={user.photoUrl} />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <Link onClick={handleLogout}>Logout</Link>
                </li>
              </ul>
            </div>
          ) : (
            <Link to='/signin' className="text-xl">Sign In</Link>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;