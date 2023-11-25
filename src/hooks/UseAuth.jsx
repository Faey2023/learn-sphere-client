import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const UseAuth = () => {
  const everything = useContext(AuthContext);
  return everything;
};

export default UseAuth;
