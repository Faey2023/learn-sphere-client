import { NavLink, Outlet } from "react-router-dom";
import AdminNav from "./admin/AdminNav";
import StudentDashboard from "./student/enroll/StudentDashboard";
import TeacherDashboard from "./teacher/TeacherDashboard";
import useGetRole from "../../custom hooks/useGetRole";
import useTeacherRole from "../../custom hooks/useTeacherRole";
import { FaHome } from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md";
import ToggleButton from "./button/ToggleButton";
import { useState } from "react";

const DashboardMain = () => {
  const [userS] = useGetRole();
  const [userT] = useTeacherRole();
  const role = userS.role;
  const role2 = userT.role;
  console.log(role2);
  const [toggle, setToggle] = useState(true);
  const toggleHandler = (event) => {
    setToggle(event.target.checked);
  };
  const links = (
    <>
      {role === "admin" && <AdminNav />}
      {role2 === "instructor" && (
        <ToggleButton toggle={toggle} toggleHandler={toggleHandler} />
      )}
      {role2 === "instructor" ? (
        toggle ? (
          <TeacherDashboard />
        ) : (
          <StudentDashboard />
        )
      ) : (
        ""
      )}
    </>
  );
  return (
    <>
      <div className="flex">
        <img
          className="w-20 h-20"
          src="https://i.ibb.co/zRx4x6D/online-education-removebg-preview.png"
          alt="logo"
        />
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
            {/* <p>hello</p> */}
          </ul>
        </div>
      </div>
    </>
  );
};

export default DashboardMain;
