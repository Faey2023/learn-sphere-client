import { Navigate } from "react-router-dom";
import Lottie from "lottie-react";
import loadingAnimation from "../assets/data/loadingAnimation.json";
import useAuth from "../custom hooks/useAuth";

const Private = ({ children }) => {
  const { user, loading } = useAuth();
  if (loading) {
    return (
      <Lottie animationData={loadingAnimation} style={{ height: "50vh" }} />
    );
  }
  if (user) {
    return children;
  }
  return <Navigate to="/signin" />;
};

export default Private;
