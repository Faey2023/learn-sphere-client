import { FaFacebookF } from "react-icons/fa";
import { BsGoogle } from "react-icons/bs";
import { GrGithub } from "react-icons/gr";
import UseAuth from "../hooks/UseAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import UseAxiosPublic from "../hooks/UseAxiosPublic";
import Swal from "sweetalert2";

const SharedSignIn = () => {
  const { google, github, facebook } = UseAuth();
  const navigate = useNavigate();
  const axiosPublic = UseAxiosPublic();

  const handleSignIn = () => {
    google().then(res => {
      const userInfo = {
        name: res.user?.name,
        email: res.user?.email,
      };
      axiosPublic.post("/users", userInfo).then(res => {
        navigate("/");
        //  if (res.data.insertedId) {
        //     // reset();
        //     Swal.fire({
        //       title: "Login successful!",
        //       showClass: {
        //         popup: `
        //           animate__animated
        //           animate__fadeInUp
        //           animate__faster
        //         `,
        //       },
        //       hideClass: {
        //         popup: `
        //           animate__animated
        //           animate__fadeOutDown
        //           animate__faster
        //         `,
        //       },
        //     });

        //   }
      });
    });
  };
  return (
    <div className="flex flex-col justify-center text-center items-center">
      <h4 className="text-xl font-medium mb-4">Or sign in with</h4>
      <div className="flex gap-14">
        {/* <button className="btn btn-circle border-black text-2xl">
          <FaFacebookF onClick={() => handleSignIn(facebook)} />
        </button> */}
        <button className="btn btn-circle border-black text-2xl">
          <BsGoogle onClick={handleSignIn} />
        </button>
        {/* <button className="btn btn-circle border-black text-2xl">
          <GrGithub onClick={() => handleSignIn(github)} />
        </button> */}
      </div>
    </div>
  );
};

export default SharedSignIn;
