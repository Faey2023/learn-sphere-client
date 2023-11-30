import Lottie from "lottie-react";
import UseAuth from "../hooks/UseAuth";
import UseAxiosSecure from "../hooks/UseAxiosSecure";
import loadingAnimation from "../assets/data/loadingAnimation.json";
import { Navigate } from "react-router-dom";

const AdminRoute = ({ children }) => {
  const { user, loading } = UseAuth();
  const axiosSecure = UseAxiosSecure();
  if (loading) {
    return (
      <Lottie animationData={loadingAnimation} style={{ height: "50vh" }} />
    );
  }
  if (user) {
    return children;
  }
  return <Navigate to="signin" />;
};

export default AdminRoute;
