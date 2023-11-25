import Lottie from "lottie-react";
import errorAnimation from "../assets/data/error.json";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div>
      <Link className="text-5xl font-bold" to="/">
        Back to Home
      </Link>
      <Lottie style={{ height: "90vh" }} animationData={errorAnimation} />
    </div>
  );
};

export default Error;
