import { FaFacebookF } from "react-icons/fa";
import { BsGoogle } from "react-icons/bs";
import { GrGithub } from "react-icons/gr";
import UseAuth from "../hooks/UseAuth";
import Swal from "sweetalert2";
import toast from "react-hot-toast";

const SharedSignIn = () => {
  const { google, github, facebook } = UseAuth();

  const handleSignIn = (data) => {
    data()
      .then((res) => {
        toast.success("Logged in successfully.");
      })
      .catch((err) => {
        toast.error(err.code);
      });
  };
  return (
    <div className="flex flex-col justify-center text-center items-center">
      <h4 className="text-xl font-medium mb-4">Or sign in with</h4>
      <div className="flex gap-14">
        <button className="btn btn-circle border-black text-2xl">
          <FaFacebookF onClick={() => handleSignIn(facebook)} />
        </button>
        <button className="btn btn-circle border-black text-2xl">
          <BsGoogle onClick={() => handleSignIn(google)} />
        </button>
        <button className="btn btn-circle border-black text-2xl">
          <GrGithub onClick={() => handleSignIn(github)} />
        </button>
      </div>
    </div>
  );
};

export default SharedSignIn;
