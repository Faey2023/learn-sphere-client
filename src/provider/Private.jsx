import React from "react";
import UseAuth from "../hooks/UseAuth";
import { Navigate } from "react-router-dom";
import Lottie from "lottie-react";
import loadingAnimation from '../assets/data/loadingAnimation.json'

const Private = ({ children }) => {
  const { user, loading } = UseAuth();
  if (loading) {
    return <Lottie animationData={loadingAnimation}/>
  }
  if (user) {
    return children;
  }
  return <Navigate to="signin" />;
};

export default Private;
