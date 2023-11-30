import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const useAuth = () => {
    const everything = useContext(AuthContext);
  return everything;
};

export default useAuth;
