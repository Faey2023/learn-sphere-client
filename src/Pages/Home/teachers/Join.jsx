import Lottie from "lottie-react";
import teaching from "../../../assets/data/teachingAnimation.json";
import { Link } from "react-router-dom";
const Join = () => {
  return (
    <div className="flex">
      <div className="flex-1">
        <Lottie animationData={teaching} style={{ height: "100vh" }} />
      </div>
      <div className="flex flex-col flex-1 justify-center items-center space-y-5">
        <h1 className="font-bold text-3xl">Become an instructor</h1>
        <p className="text-lg font-medium">
          Join our community, share your expertise, and inspire students. Make a
          lasting impact by becoming a teacher on our platform. Together,
          let&apos;s shape the future of education.
        </p>
        <Link
          className="btn rounded-lg btn-primary text-lg text-white"
          to="/teaching"
        >
          Start teaching today
        </Link>
      </div>
    </div>
  );
};

export default Join;
