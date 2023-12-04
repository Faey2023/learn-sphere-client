import Lottie from "lottie-react";
import UseAxiosSecure from "../hooks/UseAxiosSecure";
import loadingAnimation from "../assets/data/loadingAnimation.json";
import { Navigate } from "react-router-dom";
import useAuth from "../custom hooks/useAuth";

const AdminRoute = ({ children }) => {
  const { user, loading } = useAuth();
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
