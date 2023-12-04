// import { FaFacebookF } from "react-icons/fa";
import { BsGoogle } from "react-icons/bs";
// import { GrGithub } from "react-icons/gr";
import { useNavigate } from "react-router-dom";
// import UseAxiosPublic from "../hooks/UseAxiosPublic";
// import Swal from "sweetalert2";
import useAuth from "../custom hooks/useAuth";
import { saveUserInDB } from "../custom hooks/func";
import toast from "react-hot-toast";

const SharedSignIn = () => {
  const { google } = useAuth();
  const navigate = useNavigate();

  const handleSignIn = async () => {
    try {
      const result = await google();
      // console.log(result);
      await saveUserInDB(result?.user);
      toast.success("login successful!");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
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
